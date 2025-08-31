📘 Core React Native Interview Questions & Answers

A complete interview-prep guide with fundamentals, performance, native modules, storage, testing, and deployment.

📌 Basics & Fundamentals

❓ What is React Native and how is it different from ReactJS?

ReactJS → Used for building web apps. Runs in the browser using DOM.

React Native → Used for building mobile apps (iOS & Android). Uses native components instead of HTML tags.

👉 React Native lets you write JavaScript/TypeScript, but renders truly native UI.

❓ How does React Native achieve cross-platform development?

Uses a bridge to communicate between JS thread and native thread.

Core logic is written once in JS, and UI maps to platform-specific native components.

❓ What are the advantages and limitations of React Native?

✅ Advantages:

Single codebase for iOS & Android.

Hot Reloading & Fast Refresh.

Large community & ecosystem.

Access to native APIs.

⚠️ Limitations:

Not 100% native performance (heavy animations, gaming apps may suffer).

Some advanced features require native modules.

App size is larger than pure native apps.

❓ Explain the difference between Native components and React Native components.

Native components → UIKit (iOS), Views (Android).

React Native components → Abstractions written in JS (View, Text, Image) that map to native components.

❓ What is the React Native architecture?

JS Thread → Runs React/JS logic.

Bridge → Serializes data between JS & Native.

Native Thread → Executes platform APIs, UI rendering.

📌 Components & UI
❓ What are the core components in React Native?

View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput.

❓ Difference between ScrollView and FlatList?

ScrollView → Renders all elements at once (bad for large lists).

FlatList → Optimized, renders items lazily, supports virtualization.

❓ When should you use SectionList over FlatList?

Use SectionList for grouped lists with headers (e.g., contacts grouped by alphabet).

❓ What is VirtualizedList in React Native?

The base component behind FlatList and SectionList.

Provides virtualization → renders only visible items, recycles views.

❓ How do you handle styling in React Native?

Options:

StyleSheet.create({ ... })

Inline styles

Utility libraries → NativeWind, Styled Components

📌 State Management
❓ How do you manage state in React Native apps?

Local state → useState, useReducer

Global state → Context API, Redux, MobX, Zustand

❓ Difference between Context API and Redux in React Native.

Context API → Lightweight, good for small/medium apps.

Redux → Centralized store, great for large apps with complex state transitions.

❓ When would you prefer MobX, Redux Toolkit, or Zustand over Context API?

MobX → Reactive, simpler than Redux.

Redux Toolkit → Enterprise-level, async support, immutability.

Zustand → Minimalistic, hooks-based.

📌 Navigation & Lifecycle
❓ How do you handle navigation in React Native?

React Navigation → Most popular JS-based navigation library.

Native Navigators → e.g., Wix React Native Navigation for native-level performance.

❓ What are React lifecycle methods? How do they map to hooks?

componentDidMount → useEffect(() => { ... }, [])

componentDidUpdate → useEffect(() => { ... }, [deps])

componentWillUnmount → Cleanup inside useEffect

❓ How do you detect AppState changes (background, foreground)?
import { AppState } from 'react-native';

useEffect(() => {
const subscription = AppState.addEventListener('change', nextState => {
console.log("App state changed:", nextState);
});
return () => subscription.remove();
}, []);

📌 Performance & Optimization
❓ What are the common performance bottlenecks in React Native?

Heavy re-renders

Large lists in ScrollView

Expensive computations on UI thread

Memory leaks

❓ How do you optimize FlatList performance?

Use keyExtractor

Use getItemLayout

Use initialNumToRender

Use shouldComponentUpdate or React.memo()

❓ What is the difference between useMemo, useCallback, and React.memo()?

useMemo → Memoizes computed value.

useCallback → Memoizes function reference.

React.memo() → Prevents unnecessary re-render of components.

❓ How do you handle memory leaks in React Native apps?

Cleanup listeners in useEffect.

Avoid setting state after unmount.

Use profiling tools (Flipper, Xcode Instruments, Android Profiler).

📌 Native Modules & APIs
❓ How does React Native communicate with native modules?

Through the JS ↔ Native bridge using async message passing.

❓ How do you create a custom native module in iOS/Android?

iOS (Objective-C/Swift) → Create a class extending RCTBridgeModule.

Android (Java/Kotlin) → Extend ReactContextBaseJavaModule.

❓ When would you prefer writing a native module over using JS-based libraries?

Performance-heavy tasks (image/video processing).

Accessing device APIs not yet supported by RN.

📌 Networking & Storage
❓ How do you make API calls in React Native?

fetch (built-in)

axios (popular library, interceptors, error handling)

❓ How do you store sensitive user data securely?

AsyncStorage → For non-sensitive data.

Keychain (iOS) / Keystore (Android) → For sensitive data like tokens.

❓ How do you handle offline storage and synchronization?

Use SQLite, WatermelonDB, Realm.

Implement offline-first pattern + sync logic.

📌 Testing & Deployment
❓ How do you test a React Native app?

Unit tests → Jest

E2E tests → Detox, Appium

❓ What’s the difference between debug build and release build in RN?

Debug build → Development mode, larger, slower, with dev tools.

Release build → Optimized, smaller, no debug tools.

❓ How do you deploy a React Native app?

iOS → Xcode → Archive → App Store.

Android → Generate signed APK/AAB → Play Store.

📌 Security & Advanced Topics
❓ How do you enable ProGuard in Android React Native apps?

Edit android/app/proguard-rules.pro.

Enable in gradle.properties:

android.enableProguardInReleaseBuilds=true

❓ What’s the iOS equivalent of ProGuard?

Bitcode & Obfuscation tools.

Apple strips symbols in release builds automatically.

❓ How do you handle push notifications in React Native?

Use Firebase Cloud Messaging (FCM) or APNs (iOS).

Libraries: react-native-push-notification, react-native-firebase/messaging.

❓ Explain how CodePush works for React Native.

Microsoft CodePush allows OTA (Over-The-Air) updates.

Pushes JS bundle updates to users without App Store/Play Store review.
