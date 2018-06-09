import React, { PureComponent } from 'react';
import {
    View,
    Image,
} from 'react-native'


export default class ImageView extends PureComponent {
    render() {
        return (
            <View>
                <Image
                    style = {[this.props.style,{backgroundColor: 'rgba(0, 0, 0, 0)'}]}
                    resizeMode = {this.props.resizeMode ? this.props.resizeMode : 'contain'}
                    source = {this.props.defaultImg?this.props.defaultImg:Images.Main}/>

                <ImgView {...this.props}/>
            </View>

        )
    }
}

class ImgView extends PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            backgroundColor: 'white'
        };
        this.success = false;
    }
    onLoadEnd = ()=> {
        if(!this.success) {
            this.setState({backgroundColor: 'transparent'})
        }
    };
    onLoad = ()=> {
        this.success = true;
    };
    render() {
        return(
            <Image
                style = {[this.props.style,{position: 'absolute', top: 0,backgroundColor: 'rgba(0, 0, 0, 0)'}]}
                resizeMode = {this.props.resizeMode ? this.props.resizeMode : 'contain'}
                source = {{uri: this.props.imgUrl}}
                onLoad = {this.onLoad}
                onLoadEnd = {this.onLoadEnd}/>
        )
    }
}
