import { buildWebScreen, WebScreenRuleConfig } from 'react-native-web-screen';

export enum Routes {
  BottomTabs = 'BottomTabs',
  NotFound = 'NotFound',
  NumbersScreen = 'NumbersScreen',
  WebviewInitial = 'WebviewInitial',
  New = 'New',
  SuccessScreen = 'SuccessScreen',
  NonExistentScreen = 'NonExistentScreen',
  SignIn = 'SignIn',
  Fallback = 'Fallback',
  NestedTabNative = 'NestedTabNative',
  NestedTabWeb = 'NestedTabWeb',
  NestedTab = 'NestedTab',
  One = 'One',
  Library = 'Library',
}

const webScreenConfig: WebScreenRuleConfig = {
  baseURL: 'http://192.168.2.7:45678/',
  routes: {
    [Routes.BottomTabs]: {
      routes: {
        [Routes.WebviewInitial]: {
          urlPattern: 'library/collections',
          title: 'Página Principal',
        },
        [Routes.Library]: {
          urlPattern: 'library/collections1',
          title: 'Biblioteca',
        },
      },
    },
    [Routes.Library]: {
      urlPattern: 'library/collections2',
      title: 'Biblioteca',
    },
    [Routes.New]: {
      urlPattern: 'new',
      title: 'A Modal Webpage',
      presentation: 'modal',
    },
    [Routes.SuccessScreen]: {
      urlPattern: 'success',
      title: 'It Worked!',
      presentation: 'modal',
    },
    [Routes.One]: {
      urlPattern: 'one',
      title: "How'd You Get Here?",
    },
    [Routes.NumbersScreen]: {
      urlPattern: 'numbers',
    },
    [Routes.SignIn]: {
      urlPattern: 'signin',
      presentation: 'modal',
    },
    [Routes.NestedTab]: {
      routes: {
        [Routes.NestedTabWeb]: {
          urlPattern: 'nested',
          title: 'Nested Web',
        },
      },
    },
    [Routes.Fallback]: { urlPattern: '*', title: '' },
  },
};

export const webScreens = buildWebScreen(webScreenConfig);
