#!/usr/bin/env node
const cp = require("child_process");
const fs = require("fs");
const Path = require("path");
const glob = require("glob");
//Build glog
const cwd = process.cwd();
console.log("Starting from directory", cwd);
const glogpath = Path.join(
  cwd,
  "node_modules",
  "react-native",
  "third-party",
  "glog-0.3.4"
);
console.log("This is my glogpath", glogpath);
if (!fs.existsSync(glogpath)) {
  console.log(
    "This can only fix after you have compiled at least once. Try react-native run-ios or the like, let it fail,  then run this command again."
  );
  process.exit();
}
process.chdir(glogpath);
cp.execSync(
  Path.join(
    cwd,
    "node_modules",
    "react-native",
    "scripts",
    "ios-configure-glog.sh"
  ),
  { stdio: "inherit" }
);
//Now that's done, let's go get the websocket
const wspath = Path.join(
  cwd,
  "node_modules",
  "react-native",
  "Libraries",
  "Websocket"
);
const g = Path.join(
  process.env["HOME"],
  "Library",
  "Developer",
  "Xcode",
  "DerivedData",
  Path.basename(cwd) + "*",
  "**",
  "libfishhook.a"
);
const results = glob.sync(g);

console.log("I have globbed and here is what I found", g, results);
if (results.length > 0) {
  fs.copyFileSync(results[0], Path.join(wspath, "libfishhook.a"));
}
