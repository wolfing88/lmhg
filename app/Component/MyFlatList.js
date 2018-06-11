/**
 * 公共列表
 */
import React, {Component} from "react";
import {FlatList, Text, View,Image,StyleSheet} from "react-native";
import immutable from "immutable";


export default class MyFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,//是否正在加载
            hasPrev : true ,//是否第一页
            hasNext : true,//是否有下一页
            isLoaded : false,//是否加载完毕
            dataSource: [],
        }
    }

    shouldComponentUpdate(np) {
        if (np.list && !immutable.is(this.props.list, np.list) || np.refresh == true) {
            this.initData(np);
            return true
        }
        return false
    }

    initData(p){
        this.state.isLoading = true;
        this.state.hasNext = true;
        this.state.hasPrev =  p.page == 1 ? true : false;
        this.state.isLoaded = false;
        this.state.dataSource = p.list && p.list;
        if(p.list.length == 0 || p.list.length % p.pageSize > 0){
            this.state.hasNext = false;
        }
    }

    componentWillUpdate(){
        this.state.hasPrev = false;
        this.state.isLoaded = true;
    }

    componentDidUpdate() {
        this.state.isLoading = false;
    }

    runToTop = () => {
        this.listView.scrollToIndex({animated: false, index: 0, viewPosition: Number(0)})
    };

    render() {
        let isRefreshing = (this.state.isLoading && this.state.hasPrev) || false;
        return (
            <FlatList
                style={this.props.style}
                ref={ref => this.listView = ref}
                initialNumToRender={10}
                onEndReachedThreshold={0.3}
                onEndReached={() => {
                    if (!this.state.isLoading && this.state.hasNext) {
                        this.state.isLoading = true;
                        this.props.onLoadMore && this.props.onLoadMore();
                    }
                }
                }
                ListHeaderComponent={this.props.renderHeader}
                enableEmptySections={true}
                data={this.state.dataSource}
                renderItem={(rowData) => this.props.renderRow(rowData.item, rowData.index)}
                ListFooterComponent={this.renderPaginateView}
                onRefresh={this.props.onRefresh}
                refreshing={isRefreshing}
                keyExtractor={(item, index) => index}
                extraData={this.props.extraData}
            />
        )
    }

    renderPaginateView = () => {
        let title = '加载中...';
        let {list} = this.props;
        if (this.state.isLoaded && !this.state.hasNext) {
            title = '没有更多';
        }
        if (this.state.isLoaded && list.length <= 0) {
            if(this.props.NoData) {
                return (this.props.NoData)
            }
            return (
                <View style={{justifyContent: 'center', alignItems: 'center', height: 300,}}>
                    <NoData title={this.props.displayText}/>
                </View>
            )
        }
        return (
            <View style={{padding: 3, height: 50, backgroundColor: 'transparent', alignItems: 'center',}}>
                <Text style={{textAlign: 'center', fontSize: 13, color: '#bbb',}}>{title}</Text>
            </View>
        )
    };
}


class NoData extends Component{
  render(){
    let title = this.props.title?this.props.title:'暂无数据';
    return(
      <View style={[styles.NoDataBox, {marginTop: this.props.marginTop || 0}]}>
        <Image style={styles.NoDataImg} source={Images.NoData} />
        <Text style={styles.NoText}>{title}</Text>
      </View>
    )
  }
}


const styles=StyleSheet.create({
  NoDataBox:{zIndex:50,justifyContent:'center',alignItems:'center',flex:1,},
  NoDataImg:{width:100,height:79,},
  NoData:{flex:2,justifyContent:'center',alignItems:'center',},
  NoText:{fontSize:15,color:'#bcbcbc',paddingTop:15,}
})


