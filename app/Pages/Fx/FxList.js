
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {getProductListAction} from  '../../Actions/CommonAction'

export default class FxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
       productList:[],
    };
  }

  componentDidMount () {
    getProductListAction({mallType:'FX'},(data)=>{
      console.log(data)
    })
  }

render(){
    return(
      <View><Text>6666</Text></View>
    )
}



}

