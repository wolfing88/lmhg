/**
 * Created by Rabbit on 2017/11/3.
 */

import React from 'react';
import { StyleSheet, Text, View, BackHandler, StatusBar, DeviceEventEmitter } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import { Theme } from 'teaset';

import Home from './Pages/Home';
import Fxqg from './Pages/Fxqg'


const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: Theme.backgroundColor,

});

const onBackPress = () => {
  if (Actions.state.index == 0) {
    return false
  }
  Actions.pop()
  return true
}

const router = (...props) => (
  <Router createReducer={reducerCreate}
          getSceneStyle={getSceneStyle}
          backAndroidHandler={onBackPress}
  >
    <Modal
      transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
    >
      <Scene hideNavBar key={'Home'} component={Home} />
      <Scene key={'Fxqg'} component={Fxqg} title={'斐讯抢购'} />
    </Modal>
  </Router>
);

export default router;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
    height:49,
  },
});