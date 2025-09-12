# 🔹 DevOps & Deployment

### Q.How do you set up CI/CD for a React Native app?

🔹 1. Continuous Integration (CI)

Goals:

- Ensure code quality
- Run unit/integration/E2E tests
- Build APK/IPA to catch errors early

Steps:

- Pick a CI service
- GitHub Actions (most popular, free for small projects)
- CircleCI / Bitrise (mobile-specific)
- GitLab CI, Jenkins, Azure DevOps
- Set up workflows (example: GitHub Actions .github/workflows/ci.yml)

```
name: CI

on:
  pull_request:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: yarn install
      - run: yarn test
      - run: cd android && ./gradlew assembleDebug
      - run: cd ios && xcodebuild -scheme MyApp -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 14'

```

🔹 2. Continuous Deployment (CD)

Goals:

- Automate distribution to TestFlight, App Store, and Play Store
- No manual Xcode/Android Studio builds

Tools:

- Fastlane (most popular, integrates with App Store & Play Store)
- EAS (Expo Application Services) if using Expo
- AppCenter (Microsoft)
- Example Fastlane setup:
- iOS (fastlane/Fastfile)
- default_platform(:ios)

```
platform :ios do
desc "Build and upload to TestFlight"
lane :beta do
build_app(
scheme: "MyApp",
export_method: "app-store"
)
upload_to_testflight
end
end


Android (fastlane/Fastfile)

platform :android do
desc "Build and upload to Play Store"
lane :beta do
gradle(task: "assembleRelease")
upload_to_play_store(track: "internal")
end
end
```

🔹 3. Secure Secrets (API keys, signing configs)

- Use GitHub Secrets (or CI provider secrets store) for:
- ANDROID_KEYSTORE_BASE64
- PLAY_STORE_JSON_KEY (for Google Play API)
- APP_STORE_CONNECT_KEY (for TestFlight)

🔹 4. Typical Workflow

- Developer pushes to main branch
- CI runs tests + builds (Android & iOS)

If successful → CD deploys to:

TestFlight (iOS)

Internal testing track (Android)

✅ Interview Answer Summary

“For CI/CD in React Native, I usually use GitHub Actions (or Bitrise for mobile-specific optimizations). CI ensures code quality by running tests and building both iOS and Android apps. For CD, I integrate Fastlane to automate distribution — upload_to_testflight for iOS and upload_to_play_store for Android. All sensitive keys are stored in encrypted GitHub Secrets. This way, every commit to main can automatically trigger a release pipeline.”

### Q. What tools do you use for automated testing and release management?

🔹 Automated Testing

- Unit Testing → Jest

  - For testing functions, reducers, hooks, and components.
  - Example: @testing-library/react-native for rendering and asserting UI.
  - Integration Testing → React Native Testing Library
  - Simulates user interactions like button clicks, text input.

- End-to-End (E2E) Testing →
  - Detox (most common in React Native) – automates real device/simulator flows.
  - Appium – cross-platform mobile automation.

🔹 Release Management

- Fastlane 🚀

  - Automates signing, building, and uploading to TestFlight (iOS) and Play Store (Android).
  - Example: fastlane beta to push builds for internal testers.

- CodePush (Microsoft App Center)

  - For OTA (Over The Air) updates without going through app store approval.

- CI/CD Orchestration Tools

  - GitHub Actions – widely used, integrates well with Fastlane.
    -Bitrise / CircleCI – mobile-first CI/CD platforms.

- EAS (Expo Application Services) – if the project uses Expo.

✅ Sample Interview Answer:
"For testing, I primarily use Jest for unit tests, React Native Testing Library for integration tests, and Detox for end-to-end testing. For release management, I rely on Fastlane to automate builds and distribution to TestFlight and Play Store. I usually integrate this with GitHub Actions for a full CI/CD pipeline, and in some cases, I also use CodePush for OTA updates."

### Q. How do you handle code signing and provisioning in iOS?

# 🔑 Handling Code Signing & Provisioning in iOS (React Native)

## 📌 What is Code Signing & Provisioning?

- **Code Signing** → Ensures that the app comes from a trusted developer (Apple Developer Account).
- **Provisioning Profile** → Binds your app’s **App ID**, signing certificate, and device list (for dev/test).

⚠️ Without correct signing & provisioning, your app won’t install on devices or be submitted to the App Store.

---

## 🔹 Steps to Handle Code Signing in iOS

### 1. Apple Developer Account Setup

- Enroll in **Apple Developer Program**.
- Create **App ID** in the Apple Developer Console.

### 2. Certificates

- Create & download a **Development Certificate** (for dev/test).
- Create & download a **Distribution Certificate** (for App Store/TestFlight).

### 3. Provisioning Profiles

- **Development Profile** → maps to dev devices.
- **Distribution Profile** → for App Store/TestFlight release.
- Generated in **Apple Developer Portal** and downloaded via **Xcode**.

### 4. Xcode Configuration

- Open `ios/<AppName>.xcodeproj` in Xcode.
- Go to **Signing & Capabilities** tab.
- Select your **Team** → Xcode auto-manages provisioning (or set manual profiles).

### 5. Automating with Fastlane

- Use **`match`** (preferred) → centralizes certificates/profiles in a private Git repo.

```ruby
lane :beta do
  match(type: "appstore")   # Fetch signing certs & profiles
  build_ios_app(scheme: "MyApp")
  upload_to_testflight
end

```

🔹 In CI/CD (GitHub Actions, Bitrise, CircleCI, etc.)

- Store Apple credentials securely in secrets.
- Use Fastlane match to fetch provisioning automatically.

```
- name: Setup Fastlane
  run: bundle install

- name: Build iOS
  run: bundle exec fastlane beta
  env:
  MATCH_PASSWORD: ${{ secrets.MATCH_PASSWORD }}
  APP_STORE_CONNECT_API_KEY: ${{ secrets.APP_STORE_CONNECT_API_KEY }}
```

✅ Sample Interview Answer

"For iOS, I handle code signing and provisioning using the Apple Developer portal and Xcode’s Signing & Capabilities. For automation, I use Fastlane’s match to manage certificates and provisioning profiles in a secure Git repo. This ensures consistent signing across all machines and CI/CD pipelines, and allows smooth distribution via TestFlight and App Store."
