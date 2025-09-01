import { isEqual } from "lodash";
import React from "react";
import { View, Text } from "react-native";

interface ActionItemProps {
  action1: string;
  action2: number;
  onpress: () => void;
}

const ActionItem = (props: ActionItemProps) => {
  return (
    <View>
      <Text>{props.action1}</Text>
    </View>
  );
};

const ActionItemDataUnchanged = (
  prevProps: ActionItemProps,
  nextProps: ActionItemProps
) => {
  return isEqual(prevProps, nextProps);
};

export default React.memo(ActionItem, ActionItemDataUnchanged);

/** ---------------------------------------------------------------------------------------------------- */

// Code Optimization & Obfuscation on iOS
// On Android → ProGuard/R8 for shrinking & obfuscation.
// On iOS → Dead Code Stripping, Symbol Stripping, App Thinning, and optional third-party obfuscators.

/** ---------------------------------------------------------------------------------------------------- */

/**
 * 
 
ProGuard in React Native is mainly used on Android to shrink, obfuscate, and optimize Java bytecode. It helps:
🚀 Reduce APK size (by removing unused classes/methods).
🔒 Make reverse-engineering harder (by obfuscating method/class names).
⚡ Optimize performance in some cases.

Crash Symbolication
Like ProGuard’s mapping.txt on Android, iOS uses dSYM files to decode crashes.
Generated in: Xcode > Archives > dSYMs.
Needed for crash reporting tools like Firebase Crashlytics, Sentry, Bugsnag, etc.
 */

/** ---------------------------------------------------------------------------------------------------- */

/**
📌 What is why-did-you-render?

A React Dev Tool that logs to the console when a component re-renders unnecessarily.
Useful when optimizing pure functional components, React.memo, useCallback, useMemo, etc.
It works with both ReactJS and React Native.

STEP 1: Install the library
STEP: 2: Create a file wdyr.js in your project root:
STEP 3: Import it at the top of your App.js (only in dev)

Whenever a component re-renders unnecessarily, you’ll see a console log like:
[why-did-you-render] MyComponent re-rendered unnecessarily.
  Reason: props object changes

It will also show what changed, e.g.,
A new function was passed (should’ve used useCallback)
A new object/array was created (should’ve used useMemo or stable references)

📊 When to Use It

While debugging performance issues (slow screens, laggy scrolls).
To verify your memoization hooks (useCallback, useMemo, React.memo) are working.
In large React Native apps with deep component trees.
⚠️ Don’t keep it enabled in production builds — it’s only for dev/debugging.

 */
