## 🔹 Security & Performance

### Q. How do you secure a React Native app (storage, network, obfuscation)?

👉

1.  Use platform secure stores for secrets/tokens:

    - iOS: Keychain (hardware-backed / Secure Enclave when possible)
    - Android: Keystore (+ EncryptedSharedPreferences / EncryptedFile)
    - Never store secrets in AsyncStorage (okay for non-sensitive prefs only).
    - Encrypt local DB/files (e.g., SQLCipher, Realm encryption key kept in Keychain/Keystore).
    - Biometrics for sensitive actions/unlock (Face ID / Touch ID).
    - Clipboard hygiene: don’t place secrets on the clipboard.

2.  Network Security (Data in Transit):

    - HTTPS everywhere; disable clear-text traffic.
    - TLS/Certificate Pinning to defeat MITM on hostile networks.
    - Short-lived access tokens + refresh tokens (use PKCE for OAuth).
    - HSTS on your API; rotate certs cleanly.
    - Validate server domain; avoid accepting self-signed certs in prod. \* Sanitize logs: never log tokens/PII.

3.  Obfuscation & App Hardening (Code & Binary)

    - Android: enable R8/ProGuard (minify, shrink, obfuscate); shrinkResources; remove logs.
    - iOS: enable dead code stripping; strip symbols; consider Swift/Obj-C obfuscators (e.g., SwiftShield) if threat model demands it.
    - Hermes: shipping JS as bytecode mildly raises reverse-engineering cost (not a security boundary).
    - Root/Jailbreak detection, debugger detection, emulator detection if your risk profile requires it.
    - Play Integrity API / SafetyNet (Android) and App Attest / DeviceCheck (iOS) for device/app attestation.
    - Anti-tamper: verify bundle/file checksums; reject unsigned updates.

## ✅ Minimal “Good Default” Setup

- Tokens in Keychain/Keystore (via react-native-keychain)
- HTTPS + cert pinning (OkHttp/NSURLSession or RN SSL-pinning lib)
- R8/ProGuard + shrinkResources; strip logs
- No secrets in code; use CI secrets; sign CodePush updates
- Encrypted DB/files with a key stored in secure storage
- Crash/analytics PII scrubbing; prevent screenshots on sensitive screens

  ***

### Q. How do you identify and fix memory leaks or jank in animations?

👉
Step 1: Identify memory leaks

    - Xcode Instruments → Leaks & Allocations (iOS)
    - Android Studio Profiler → Memory & CPU (Android)
    - Flipper plugins (React DevTools + Hermes Debugger + Memory Profiler)
    - Performance Monitor in React Native Dev Menu (⌘D on iOS Simulator, ⌘M on Android Emulator)

    Common Symptoms

    - Increasing memory usage even when screens are unmounted.
    - Listeners (e.g., AppState, Dimensions, NetInfo) not removed.
    - Timers (setInterval, setTimeout) running after component unmount.
    - Async requests updating state after unmount.

Step 2: Identify jank in animations

- React Native Performance Monitor → shows FPS & JS frame rate.
- Flipper Perf Monitor or Systrace for deeper timeline.
- React Profiler (DevTools) → check re-renders.

Common Causes

- Heavy JS work during animations (blocking the JS thread).
- Not using native-driven animations (causes JS→UI thread bottlenecks).
- Rendering too many components at once.
- Large images without caching or resizing.

Fix jank

1. Use useNativeDriver for animations
2. Batch state updates & avoid re-renders
3. Optimize FlatList / Scroll performance
4. Debounce expensive work during animations
5. Profile Images

SUMMARY:

👉 “To detect memory leaks, I use Xcode Instruments on iOS, Android Studio Profiler on Android, and Flipper
for JS/Hermes memory debugging. Typical leaks come from not cleaning up event listeners, timers,
or async calls after unmount — so I always use cleanup functions in useEffect. For animation jank,
I profile with the React Native performance monitor. Common causes are JS-thread blocking,
unnecessary re-renders, or not using native drivers. I fix this by using useNativeDriver for animations,
optimizing FlatLists with virtualization, memoizing child components, and offloading heavy work off the UI thread.
This ensures smooth 60 FPS animations and no memory bloat.”

---

### Q. How do you measure app performance in production?

👉 “In production, I rely on performance monitoring tools like Firebase Performance or Sentry to track app startup
time, network latency, and slow renders. I measure cold vs warm start times, API response times,
and dropped frames using native profiling and custom metrics. For network, I log request durations
using Axios interceptors. For crashes and ANRs, I integrate Sentry or Crashlytics.
I also add custom in-app metrics like screen render times and FlatList rendering delays, which I push
to analytics dashboards. This gives me both system-level and user-centric performance insights in production.”
