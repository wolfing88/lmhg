import {
  AsyncStorage,
  Platform
} from 'react-native';

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

//拼接网页参数
exports.JsonToString = function  JsonToString(args){
  if(args == undefined ||args.length == 0||args.size == 0){
    return '';
  }
  var keys = Object.keys(args);
  // keys = keys.sort()
  var newArgs = {};
  keys.forEach(function (key) {
    newArgs[key] = args[key];
  });

  var string = '';
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k];
  }
  string = string.substr(1);
  return string;
};
