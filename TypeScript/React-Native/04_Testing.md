🔹 Testing & Quality Assurance

---

### Q. What testing strategies do you use (unit, integration, e2e)?

👉

    ✅ 1. Unit Testing

    Purpose: Test small, isolated pieces of logic (functions, hooks, reducers).
    Tools:
    Jest
    * Built-in with React Native, fast for unit tests.
    * React Testing Library (for rendering components in isolation).

    ✅ 2. Integration Testing

    Purpose: Test multiple units working together (e.g., component + Redux store + API mock).
    Tools:
    React Native Testing Library (@testing-library/react-native)
    MSW (Mock Service Worker) for API mocking.

    ✅ 3. End-to-End (E2E) Testing

    Purpose: Test the whole app flow as a user would (UI, navigation, API calls).
    Tools:
    Detox (most common for React Native, simulates user actions).
    Appium (cross-platform mobile testing).

    Strategy in Real Projects
    * Unit tests → Cover 70–80% of business logic and critical utilities.
    * Integration tests → Focus on screens with complex UI or data flows.
    * E2E tests → Small number of critical user journeys (login, checkout, payments).

---

### Q. What libraries do you use for testing React Native components?

👉 Typically use a combination of libraries depending on the level of testing:
Unit & Snapshot Testing
Comes pre-configured with React Native.
Fast test runner.
Supports snapshot testing for UI validation

    Component & Integration Testing
        Encourages testing user behavior, not implementation details.
        Provides utilities like getByText, fireEvent, etc.

    End-to-End (E2E) Testing
        Automates user flows (login, navigation, checkout).
        Runs on real/simulated devices.

    Jest → For unit + snapshot tests.
    React Native Testing Library → For integration + component behavior tests.
    Detox → For critical E2E user flows.

---

### Q. How do you mock native modules in Jest?

👉 In Jest, since tests run in a Node.js environment (not a device), you need to mock native modules
to avoid runtime errors and simulate expected behavior.

    ✅ 1. Using jest.mock() for Simple Mocks
    For basic modules like @react-native-async-storage/async-storage:

    // __mocks__/@react-native-async-storage/async-storage.js
    export default {
    setItem: jest.fn(() => Promise.resolve(null)),
    getItem: jest.fn(() => Promise.resolve(null)),
    removeItem: jest.fn(() => Promise.resolve(null)),
    };

    ✅ 2. Mocking React Native’s Built-in Modules
    Sometimes you need to mock modules like react-native-reanimated or react-native/Libraries/Animated.

    Example for react-native-reanimated:

    jest.mock("react-native-reanimated", () =>
    require("react-native-reanimated/mock")
    );

    ✅ 3. Mocking Device APIs (like react-native-device-info)

    For libraries that expose functions:

    jest.mock("react-native-device-info", () => ({
    getUniqueId: jest.fn(() => "mocked-device-id"),
    getSystemName: jest.fn(() => "iOS"),
    }));

    ✅ 4. Using jest.requireActual (Partial Mocking)

    If you only want to override certain functions but keep others:

    jest.mock("@react-native-community/netinfo", () => {
    const actualNetInfo = jest.requireActual("@react-native-community/netinfo");
    return {
        ...actualNetInfo,
        fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
    };
    });

🎯 Interview-Ready Strategy

    Step 1: Check if the library provides an official Jest mock (e.g., @react-native-async-storage/async-storage/jest/async-storage-mock).
    Step 2: If not, create a manual mock under __mocks__/.
    Step 3: Use jest.mock() and jest.requireActual() when partial mocking is needed.

---
