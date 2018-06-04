/**
 * Created by sorchan on 2017/4/24.
 */
import React, { PureComponent, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

//弹窗
export default class LoadingView extends PureComponent {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      showView: false,
      tips : '加载中 ...'
    };
  }
  //显示
  show = ()=> {
    this.setState({showView: true})
  };
  //隐藏
  hide = ()=> {
    this.setState({showView: false})
  };

  render(){
    let content = this.state.showView?(
      <TouchableOpacity style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT,justifyContent: 'center',alignItems: 'center',position:'absolute',top:0,backgroundColor: 'rgba(0, 0, 0, 0.3)'}} disabled = {true}>
          <View style={{width:px2dp(200),height:px2dp(200),justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.8)',borderRadius:px2dp(20)}}>
              <Image style={{width:px2dp(100),height:px2dp(100)}} source={Images.Loading}/>
              <Text style={{marginTop:px2dp(20),color:'#ececec'}}>{this.state.tips}</Text>
          </View>
      </TouchableOpacity>):null;
    return content
  }
}

