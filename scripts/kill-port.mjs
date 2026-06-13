import { execSync } from "node:child_process";

const port = process.argv[2] ?? "3000";

function killOnWindows() {
  let out = "";
  try {
    out = execSync(`netstat -ano | findstr ":${port}"`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
  } catch {
    console.log(`Port ${port} is free`);
    return;
  }
  const pids = new Set();
  for (const line of out.split(/\r?\n/)) {
    if (!line.includes("LISTENING")) continue;
    const parts = line.trim().split(/\s+/);
    const pid = parts.at(-1);
    if (pid && pid !== "0") pids.add(pid);
  }
  for (const pid of pids) {
    try {
      execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
      console.log(`Stopped process ${pid} on port ${port}`);
    } catch {
      /* already gone */
    }
  }
  if (pids.size === 0) console.log(`Port ${port} is free`);
}

function killOnUnix() {
  try {
    execSync(`lsof -ti:${port} | xargs kill -9`, { stdio: "ignore" });
    console.log(`Stopped process on port ${port}`);
  } catch {
    console.log(`Port ${port} is free`);
  }
}

if (process.platform === "win32") killOnWindows();
else killOnUnix();
