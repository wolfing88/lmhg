
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FX} from '../../NativeModules/index';

import { SegmentedView, Button, NavigationBar, Overlay, Input , } from 'teaset';


export default class Fxqg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : undefined,
      password : undefined,
    };
    this.getUserInfo();
  }

  componentDidMount() {
    // InteractionManager.runAfterInteractions(() => {
    //   this.loginFinishsubScription = DeviceEventEmitter.addListener("loginFinish", this.loginFinish.bind(this));
    // });
  }


  async getUserInfo(){
    let userName = await AsyncStorage.getItem('FX_USER_NAME');
    let password = await AsyncStorage.getItem('FX_USER_PASSWORD');
    if(isNotEmpty(userName)&& isNotEmpty(password)){
      this.setState({
        userName : userName,
        password:password
      })
    }
    // await AsyncStorage.setItem("FX_USER_NAME","test");
    // await AsyncStorage.setItem("FX_USER_PASSWORD","test123");
  }

   login=()=>{
    isLockBack=true;
    ShowLoading();
    let userName = this.state.userName;
    let password = this.state.password;
    FX.login(userName, password).then((map)=> {
        HideLoading();
        isLockBack=false;
        if(map['code'] == 'success'){
          Toast.success("登陆成功！")
          AsyncStorage.setItem("FX_USER_NAME",userName);
          AsyncStorage.setItem("FX_USER_PASSWORD",password);
          fxCookies = map['result'];
          Actions.FxList();
        }else{
          Toast.fail(JSON.parse(map['result']).error);
        }
      }
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <LoginView isPass={true}
                   userName={this.state.userName}
                   password={this.state.password}
                   onPress={()=>this.login()}
                   onChangeUserNameText={(text)=>{
                     this.state.userName=text;
                   }}
                   onChangePassWordText={(text)=>{
                     this.state.password=text;
                   }}
        />
      </View>
    );
  }
}



const LoginView = (props) => {
  return(
    <View style={styles.loginViewStyle}>
      <LoginInput placeholder='请输入账号'
                  defaultValue={props.userName}
                  secureTextEntry={false}
                  onChangeText={props.onChangeUserNameText}
      />
      <LoginInput placeholder='请输入密码'
                  defaultValue={props.password}
                  secureTextEntry={true}
                  onChangeText={props.onChangePassWordText}
      />
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
             defaultValue={props.defaultValue}
             style={styles.inputStyle}
             secureTextEntry={props.secureTextEntry}
             onChangeText={props.onChangeText}
             onFocus={props.onFocus}
             onBlur={props.onBlur}
             maxLength={props.maxLength}
             autoCapitalize='none'
             clearButtonMode={'always'}
      />
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
    marginTop:px2dp(220)
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