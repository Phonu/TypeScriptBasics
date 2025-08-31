/**
🔹 Scenario-Based / System Design
How would you design a chat application in React Native?
How do you manage offline support and sync for a news reading app?
If your app suddenly starts crashing on iOS after an update, how would you debug and fix it?


Bonus:
What’s new in React Native 0.73+ that you find exciting?
What are your thoughts on Expo vs bare React Native?
How do you manage monorepos in large-scale React Native projects?
Would you like sample answers or a mock interview based on these questions?

Q. How would you investigate and fix an app crashing when scrolling through image lists
A.
    1.Check Crash Logs
    Use Flipper, React Native Debugger, or Logcat (Android) / Xcode console (iOS).
        OutOfMemoryError (Android)
        EXC_BAD_ACCESS, SIGABRT (iOS)
        JS stack trace if it's a JavaScript crash

        Use FlatList + FastImage
        Cache and optimize images
        Avoid unnecessary renders
        Profile memory & layout
        Don’t load everything at once


Q. How would you approach storing sensitive user data securely, considering platform-specific solutions?
A.











 */
