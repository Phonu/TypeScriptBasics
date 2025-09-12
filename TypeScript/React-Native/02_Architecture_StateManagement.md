🔹 Architecture & State Management

---

### Q. Compare Redux, Context API, and Recoil – which one do you prefer and why?

👉 “For small to medium apps, I prefer Context API since it’s built-in and simple for things like
authentication or theme management. For large-scale apps where state management gets complex and
debugging is crucial, I use Redux with Redux Toolkit, since it provides middleware, DevTools, and
predictable state updates. Recently, I’ve explored Recoil, which feels more lightweight and closer
to React’s mental model, with fine-grained updates and async support. If the project requires simplicity
and quick setup, I’d go with Context API; if it’s enterprise-scale with complex logic, I’d choose Redux Toolkit.
Recoil is promising and I’d consider it for apps where I want Redux-like power without its verbosity.”

---

### Q. How would you architect a large-scale React Native application?

👉 “I’d organize the app by feature/domain, use TypeScript, Redux Toolkit for global state and React Query for
server state, optimize lists and animations with FlatList and Reanimated (native-driven), enable Hermes,
isolate native modules with TurboModules when necessary, enforce tests (Jest + RNTL + Detox),
and automate CI/CD with GitHub Actions + Fastlane. Observability uses Sentry/Firebase and security
uses Keychain/Keystore + TLS pinning. This balances developer productivity, performance, and maintainability
for a multi-team large-scale app.”

---

### Q. What are some best practices for folder structure and code modularization?

👉

1.  Prefer Feature/Domain-based Structure
    /src
    /features
    /auth
    screens/
    components/
    hooks/
    api.ts
    slice.ts
    types.ts
    /chat
    screens/
    components/
    hooks/
    api.ts
    slice.ts
    types.ts
    /shared
    /ui # shared buttons, modals
    /utils # helpers (date, string, validation)
    /services # storage, analytics, api client
    /theme # colors, spacing, typography
    /i18n # translations

          * Easy for teams to “own” a feature.
          * When app grows, you can extract a feature folder into a separate package or repo.
          * Reduces coupling between unrelated parts of the app.

    ✅ Summary of Best Practices

          * Feature-based structure > technology-based
          * Encapsulate features; only expose minimal API
          * Shared layer for truly common utilities/components
          * Hooks for business logic → clean components
          * Tests colocated with code
          * Config/environment isolation
          * Monorepo modularization if scaling across apps

    “I prefer a feature-first folder structure where each domain owns its UI, state, and logic.
    Shared code lives in a separate layer, and I enforce boundaries using barrel exports.
    This makes the project easier to scale, maintain, and onboard new developers.”

---

### Q. How do you handle feature toggling in your apps?

👉 Feature toggling (or feature flags) is a technique where you wrap features in conditional logic so you can:

    * Gradually roll out new features.
    * Enable/disable features without redeploying.
    * Run A/B tests or experiments.
    * Support multiple app versions in production.
    * Explain how you implement dynamic theming or internationalization.


    📊 Best Practices

    * Centralize Flags → keep them in one place (e.g., /config/featureFlags.ts).
    * Name Clearly → e.g., enableNewCheckout instead of flag1.
    * Kill Switch → every experimental feature should be disable-able.
    * Avoid Flag Debt → remove old flags after rollout.
    * Use Remote Config for Production → so you can toggle features instantly without App Store/Play Store redeploy.

“I usually handle feature toggling in three ways: for simple cases, I use static flags in a config file;
for environment-based differentiation, I rely on env variables; and for production rollouts,
I integrate dynamic remote config (e.g., Firebase Remote Config or LaunchDarkly). I also follow
best practices like centralizing flags, having a kill switch, and cleaning up old flags to avoid tech debt.
This approach ensures safe rollouts, A/B testing, and faster iteration without waiting for app store approvals.”

---

### Q. SOLID PRINCIPLE

👉

S - Single Responsibility Principle
O - Open for extension and Closed for Modification
L - Liskov Substituation Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle

“In React Native, I apply SOLID principles to keep my code modular and scalable. For example, I use SRP by separating UI components from API services, OCP by extending base UI elements instead of modifying them, and LSP by designing interchangeable service classes (AsyncStorage vs Keychain). ISP ensures I split large service interfaces into smaller ones, and DIP allows me to inject API clients instead of tightly coupling my business logic with Axios or Fetch. This makes the app easier to maintain, test, and scale.”

### Q. SOLID PRINCIPLE FOLDER STRUCTURE

react-native-app/
│── src/
│ │── api/ # Dependency Inversion (DIP)
│ │ ├── ApiClient.ts # Abstract API client interface
│ │ ├── AxiosApi.ts # Concrete implementation (axios)
│ │ └── index.ts
│ │
│ │── services/ # Business logic (SRP, ISP)
│ │ ├── AuthService.ts # Handles only authentication
│ │ ├── UserService.ts # Handles only user data
│ │ └── StorageService.ts
│ │
│ │── models/ # Entities / Types (OCP)
│ │ ├── User.ts
│ │ ├── Auth.ts
│ │ └── index.ts
│ │
│ │── components/ # Reusable UI (SRP, OCP)
│ │ ├── common/
│ │ │ ├── Button.tsx
│ │ │ ├── Input.tsx
│ │ │ └── Card.tsx
│ │ ├── user/
│ │ │ ├── UserCard.tsx
│ │ │ └── UserList.tsx
│ │ └── index.ts
│ │
│ │── screens/ # Feature-specific screens
│ │ ├── Auth/
│ │ │ ├── LoginScreen.tsx
│ │ │ └── RegisterScreen.tsx
│ │ ├── User/
│ │ │ ├── ProfileScreen.tsx
│ │ │ └── SettingsScreen.tsx
│ │ └── Home/
│ │ └── HomeScreen.tsx
│ │
│ │── navigation/ # Navigation (Stack, Tabs, Drawer)
│ │ ├── AppNavigator.tsx
│ │ └── AuthNavigator.tsx
│ │
│ │── context/ # Context API (state management)
│ │ ├── AuthContext.tsx
│ │ └── ThemeContext.tsx
│ │
│ │── store/ # Redux/Zustand/MobX if used
│ │ ├── slices/
│ │ │ ├── authSlice.ts
│ │ │ └── userSlice.ts
│ │ └── store.ts
│ │
│ │── hooks/ # Custom hooks (reuse logic)
│ │ ├── useAuth.ts
│ │ └── useNetwork.ts
│ │
│ │── utils/ # Helper functions (pure functions)
│ │ ├── validators.ts
│ │ ├── formatters.ts
│ │ └── constants.ts
│ │
│ │── assets/ # Images, fonts, icons
│ │ ├── images/
│ │ └── fonts/
│ │
│ └── App.tsx # Entry point
│
└── package.json

🎯 How This Enforces SOLID

SRP (Single Responsibility):
Components handle UI only, services handle API/business logic.

OCP (Open/Closed):
BaseButton can be extended (PrimaryButton, SecondaryButton) without modifying it.

LSP (Liskov Substitution):
Any ApiClient implementation (AxiosApi, FetchApi, MockApi) can replace each other.

ISP (Interface Segregation):
Separate AuthService, UserService, StorageService instead of one giant service.

DIP (Dependency Inversion):
Services depend on ApiClient interface, not directly on Axios or Fetch.

### Q. Golden Rules for clean code:

SOC => Sepration of concerns.
DYC => Document your code.
DRY => Don't repeat yourself.
KISS => Keep it Stupid Simple
TDD => Test Driven Development
YAGNI => You arn't gonna need it.
