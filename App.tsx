import React from 'react';
import {
  LinkingOptions,
  NavigationContainer,
  PathConfigMap,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BASE_URL, Routes} from './src/config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PlaceholderScreen from './src/PlaceholderScreen';
import WebviewScreen from './src/WebviewScreen';
import NumbersScreen from './src/NumbersScreen';
import ErrorScreen from './src/ErrorScreen';

const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.WebviewInitial}>
      <Tab.Screen
        name={Routes.PlaceholderScreen2}
        component={PlaceholderScreen}
        options={{
          title: 'Placeholder Screen 2',
        }}
      />
      <Tab.Screen
        name={Routes.PlaceholderScreen3}
        component={PlaceholderScreen}
        options={{
          title: 'Placeholder Screen 3',
        }}
      />
      <Tab.Screen
        name={Routes.WebviewInitial}
        component={WebviewScreen}
        options={{title: 'Webview Screen'}}
      />
    </Tab.Navigator>
  );
};

interface Props {}
const Stack = createNativeStackNavigator<any>();
const Tab = createBottomTabNavigator<any>();

const webviewScreensConfig: PathConfigMap<any> = {
  [Routes.New]: `${BASE_URL}/new`,
  [Routes.Two]: `${BASE_URL}/two`,
  [Routes.One]: `${BASE_URL}/one`,
  [Routes.Slow]: `${BASE_URL}/slow`,
  [Routes.NumbersScreen]: `${BASE_URL}/numbers`,
  [Routes.LongScreen]: `${BASE_URL}/long`,
  [Routes.NotFound]: {
    path: `${BASE_URL}/*`,
  },
};

const App: React.FC<Props> = () => {
  const linking: LinkingOptions<any> = {
    prefixes: [BASE_URL],
    config: {
      screens: {
        ...webviewScreensConfig,
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: 'Back',
        }}>
        <Stack.Screen
          name={Routes.TabBar}
          component={TabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.One}
          getId={params => {
            console.warn(params);
            return undefined;
          }}
          component={WebviewScreen}
          options={{title: "How'd You Get Here"}}
        />
        <Stack.Screen
          name={Routes.Two}
          component={WebviewScreen}
          options={{title: 'Push or Replace?'}}
        />
        <Stack.Screen
          name={Routes.Slow}
          component={WebviewScreen}
          options={{title: 'Slow-loading Page'}}
        />
        <Stack.Screen
          name={Routes.NumbersScreen}
          component={NumbersScreen}
          options={{title: 'A List of Numbers'}}
        />
        <Stack.Screen
          name={Routes.LongScreen}
          component={WebviewScreen}
          options={{title: 'A Really Long Page'}}
        />
        <Stack.Screen
          name={Routes.New}
          component={WebviewScreen}
          options={{title: 'A Modal Webpage', presentation: 'modal'}}
        />
        <Stack.Screen
          name={Routes.NotFound}
          component={ErrorScreen}
          options={{title: 'Not Found'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
