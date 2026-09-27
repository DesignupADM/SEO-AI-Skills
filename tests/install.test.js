const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const cli = path.join(root, 'bin/install.js');
function run(args, cwd) {
  return spawnSync(process.execPath, [cli, ...args], { cwd, encoding: 'utf8' });
}
for (const [agent, dir] of Object.entries({codex:'.codex',claude:'.claude',gemini:'.gemini',cursor:'.cursor',copilot:'.github'})) {
  test(`${agent}: standalone project installation and replacement`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'seo-install-'));
    try {
      const args = ['--agent', agent, '--scope', 'project'];
      assert.equal(run(args, tmp).status, 0);
      const target = path.join(tmp, dir, 'skills/seo-content-optimizer');
      assert.equal(fs.readFileSync(path.join(target, 'SKILL.md'), 'utf8'), fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8'));
      for (const name of fs.readdirSync(path.join(root, 'references'))) {
        assert.equal(fs.readFileSync(path.join(target, 'references', name), 'utf8'), fs.readFileSync(path.join(root, 'references', name), 'utf8'));
      }
      assert.equal(fs.existsSync(path.join(target, '.claude')), false);
      assert.notEqual(run(args, tmp).status, 0);
      assert.equal(run([...args, '--force'], tmp).status, 0);
    } finally { fs.rmSync(tmp, {recursive:true, force:true}); }
  });
}
test('invalid options and unrelated replacement are rejected; dry run has no writes', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'seo-install-'));
  try {
    const target = path.join(tmp, 'custom');
    assert.equal(run(['--target', target, '--dry-run'], tmp).status, 0);
    assert.equal(fs.existsSync(target), false);
    fs.mkdirSync(target);
    fs.writeFileSync(path.join(target, 'keep.txt'), 'preserve');
    assert.notEqual(run(['--target', target, '--force'], tmp).status, 0);
    assert.equal(fs.readFileSync(path.join(target, 'keep.txt'), 'utf8'), 'preserve');
    for (const args of [['--agent','unknown'], ['--scope','bad'], ['--agent'], ['--target','--force']]) assert.notEqual(run(args, tmp).status, 0);
  } finally { fs.rmSync(tmp, {recursive:true, force:true}); }
});
