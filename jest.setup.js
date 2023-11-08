import 'whatwg-fetch';
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-reanimated', () =>
    require('react-native-reanimated/mock'),
);

jest.mock('redux-persist', () => {
    const real = jest.requireActual('redux-persist');
    return {
        ...real,
        persistReducer: jest
            .fn()
            .mockImplementation((config, reducers) => reducers),
    };
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translation hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: str => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
    initReactI18next: {
        type: '3rdParty',
        init: jest.fn(),
    },
}));

const mockedFirebaseCrashlyticsLog = jest.fn();
const mockedFirebaseCrashlyticsRecordError = jest.fn();
jest.mock('@react-native-firebase/crashlytics', () => {
    return () => ({
        log: mockedFirebaseCrashlyticsLog,
        recordError: mockedFirebaseCrashlyticsRecordError,
    });
});

const mockedFirebaseAnalyticsLogEvent = jest.fn();
const mockedFirebaseAnalyticsLogLogin = jest.fn();
const mockedFirebaseAnalyticsSetUserId = jest.fn();
jest.mock('@react-native-firebase/analytics', () => () => {
    return {
        logEvent: mockedFirebaseAnalyticsLogEvent,
        logLogin: mockedFirebaseAnalyticsLogLogin,
        setUserId: mockedFirebaseAnalyticsSetUserId,
    };
});
