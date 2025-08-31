# 📘 React Native Core Interview Q&A

---

## 🔹 Q1. How does the React Native bridge work?

**Answer:**  
React Native apps are built with **JavaScript (UI + logic)** and **Native Modules (platform-specific functionality)**. These run on separate threads, and the **bridge** acts as a messaging system that allows them to communicate **asynchronously**.

### 🔸 Limitations of the Old Bridge:

- Works asynchronously only.
- Data must be converted to JSON while passing.
- Performance bottlenecks → too many back-and-forth calls cause dropped FPS and slow UIs.

### 🚀 Latest React Native Architecture (solves bridging issues):

- **Fabric** → Improved rendering performance using **C++ shared memory** (avoids JSON serialization).
- **TurboModules** → Enables **synchronous native calls** (battery, camera, file access) without old bridging.
- **JSI Interface** → Allows **direct function calls** from JS to C++ layers.

---

## 🔹 Q2. What are the performance bottlenecks in React Native and how do you address them?

**Answer:**  
Performance bottlenecks occur due to unnecessary rendering, poor list handling, heavy computations, memory leaks, or inefficient navigation.

### ✅ Solutions:

- **New Architecture** → TurboModules, JSI, Fabric reduce JS ↔ Native delays.
- **Unnecessary Rendering** → Use `useCallback`, `useMemo`, `React.memo`.
- **List Rendering** → Use `FlatList` / `SectionList`, enable `windowSize`, `pagination`, `lazy loading`.
- **Image Optimization** → Use `react-native-fast-image`, resize before load, avoid base64.
- **Heavy Computations** → Offload to native threads (`react-native-threads`, workers).
- **Animations** → Use `react-native-reanimated` (runs on UI thread).
- **Memory Leaks** → Always cleanup timers, listeners, subscriptions in `useEffect`.
- **Navigation** → Use `react-native-screens`, enable `detachInactiveScreens`.
- **Production Build** → Strip `console.*` logs (`babel-plugin-transform-remove-console`).

### 🛠 Tools for Performance Debugging:

- Flipper (with React DevTools, network, layout inspector)
- Xcode Instruments (iOS)
- Android Profiler (Android Studio)
- WhyDidYouRender (detect unnecessary renders)
- React Native Performance Monitor

---

## 🔹 Q3. How do you handle different screen sizes and resolutions?

**Answer:**

- Use **FlexBox** for layouts.
- Use **Dimensions API** → `const { width, height } = Dimensions.get("window")`.
- Libraries → `react-native-responsive-screen`.
- Use **SafeAreaView** for iOS notches.
- Apply **Platform-specific styles**.
- Responsive images → `resizeMode="cover"` / `"contain"`.

---

## 🔹 Q4. Difference between `useEffect`, `useLayoutEffect`, and `useFocusEffect`?

| Hook              | When It Runs                                    | Use Case                                        |
| ----------------- | ----------------------------------------------- | ----------------------------------------------- |
| `useEffect`       | After render, asynchronously                    | API calls, subscriptions, analytics             |
| `useLayoutEffect` | Before paint (sync after DOM mutations)         | Measure layout, update styles before paint      |
| `useFocusEffect`  | When screen comes into focus (React Navigation) | Refetch data, setup listeners when user returns |

---

## 🔹 Q5. Explain how FlatList and VirtualizedList improve performance?

**Answer:**  
They use **virtualization** → render only visible items + a buffer (not the full list).

```jsx
<FlatList
  data={myBigArray}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <Text>{item.title}</Text>}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews={true} // Android only
  getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}
/>
```

---

## 🔹 Q6. How do you manage native modules? Have you ever written one?

**Answer:**

- Use existing native modules (e.g., `react-native-device-info`, `react-native-fs`).
- Can write custom modules in **Java (Android)** or **Objective-C/Swift (iOS)** and expose them to JS.

---

## 🔹 Q7. How do you handle background tasks in React Native?

| Use Case                       | Example                             |
| ------------------------------ | ----------------------------------- |
| Background fetch/sync          | Sync messages, refresh data         |
| Background location tracking   | GPS tracking (delivery apps)        |
| Silent push notifications      | Receive updates without opening app |
| Long-running downloads/uploads | Upload a video file in background   |
| Periodic task execution        | Run jobs every X minutes/hours      |

---

## 🔹 Bonus: Quick Example – Array of Objects

```js
Array.from({ length: 5 }, (_, i) => ({
  id: i,
  name: `index ${i}`,
}));
```

## 🔹 Q8. React.memo, Callback and useMemo?

| Feature         | What It Memoizes            | Use Case                                                        |
| --------------- | --------------------------- | --------------------------------------------------------------- |
| **React.memo**  | Functional component output | Prevents child components from re-rendering unnecessarily       |
| **useCallback** | Function reference          | Prevents functions from being recreated and passed as new props |
| **useMemo**     | Computed value              | Prevents expensive calculations from re-running on every render |

⚡ Interview Tip

✅ React.memo is for components.

✅ useCallback is for functions.

✅ useMemo is for values (calculations).
