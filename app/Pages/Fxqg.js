/**
 * Created by Rabbit on 2017/11/2.
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,

  TouchableOpacity,
} from 'react-native';

import { SegmentedView, Button, NavigationBar, Overlay, Input , } from 'teaset';


export default class Fxqg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.imageUrl);
    return (
      <View style={styles.container}>
        <SegmentedView style={{height:SCREEN_HEIGHT - 64 ,marginTop:64, backgroundColor:'#F9F9F9'}}
                       type='carousel'
                       indicatorLineColor={'#ff7000'}
        >
          <SegmentedView.Sheet title='登录'
                               titleStyle={{color:'#333'}}
                               activeTitleStyle={{color:'#000'}}
          >
            <LoginView isPass={true}
                       onPress={()=>this.onLoginPress(2)}
                       onChangeTopText={(text)=>{
                       }}
                       onChangeBottomText={(text)=>{
                       }}
            />

          </SegmentedView.Sheet>
        </SegmentedView>
      </View>
    );
  }
}


const LoginView = (props) => {
  return(
    <View style={styles.loginViewStyle}>
      <LoginInput placeholder='请输入手机号'
                  onChangeText={props.onChangeTopText}
      />
      <View>
        <LoginInput placeholder='请输入密码'
                    onChangeText={props.onChangeBottomText}
        />
        <View style={{
          backgroundColor:Theme.transparentColor,
          justifyContent:'flex-end',
          alignItems:'flex-end',

        }}>
        </View>
      </View>
      <Button title={'登录'}
              style={styles.loginButtonStyle}
              titleStyle={{fontSize:FONT_SIZE(14), color:'#fff'}}
              onPress={props.onPress}
      />
    </View>
  )
}


const LoginInput = (props) => {
  return(
    <View style={styles.inputViewStyle}>
      <Input placeholder={props.placeholder}
             style={styles.inputStyle}
             secureTextEntry={false}
             onChangeText={props.onChangeText}
             onFocus={props.onFocus}
             onBlur={props.onBlur}
             maxLength={props.maxLength}
             autoCapitalize='none'
             clearButtonMode={'always'}
      />
      {
        props.isVerify ?
          <TouchableOpacity onPress={props.styles}>
            <Text style={styles.inputTitleStyle}>获取验证码</Text>
          </TouchableOpacity>
          :null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F9F9'
  },
  loginViewStyle:{
    // backgroundColor:'red',
    marginTop:px2dp(80)
  },
  loginButtonStyle:{
    marginLeft:px2dp(108),
    marginRight:px2dp(108),
    height:px2dp(80),
    marginTop:px2dp(142),
    backgroundColor:'#ff7000',
    borderColor:Theme.transparentColor,
    borderRadius:20

  },
  createAccountStyle:{
    color:'#ff7000',
    fontSize:FONT_SIZE(13),

  },
  forgetPassStyle:{
    marginTop:px2dp(28),
    height:px2dp(32),
    marginRight:px2dp(108),
    color:'#ff7000',
    fontSize:FONT_SIZE(12),
  },
  inputViewStyle:{
    height:px2dp(88),
    marginTop:px2dp(20),
    // alignItems:'center',
    marginLeft:px2dp(108),
    marginRight:px2dp(108),
    borderBottomColor:'#d1d1d1',
    borderBottomWidth:px2dp(1),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  inputStyle:{
    borderColor:'transparent',
    borderRadius:0,
    height:px2dp(86),
    flex:1,
    backgroundColor:'transparent',
  },
  inputTitleStyle:{
    fontSize:FONT_SIZE(12),
    color:'#333'
  }
});