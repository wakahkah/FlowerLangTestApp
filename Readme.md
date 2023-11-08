# React Native Firebase Install
[DOCS](https://rnfirebase.io/)

Install lib
```bash
yarn add @react-native-firebase/app
```


## For IOS

Skip [Altering CocoaPods to use frameworks](https://rnfirebase.io/) And add the following code

You may not need to use `use_frameworks!` or `use_modular_headers!` because it's getting conflict with use_flipper

You can add the following without using them in ios/Podfile:

```dart
  platform :ios, '12.4'
  ...
  ...
  
  pod 'Firebase', :modular_headers => true
  pod 'FirebaseCoreInternal', :modular_headers => true
  pod 'GoogleUtilities', :modular_headers => true
  pod 'FirebaseCore', :modular_headers => true

  #....add any library need headers
```


