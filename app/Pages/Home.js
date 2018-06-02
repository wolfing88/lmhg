
import {
  View,
  Text,
  Image,
} from 'react-native'

import React, {Component} from 'react';
import Carousel from 'react-native-looped-carousel';

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel
        delay={2000}   //自动切换的延迟 （毫秒）
        style={{width: global.SCREEN_WIDTH, height: 200}}  //轮播组件的样式
        autoplay    //自动轮播
        pageInfo={false}    //在底部显示当前页面下标 / 页面个数
        swiper      //允许手势滑动

        bullets={true}  //显示小圆点
        bulletStyle={{backgroundColor: '#fff', width: 5, height: 5}} //未选中时小圆点的样式
        chosenBulletStyle={{backgroundColor: 'red', width: 5, height: 5}}//选中时小圆点的样式
      >
        {React.Children.map(['aa', 'bb', 'cc', 'bb', 'cc', 'bb', 'cc'], (child, index) => {
          return (
              <Image  style={{width: global.SCREEN_WIDTH, height: 200}}  source={{uri:'https://p.ssl.qhimg.com/dmsmfl/120_75_/t015fce4f5eb4863867.webp?size=200x200&phash=-836279116438999444'}}/>
          )
        })}
      </Carousel>
    );
  }
}

