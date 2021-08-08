import React from 'react';
import {AppRegistry} from 'react-native';
import ReactNativeWeb from './App';

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', {
  rootTag: document.getElementById('react-native-app'),
});
