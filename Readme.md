# React Native Firebase Install
[DOCS](https://rnfirebase.io/)

## For IOS

Skip [Altering CocoaPods to use frameworks](https://rnfirebase.io/) And add the following code

You may not need to use `use_frameworks!` or `use_modular_headers!` because it's getting conflict with use_flipper

You can add the following without using them in ios/Podfile:

```
  platform :ios, '12.4'
  ...
  ...
  
  pod 'Firebase', :modular_headers => true
  pod 'FirebaseCoreInternal', :modular_headers => true
  pod 'GoogleUtilities', :modular_headers => true
  pod 'FirebaseCore', :modular_headers => true

  #....add any library need headers
```

#### Ref

```
  pod 'Firebase', :modular_headers => true
  pod 'FirebaseCore', :modular_headers => true
  pod 'FirebaseCoreInternal', :modular_headers => true  
  pod 'FirebaseStorageInternal', :modular_headers => true
  pod 'FirebaseCoreExtension', :modular_headers => true
  pod 'FirebaseAppCheckInterop', :modular_headers => true
  pod 'FirebaseAuthInterop', :modular_headers => true
  pod 'FirebaseMessagingInterop', :modular_headers => true
  pod 'GTMSessionFetcher', :modular_headers => true
  pod 'FirebaseAppCheckInterop', :modular_headers => true
  pod 'FirebaseAuthInterop', :modular_headers => true
  pod 'GoogleUtilities', :modular_headers => true
```

for 

```
    "@react-native-firebase/analytics": "15.4",
    "@react-native-firebase/app": "15.4",
    "@react-native-firebase/auth": "15.4",
    "@react-native-firebase/crashlytics": "15.4",
    "@react-native-firebase/firestore": "15.4",
    "@react-native-firebase/perf": "15.4",
```


