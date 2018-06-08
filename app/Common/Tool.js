import {
  AsyncStorage,
  Platform
} from 'react-native';

let  CryptoJS = require("crypto-js");

export default {
  async isLogin(){
    let data = await AsyncStorage.getItem('TOKEN');
    // console.log(data);
    if (data === null){
      console.log('false');
      global.TOKEN = false;
      return false;
    }else {
      console.log('true');
      global.TOKEN = true;
      return true;
    }
  }
}

// 设计图上的比例，宽度
let basePx = Platform.OS === 'ios' ? 750 : 720;

exports.px2dp = function px2dp(px: number): number {
  return px / basePx * SCREEN_WIDTH;
};

exports.isNotEmpty = function isNotEmpty(obj){
  if(undefined!=obj && ""!=obj && null != obj){
    return true;
  }
  return false;
};

// 转为unicode 编码
exports.encodeUnicode = function encodeUnicode(str) {
  var res = [];
  for ( var i=0; i<str.length; i++ ) {
    res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
  }
  return "\\u" + res.join("\\u");
}

// Unicode解码
exports.decodeUnicodes = function decodeUnicode(str) {
  str = str.replace(/\\/g, "%");
  return unescape(str);
}

// RC4加密
exports.RC4encrypt =  function RC4encrypt(str) {
  let key = CryptoJS.enc.Utf8.parse(RC4Key);
  let srcs = CryptoJS.enc.Utf8.parse(str);
  return  CryptoJS.RC4.encrypt(srcs, key).toString(CryptoJS.format.Hex);
}

// RC4解密
exports.RC4decrypt = function RC4decrypt(str) {
  let key = CryptoJS.enc.Utf8.parse(RC4Key);
  let srcs = CryptoJS.enc.Hex.parse(str);
  let decryptdata = CryptoJS.RC4.decrypt(CryptoJS.lib.CipherParams.create({ ciphertext:srcs}),key);
  return decryptdata.toString(CryptoJS.enc.Utf8);
}

