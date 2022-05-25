import React from 'react';
import Route from './src/routes/routes';
import { Platform } from 'react-native'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { LogBox } from "react-native";
import { UserProvider } from './src/dates/datehook/usersContext'
import { StatusBar } from 'react-native';


LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])
LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
])
const App = () => {
  return (
    <>
      <UserProvider>
        <StatusBar backgroundColor="transparent" translucent={true}  barStyle="dark-content" />
        <Route></Route>
      </UserProvider>
    </>
  );
};



export default App;
