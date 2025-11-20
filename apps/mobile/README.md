# UnifAI Mall - Mobile App

React Native mobile application for iOS and Android.

## Setup

```bash
# Install dependencies
npm install

# iOS (Mac only)
cd ios && pod install && cd ..
npm run ios

# Android
npm run android
```

## Structure

```
src/
├── screens/       # Screen components (migrated from original)
├── components/    # Mobile-specific components
├── navigation/    # React Navigation setup
├── hooks/         # Custom hooks
└── App.tsx        # Entry point
```

## Notes

- Existing android/ and ios/ folders from the original project can be moved here
- Screens will be adapted from src/components/screens/
- Uses shared packages for business logic and Supabase client

