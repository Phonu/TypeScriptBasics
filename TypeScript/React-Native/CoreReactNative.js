/**
  Core React Native
    Q. How does the React Native bridge work?
        A. React native apps build with javascript(UI and logic) and Native Modules(platform specific functionality). And these two layers 
        runs on seperate threads, and bridge works as messaging system that allow them talk asyncronously.


        Limitation on bridge:
        - its works asyncronously.
        - data need to best convert on json while passsing through the bridge.
        - Performance bottlenecks- too much of back and forth calls leads to drop on frame per second (FPS) and slow UIs.


        With the latest React native architecture these bridging issues has been resolved.
        * Fabic -> improved rendering performance and use C++ shared memory to avoid JSON serialization.
        * TurboModules -> helps us make the native calls (battery charge, camera, file access) synchronously without anu older briding concept.
        * JSI Interface -> enables direct function calls from JS to C++ layers

    What are the performance bottlenecks in React Native and how do you address them?
        A. With latest React native architecture, unnecessary rendering, use Reanimated animations

        * New React Native Architecture -> resolves the communication between the JS an native layer. Heavy animations and large data rendering cause delay on UI performance.
            Use libraries like JSI and turbo modules 

        * Unnecessary Rendering -> Use hooks like useCallback, useMemo, React.memo to memoize components and functions.
                                -> use flatlist or section list with proper keyExtractor  and shouldComponentUpdate.

        * List Rendering -> Always use FlatList and SectionList for large Data set.
                         -> enables windowSize, initialNumToRender and removeClippedSubview for optimaation.
                         -> Use pagination or lazy loading.
        * Image Loading issues -> use react-native-fast-image for better caching  and performance.
                                -> Avoid inline base64 images
                                -> Resize images before loading.
        * Heavy Computation in JS Thread -> Blocking the JS thread with CPU-intensive tasks causes UI lags.
                                        -> Offload work to native code or use background threads with tools like JSThread, react-native-threads, or react-native-worker.
                                        -> Use Reanimated animations , which runs on the UI Thread instead of JS.
        * Memory Leaks -> Unmounted components cause memory bloat or crashes.
                        -> ALways clean up timers, listners and subscritions in useEffect.
                        -> Use profiling tools like Xcode intruments and Android Profile to track leaks.
        * Inefficient Navigation -> Poorly managed navigation stacks increase memory usage and transition lag.
                                 -> Use React Navigation with react-native-screens for native navigation performance.
                                 -> Enable screen detach (detachInactiveScreens: true).

        * Debugging/Dev Tools in Production -> Bundling dev tools like console logs, Flipper, etc., can degrade performance.
                                            -> Strip out all console.* statements in production (babel-plugin-transform-remove-console)
                                            -> Ensure dev-only libraries are not included in the production build.
        
        * Tools to Diagnose Performance -> Flipper (React DevTools, network, layout inspector).
                                        -> Xcode Instruments (iOS).
                                        -> Android Profiler (Android Studio).
                                        -> WhyDidYouRender (detect unnecessary renders).
                                        -> React Native Performance Monitor.













                                
    Q. How do you handle different screen sizes and resolutions in React Native apps?
    A. - Use FlexBox for layouts
       - Dimesion api from react-native (const { width, height } = Dimensions.get('window'))
       - react-native-responsive-screen
       - SafeAreaView for iOS notches.
       - Platform specifuc styles.
       - Responseive images : resize mode -> cover/contain



    Q. What is the difference between useEffect, useLayoutEffect, and useFocusEffect?
    A. 
            | Hook              | When It Runs                                             | Use Case                                                       |
        | ----------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
        | `useEffect`       | **After** the render, asynchronously                     | API calls, subscriptions, analytics, etc.                      |
        | `useLayoutEffect` | **Before** paint (synchronously after DOM mutations)     | Measure layout, update styles **before screen is painted**     |
        | `useFocusEffect`  | **When screen comes into focus** (from React Navigation) | Refetch data or set up listeners when user returns to a screen |


                | Scenario                                | Hook              |
        | --------------------------------------- | ----------------- |
        | Fetch data once when component loads    | `useEffect`       |
        | Measure view dimensions                 | `useLayoutEffect` |
        | Refresh screen every time it's focused  | `useFocusEffect`  |
        | Avoid layout flicker on dynamic updates | `useLayoutEffect` |
        | Reset screen state on back navigation   | `useFocusEffect`  |



    Q. Explain how FlatList and VirtualizedList improve performance in large lists.
    A. FlatList and VirtualizedList are optimized components for rendering large lists in React Native.
        Its render only the items which are visible on screen, plus a few offscreen items that is called
        windowing or virtualization.
        
        <FlatList
            data={myBigArray}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            initialNumToRender={10}        // Items to render initially
            maxToRenderPerBatch={10}       // Items rendered in each batch
            windowSize={5}                 // Viewable window buffer
            removeClippedSubviews={true}   // Unmount items outside window (Android only)
            getItemLayout={(data, index) => (
                { length: 50, offset: 50 * index, index }
        )}
/>


    Q. How do you manage native modules? Have you ever written one?
    A. 
     Using Existing native modules packages like react-native-device-info, react-native-fs
     


    Q. How do you handle background tasks in React Native?
    A. 
            | Use Case                       | Example                                            |
        | ------------------------------ | -------------------------------------------------- |
        | Background fetch/sync          | Sync messages, refresh data                        |
        | Background location tracking   | GPS tracking for delivery apps                     |
        | Silent push notifications      | Receive updates without opening app                |
        | Long-running downloads/uploads | Upload a video file even when app is in background |
        | Periodic task execution        | Run tasks every X minutes/hours                    |





 */
