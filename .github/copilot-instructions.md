This repository is an Expo-managed React Native app. The guidance below helps an AI coding agent become productive quickly and avoid disruptive changes.

- Repository type: Expo managed workflow (see `package.json` dependencies: `expo` and `react-native`).
- Entry points: `index.js` (calls `registerRootComponent`) and `App.js` (main app component). Edit `App.js` to change the initial UI.
- App configuration: `app.json` contains app metadata and asset paths (icons, splash). If you need to change icons or splash images, update the corresponding paths under `expo` in `app.json` and the files in `./assets`.

Quick commands (observable in `package.json` scripts):
- Start Metro/Expo: `npm run start` (runs `expo start`).
- Open on Android: `npm run android` (runs `expo start --android`).
- Open on iOS: `npm run ios` (runs `expo start --ios`).
- Web: `npm run web` (runs `expo start --web`).

Important project conventions and constraints:
- This is a managed Expo project. There are no `ios/` or `android/` folders checked in (these paths are gitignored). Avoid adding native code or changing native build files unless the repo is intentionally ejected. Any native dependencies require ejecting and are out of scope unless the maintainer requests it.
- `app.json` sets `newArchEnabled: true` — this indicates new architecture flags are configured in the project metadata; be conservative when changing low-level config.
- Asset usage: icons and splash images are referenced by relative paths in `app.json` (e.g. `./assets/icon.png`). Ensure new assets are placed under `assets/` and paths updated in `app.json`.

Patterns and examples found in this codebase:
- App entry: `index.js` does `registerRootComponent(App)` (Expo pattern). When adding global providers (Redux, Context, Navigation), wrap `App` in `index.js` or modify `App.js` at the top-level.
- Styling: `App.js` uses `StyleSheet.create` and inline JSX. Follow the same minimal component style and place new components alongside `App.js` in a `components/` folder (create it) when needed.

Developer workflows an AI should follow before editing:
1. Read and preserve `app.json` asset paths — do not break icon/splash references.
2. Use `npm run start` to verify UI changes locally (Expo Go or emulator). The project uses Expo CLI commands defined in `package.json`.
3. Do not introduce or rely on native modules (those require ejecting). If a native module is truly needed, raise a PR note and check with the repo owner.

When changing code, include small, focused tests or a manual verification note in your PR describing how to run `npm run start` and confirm the change in Expo Go or a simulator.

Files to inspect when you need context:
- `App.js` — primary app UI and styles.
- `index.js` — app bootstrap and registration.
- `app.json` — Expo config, icons, splash, platform flags.
- `package.json` — scripts and core dependency versions (Expo ~54, React 19.1.0, React Native 0.81.5).

If anything in this file is unclear or you want the instructions to be stricter (commits, branch rules, testing conventions), tell me which areas to expand and I will update this guidance.
