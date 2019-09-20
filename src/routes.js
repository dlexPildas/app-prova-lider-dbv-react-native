import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/Main/index';

import AsksAbout7DayAdvBelieve from './pages/AsksAbout7DayAdvBelieve/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      AsksAbout7DayAdvBelieve,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#aaa',
          fontWeight: 'bold',
          fontSize: 16,
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
