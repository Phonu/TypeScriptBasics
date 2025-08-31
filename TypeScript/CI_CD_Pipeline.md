You can use GitHub Actions to automate builds, tests, and deployments for React Native apps.

🔹 1. Create Workflow File

Inside your React Native repo, create:

.github/workflows/ci.yml

🔹 2. Example CI/CD Workflow

Here’s a sample workflow that runs on push & pull requests:

name: React Native CI/CD

on:
push:
branches: [ main ]
pull_request:
branches: [ main ]

jobs:
build:
runs-on: macos-latest # required for iOS builds
strategy:
matrix:
platform: [ios, android]

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install Dependencies
        run: yarn install --frozen-lockfile

      - name: Cache Gradle (Android only)
        if: matrix.platform == 'android'
        uses: actions/cache@v3
        with:
          path: |
            ~/.gradle/caches
            ~/.gradle/wrapper
          key: gradle-${{ runner.os }}-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
          restore-keys: gradle-${{ runner.os }}-

      - name: Build Android
        if: matrix.platform == 'android'
        run: |
          cd android
          ./gradlew assembleDebug

      - name: Build iOS
        if: matrix.platform == 'ios'
        run: |
          cd ios
          pod install --repo-update
          xcodebuild -workspace MyApp.xcworkspace \
                     -scheme MyApp \
                     -sdk iphonesimulator \
                     -configuration Debug \
                     build

      - name: Run Tests
        run: yarn test

🔹 3. Key Steps Explained

Checkout Code → Pulls repo.

Setup Node → Ensures correct Node version.

Install Dependencies → Installs JS deps via yarn or npm.

Cache Gradle → Speeds up Android builds.

Build Android → Uses Gradle.

Build iOS → Uses Xcode + CocoaPods.

Run Tests → Runs Jest tests.

🔹 4. Adding CD (Deployment)

Android → Generate .aab (release) and upload to Play Store with Fastlane
.

iOS → Archive with Xcode and deploy to TestFlight via Fastlane.

Example Android release step:

- name: Build Android Release
  run: |
  cd android
  ./gradlew bundleRelease

- name: Upload to Play Store
  uses: r0adkll/upload-google-play@v1
  with:
  serviceAccountJson: ${{ secrets.GOOGLE_PLAY_SERVICE_ACCOUNT }}
  packageName: com.myapp
  releaseFile: android/app/build/outputs/bundle/release/app-release.aab

🔹 5. Secrets Needed

Add these in GitHub → Settings → Secrets & variables → Actions:

GOOGLE_PLAY_SERVICE_ACCOUNT → JSON key for Play Store upload.

APPLE_DEVELOPER_KEY → For TestFlight deploys.

Signing keys (keystore for Android, certificates for iOS).

✅ Now you have:

CI → Run tests & build on every PR/commit.

CD → Auto-deploy to TestFlight / Play Store.
