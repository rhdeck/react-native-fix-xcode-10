const cp = require("child_process");
module.exports = [
  {
    name: "fix-xcode",
    description: "Fix issues in xcode builds as of beta 1",
    func: () => {
      cp.spawnSync("./node_modules/.bin/react-native-fix-xcode-10", {
        stdio: "inherit"
      });
    }
  }
];
