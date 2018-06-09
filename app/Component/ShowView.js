import React, { PureComponent, PropTypes } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import ModalBox from 'react-native-modalbox'


//弹窗
export default class ShowView extends PureComponent {
    show() {
        this.refs.ShowView.open();
    }
    hide() {
        this.refs.ShowView.close();
    }
    render(){
        return(
            <ModalBox
                swipeToClose = {false}
                style={styles.modal}
                ref='ShowView'
                backButtonClose={true}>
                {this.props.children}
            </ModalBox>
        )
    }
}
const styles=StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'transparent',
    },
});