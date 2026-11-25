import { spawn } from 'node:child_process';

function runCmd(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', shell: true });
    p.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(' ')} exited with code ${code}`));
    });
  });
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('Preview server timed out');
}

const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
  stdio: 'pipe',
  shell: true,
});

try {
  await waitForServer('http://localhost:4173');
  console.log('Preview server ready on http://localhost:4173');
  await runCmd('python', ['-u', 'tests/verify_site.py']);
  await runCmd('node', ['tests/visual_compare.mjs']);
} finally {
  server.kill('SIGTERM');
  if (process.platform === 'win32' && server.pid) {
    spawn('taskkill', ['/pid', String(server.pid), '/f', '/t'], { shell: true });
  }
}
