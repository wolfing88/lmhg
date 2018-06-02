
import {
  View,
  Text,
  Image,
} from 'react-native'

import React, {Component} from 'react';
import CarouselView from '../Component/CarouselView';
import MarqueeLabel from 'react-native-lahk-marquee-label';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      imageList:["http://img.zcool.cn/community/01481559841b3da801215603a36220.jpg@2o.jpg"],
    }
  }

  componentDidMount () {
    this.setState({
      imageList:[
        "http://img.zcool.cn/community/01481559841b3da801215603a36220.jpg@2o.jpg","http://img.zcool.cn/community/01881a5652c7516ac7251c94522683.jpg","http://img.zcool.cn/community/019a0558be22d6a801219c77d0578a.jpg@2o.jpg"
      ]
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <CarouselView imageList={this.state.imageList} />
        <MarqueeLabel
          duration={8000}
          text={'This is a Marquee Label.'}
          textStyle={{ fontSize: 13, color: '#e5e' }}
        />
      </View>
    );
  }
}

