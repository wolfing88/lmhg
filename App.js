/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Router from './app/Router';
import LoadingView from './app/Component/LoadingView'

window.ShowLoading = () => {
  if (window.LoadingView)
    return window.LoadingView.show();
};
window.HideLoading = () => {
  if (window.LoadingView)
    return window.LoadingView.hide();
};


export default class App extends Component<{}> {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'transparent'
      }}>
        <Router/>
        <LoadingView ref={(ref) => {
          window.LoadingView = ref;
        }}/>
      </View>
    );
  }
}


