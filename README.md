# react-native-fix-xcode-10

Fixes issues with compiling React Native 0.55.4 apps on XCode 10

## Update

Xcode 10 release and RN 0.57.0 seem to obviate the need for this package. Here's hoping everyone gets a better build experience! 

# Usage

```
yarn add rhdeck/react-native-fix-xcode-10
open ios/*.xcodeproj
# run the project
# FAIL!
react-native fix-xcode
# run the project again
# Fail? run it again
react-native fix-xcode
# run the project again
# SUCCESS!
```

You only need to do this when first spinning up the project, or if yarn decides to "reset" your node_modules which it often does after another add command.

Here's hoping this is only necessary for a few days.

