import React, { Component,PureComponent } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native'
import ShowView from '../../Component/ShowView';
import ImageView from '../../Component/ImageView';
import {getProductListAction} from  '../../Actions/CommonAction'

export default class FxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList:[],
      addressList:[],
      couponsList:[],
      selectList:{
        product:'请选择商品',
        address:undefined,
        coupons:undefined,
      }


    };
  }

  componentDidMount () {
    // getProductListAction({mallType:'FX'},(data)=>{
    //   console.log(data)
    // })
    console.log(RC4decrypt("78363cdfa98c0d5fe2a005856f9eb90302359300a6b8de30492b4a20ac6e50127b113a9c7b5b56ab8943f7e8d1b4715c497bffab098df339b3daadc8df43c16e158d653d32d58470f494428009d93e74e8e45eed184775ae594d89b58afc74916c5a7ef79ae43b7a40d27927a77e2de582ea64e583c57010f8c7c869a643e9b9626f4f12b61277d8c4ff553d25dd807e5f21b4af6488d125da15c003d7e55fe457e9e2c17c9b03a61f2547cf739e8fc51bc31f4eb67a64bfc0375f62f881260a085f2899a9d7e1d694ea4ae2098b8d650fc56db38d75932754740fcd6489998169d14d8293f895130049c031a2d72482e17241f0cf9625cf6086c9b23dc5d1a3ead1622231aafdc792728aee36ddc2482201a41004e6a9ed22a09e9e0675a860faf0a50c04fa5219242742b1b7a5dfa0aa73257ec726c89ce142de59e9625567f02eda87eb1a76ac1d3b1d6ba234aa85da80dcb15578a3fce7122f48c206206c1bb88b1e117982e22d1aa08c913e3266982595ee5d1c8d4fef7aa0b4bf959f9dc0866eedb20bc158cca33ce8dab0119f2b2916465e0b9a58c709a82c589bbeecfff12da1461acd01bfafe9cc6b8bb884c2db773b704096400f7ca9c3346e50bcd54bcdadaa5b8314a8a1eee86faceee53866c15d3a655ec9e557cc4c9500aa4702c09d7cea2c47dc87f9894ca4a07a4380f902ba13f3d7cbb5df6c5894457ea128389f7200e0945edb05db950a25dffabab4fee072fb2e47b5f9809ded76596494c07e14248de72bac5badff43b9fd820f6ad45c05382e96f58406a73c94544458204302491c46c21c42c0a106f4aa2f3e273099c484b7d0a29362d0f4b2371236dfa7f93295d3da3f8922d1f2e8b18a10accbe06061ba8562c8b884abbc94fb7b5c4457f2b8922c340b4efe9dde35341937881f5b087677c1356b77b6c1ee6b2ab8ff963483e7b7e3e886adb7071b3718c6dfcc0ebd024e0796402e93b635edd8b0c3960e77e910db9a3d20e0297a3be80f5b4d515017161bf0229a85ee277108f88845e9e77d67a0266e045606ced3b89561128f641f4376ea78c2a934792fe1eeaad185e39ec5dc5f6e7122fe89d0e76d825965824f40d17d1d3d8b55fba8dd1290ac799481c04de2435d205602ea2200d1edf8ba0da001c27da0352456fe6aa9c800d81a669d1faa0d82d52025fc56480b3fbccb3b281129d0897c2aaba145db1fd7656f45dfe0a6b6ab0dbb5e1a1c2a6eac24b5fb0afd1fc9199883baccaf96872ad0fe3bf5f44326b9e7b1f2aa2e34c57d466f0b051f38a6e2dd2904f0e621e255f01ed469547239d010c0ae68b9d9ed9756ead12841bdd2850ad7abea8b15e0c5c0cdf36e838e54c2d265a8074266f02c7e4830746e36b9a329585ae3817ee154e45510fbebd3ab865293ed54ff54aa479dd2930281d1afa5ac32b6079cf849c52b1b49881331738ec5da7b7f3380c3beb6fa1e784224d1f7b75757e1d05d0d75c4901ebb3f85563240f6a01b7df629387ef49d67c4006304eeabb956f854ba5e4f91eac606205106b74c4a97698b90f3db966ac1bdeff8b66c91de76a150db531e3ef8e025be845618410e28badef557e46d2536d015275ed0a98bcbe12ef50119f539b2c6e8c24bb25ac0da12d4c7bccd7d20337b5216806f26e3c37b692668248d59b574bf0c0ba59525ebe668d1eefba482a65bfec8405737d78ef95a82fa601b27e72ae2721804509fdbebd7e18a37d45f87aa02e6a1a029134d85ff429544abf11a02e83df9bfc78083518584b2ce63df88f8ffaae60da5814ba9ff29d3384f6f653d4bfa833d9046898d32131dcc72a01b4757cbf2a9cab9903bef6b8625897855e150d8d433c521d8a2a3b9e3f5f8cd02d69670f135e9d761e4698f21f362b321e37703f39da2507e4bd4bcf3684c0592ae1e289e0bdd777f52af29f57bcdc59e7e067222f5d0b69a92da828fc0d57551b137abec26d9ad13db9a07a93ee3075a762044f07f14abedb6022794261dd8b0eb3480cc9d86e91168544a497529984a08e820d0e70c0f015efdff9b7d6ee3f18444b9e65f7c41ba0f8652530063c53d890914843d9e82bd2154a18f2c41504a43f012661657ea775b0f9fcee1cdae766d4867a28f1748eccb057e96ee4e99d94e85a0bab8651cd7c0fbe0d32b9f47dde67b02cc0aec9cd902039ef0ffcc2277f41222798bd7b12a96b43c0bfe61fd3e4720e3b3de3717676726c085132a06030e53f76db1f7261b9438966434cd819dc44def11a9ad37a5de6f0fc8a34cc6382bcd078a659412f5ed6d9b22f5fe053037485488379fbf5587be575bf6551d792977dd69e3ec7794910834cf18cd8a8fca3f9fd6a9772a6c857c2831a21989ca5dfacd719009a5133aefb87525760a26b2c7867b2798bca7b2ef88f93803fe74497ad20ef6184511dcf10b467b176d198c998bc5f672fb7a95b2d476d52b7609fa3cb50d12d2dfb77ff92741a991cd8d5cd0604a8a9059d6b6799a6e8fe065fcfae4e2c8aa557007500e7f9c4a05853c11bb3026047d360715a4472829542b0d137c3f96771b59da2f0ae6563ee47f18b2113fecf53d096fd3b19aef0e93bd5698c0b411737d7ab821ab535e35d066f6b5b4518028a2c2eda32f8657e6ae6dcf1467efc62bd70d78b2dddb6cf9a6879b053fac2c418735892470466cdf33129267f740835e66ad2c5d790682bb9d8bda7ad1b11253a2c412f3f615770240848e294d4c7d5cb19b53867317838fbbadad78d2c5d55640770d4f9694dec5bab455fcffa5df5bcc1f1c85a43e71bfd93a09afa4dc11f2fc40744d35e129bc0e715f1a12b9abefc5104822bf27993fff9b4dc00c80204d6fdcdb22c3c58242656b2de09658120e7a81255da03c7f5fe8568302f7c2f67782db11dd8aa1f42d72438af1e0c963b596a3cb3b448bc02a634635d2dffa962aa7496547c539fd2d881526e171d8ecff12d061edd4b34b6d844d40b31c37360d71ac9210c19499ef2eaec8c01324c5ef9042ea5767fc5e89fdf340ed693bd3ad0819658dfefce83198e7346b037b3be637a27262fa2b02520fa34a91a4b69a94e7ef1f7343c7403834932f38fee4526644ddac5534171578d67621eabe8e4781e2482ab8cc8509af3ef1e0741afbca27fbe509b2447ad3045dc28b23975fb91e34d8e4504269f9450fbdf6dcbacebce4f1b4b033c122a891e2e7afebd665db1c7b0993f9b7168fc6ed37b147b8f2d55693192f2c655ec6237f6a90e79e68cef335a30fbf54e7e0853e5ceffcb397e413788bfa422ee8542e7aed245c39b4508906a922e0deea65d1fafd4277950454e0dcef5a1cb63636cc1e8277c564f96f8a68dffcb5214dd86dd6dafc42610b2577d010076f6c0db759a3291858ce3c0eb8aa9d0619d169147364e2279f1cb94ef4e19c148fdb98ae4b21c4da445eb4161eb100ceff764895b72d8f818d1405bcfad2f26d21e390dfae965ff4af093f428f9067b29993815cb36ca373c355cd5d2977bb52074994cd6e3f9da119d9b1a0280af0ce3412aa9bedf64fb6e7dfb502637b0091af1c91c7cdb591771b6f6f242378e3de7764afec8ed43ee6e2230fa229d9ae8ee8a7c2d64d457decd321a5b8bbb83c3f4ae3139559bef6d535ea55a1e341ca2b066b245b1899c7a8f1bf7e69fe3aa94760823c498e9ed29690f06c1fcf117efe18b99612b15a0ffd34e66db46463260a65695363b818605490d78690cdfd03d66812fe6159b61cab9efe5cfcf7d5b23bd25c621f870548d3ed8f43862f7d1f6aef16aa6f585db8138f2eea9806c7ed44b011cc831018de174ca2704e3fcd8130c8a4f736493481331b9cc599e4f4052ee4469dc10b144a267e9ffcdd1c8aeef817049b6081deb8981945278d89cc2457a53ec00d01ef02d81316858d3c34afda74ebe5aec33b66dd2a7d5568110d034d20831c7a1eede75fb637cb751395843eb7f06952cc5a98cad1691fc01d832592e886cd4608516b7cb32fbc3ef42ea764729bca6cd779abe1af5512c1f412fdb44661883a409743088e230de8d73f1fc2877c71950f1e5be7dac5d012fe17684a957b5d6026c41876b51a77def902f7cf591fccb6ea33d38ec6b4cacf9a203768d3e6e577d9e123d9190e5833d090f723444ca95e85d3cbb0a059310339ba0d4bc98ade9c6e0cdb1be2e609844008720759b826d6419baa0051afff61055c59d88476f57b4fe3056fb23f222f997df92e2316a637a12d55a864ec9793797a6174f0529de39f6a13a188a98e0f3bce3995bd34831078e9cae79a57fa2dc4aef573657fd0f9d798750aaaafc84c938f677a0f65f2622b0e92368e7b2f05f0ef1e3e15dc84e9091787685f775e97bc46db8f0faf67f1b0ef56cbd437217440718495991c3be7f0c571d4f4bda5699bfff75db3dcee7ba3a7316f167ecb838a8eaab75360830eb1b020a729278597af0c1d9b741f8c1ea4ff01b40b5b7bd09c03ed5d76ec723b06449cdf87b2bcb0ea96b7c0c6bab1a17a1540e206fcbe2c11205459716bbc5547c8a2138a471c460b4a7e992beb0f5ac5021b8a5f8d91d37296e13fe36ab441096ff8d398ff8040d503744f84f4e3f7c1d6049580be7e98f0918fade5a7023ec085fcb4bf4478261b54f669371464da288e1277a21ffa44ac8224916d15efcd8f31509915bccff54744a7ec9fe843f3b2dc396507088b34fd3cf78e2ef3d62ec28c0ea7cb1da8b2aefc43aba43e722fc33fb967c892313396e768fa5dd6e5eef6a28147e77f1f28aaad26f4b86a6896760e4b5760e2ae18cb65292c2d72c5b591a13315ec9c9f186c5f7f82eb630aa87c97448be7e1f9b3afbf1c61796f8e20c4004ec7c81650f5cb89bd607013d01c6d584773603860193625b491b33a7ed6a658af22239486961bbbfc6d94a3e36eb7a956e70833b9f1a222575572856201d86a8885263eb6c2d060c7278642b17ecbbc548bac8a79813d170be6dd7afbbcee73746cc2349f3053188c27aaf6d27eee07c78ed8228d6ab089256318a20728656a200c58aded689a372c33649826f886a762bb86463878b73a610271735df8a0e6108266bdcea18daae8d97ded783bf44245902bc4057bfb0c9a649782100d20614e008fb12df01f2f2191df9d91e8997be805fed312da0062732ae309dc87745870389fc22718b35d6028530d2e4f73add36c4c9ed7cf73f5d573311eddcfdf6be428ba84bfa62739ff89c0b906e4dba928a0b9b2fc2291e952a9a540e89ee616d00fbca7e3beca90759838653b80d2d5fd6f076328665f48be6e66d19674cbc11e8f68e453d36759c53c7177c940d7fc4f7c1b9e701f95d701164f684322d1ad077ed955a3b8ebc5872560a84adcf7e80fbf6bd89ffdbc60b49833cb88489d5943827a1d38eab05e68a4ea8b6e50d0d96728d69a5eb2d69d02cac036fff4e644d45e1caac7d09faedd9840bf91a0c08c908b351b946f72e7ba0fe05fc801801e0f86235821ecf96eb4800ac3149fa90bceba7ad41cf56484340b19d48e7a7ee8e83402c9af17cd46b1aebb9101f68fc06caefff14ea9fe6a15547460f6e70278a4072823f096af877f251986c69884dbf74ef9680c0521356744ae5f7bbab2ab7b319f1ade326f50d42ccfea08b763cc670a87"))

  }

  openWin=(openType)=>{
    switch (openType){
      case 'productList':
        this.refs.productList.show();
        break;
      case 'address':
        this.refs.address.show();
        break;
      case 'couponsList':
        this.refs.couponsList.show();
        break;
    }
  }

  selectData=(data,openType)=>{
    switch (openType){
      case 'productList':
        this.state.selectList.product = data.productName
        this.refs.productList.hide();
        break;
      case 'couponsList':
        alert(JSON.stringify(data))
        this.state.selectList.coupons = data.couponName
        this.refs.couponsList.hide();
        break;
    }
    this.setState({});
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Header/>
        <SelectView
          selectList={this.state.selectList}
          openWin={(openType)=>this.openWin(openType)}
        />
        <ConsoleView/>
        <ShowView ref = 'productList'>
          <ProductList productList={this.state.productList}
                       selectData={this.selectData}
          />
        </ShowView>
        <ShowView ref = 'couponsList'>
          <CouponsList couponsList={this.state.couponsList}
                       selectData={this.selectData}
          />
        </ShowView>
      </View>
    )
  }
}


class Header extends  PureComponent{
  render(){
    return(
      <View style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT * 0.08,backgroundColor:'#ff0',justifyContent:'center',alignItems:'center'}}>
        <Text>{'欢迎您：'}</Text>
      </View>
    )
  }
}

class SelectView extends  PureComponent{
  constructor(props){
    super(props);

  }

  render(){
    this.array = [
      {title:'商品：',text: this.props.selectList.product,openType:'productList'},
      {title:'收货地址：',text: this.props.selectList.address,openType:'addressList'},
      {title:'优惠券：',text: this.props.selectList.coupons,openType:'couponsList'},
      {title:'支付方式：',text: this.props.selectList.coupons,openType:'couponsList'},
    ]
    let textList = this.array.map((data,index)=>{
      return(
        index != 3 ? (
          <TextView key = {index}
                    openWin={(openType)=>this.props.openWin(openType)}
                    openType = {data.openType}
                    title = {data.title}
                    text = {data.text}/>
        ) : (
          <PayTypeView key = {index} />
        )

      )
    });
    return(
      <View style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT * 0.45,alignItems:'center'}}>
        {textList}
      </View>
    )
  }
}

class ConsoleView extends  PureComponent{
  render(){
    return(
      <View style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT * 0.08,backgroundColor:'#ff0',justifyContent:'center',alignItems:'center'}}>
        <Text>{'欢迎您：'}</Text>
      </View>
    )
  }
}


class TextView extends PureComponent {
  render(){
    return(
      <TouchableOpacity style={styles.WriteInli} onPress = {()=>this.props.openWin(this.props.openType,'open')} >
        <View style={styles.WriteInliTit}><Text style={styles.WriteInliTitstyle}>{this.props.title}</Text></View>
        <View style={styles.WriteInliText}>
          <Text style={styles.WriteInliTextstyle}>{this.props.text}</Text>
        </View>
        <Image source={Images.Right} />
      </TouchableOpacity>
    )
  }
}



class ProductList extends PureComponent {
  constructor (props){
    super(props);
    this.state={
      array:[
        {productId:'35',productName:'R1(黑)AI音箱',productImg:'https://imgmall.phicomm.com/cb/8f/8db97506ad2c.jpg!xs?23021_OW750_OH750',commission:'35'},
        {productId:'35',productName:'R1(黑)AI音箱',productImg:'https://imgmall.phicomm.com/cb/8f/8db97506ad2c.jpg!xs?23021_OW750_OH750',commission:'35'},
        {productId:'35',productName:'R1(黑)AI音箱',productImg:'https://imgmall.phicomm.com/cb/8f/8db97506ad2c.jpg!xs?23021_OW750_OH750',commission:'35'},
        {productId:'35',productName:'R1(黑)AI音箱',productImg:'https://imgmall.phicomm.com/cb/8f/8db97506ad2c.jpg!xs?23021_OW750_OH750',commission:'35'},
        {productId:'35',productName:'R1(黑)AI音箱',productImg:'https://imgmall.phicomm.com/cb/8f/8db97506ad2c.jpg!xs?23021_OW750_OH750',commission:'35'},
        {productId:'35',productName:'R1(黑)AI音箱',productImg:'https://imgmall.phicomm.com/cb/8f/8db97506ad2c.jpg!xs?23021_OW750_OH750',commission:'35'},
        {productId:'35',productName:'R1(黑)AI音箱',productImg:'https://imgmall.phicomm.com/cb/8f/8db97506ad2c.jpg!xs?23021_OW750_OH750',commission:'35'},
      ]
    }
  }

  render(){
    let content = this.state.array.map((data,index)=>{
      return(
        <View key = {index}>
          <TouchableOpacity style={{height:SCREEN_HEIGHT * 0.15,borderTopWidth: 1, borderColor: '#e5e5e5',justifyContent:'center'}}
                            onPress={()=>this.props.selectData(data,'productList')}
          >
            <View style={{height:SCREEN_HEIGHT * 0.145,alignItems:'center',flexDirection:'row'}}>
              <ImageView style={{height:SCREEN_HEIGHT * 0.14,width:SCREEN_HEIGHT * 0.14,borderRadius:8}}
                         imgUrl = {data.productImg}/>
              <View style={{paddingLeft:px2dp(35),flexDirection:'column',}}>
                <Text style={[styles.ProductListText,{color:'#252525'}]}>{data.productName}</Text>
                <Text style={[styles.ProductListText,{color:'#E5472C'}]}>{'返红包：' + data.commission + "元"}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    })

    return(
      <View style={styles.ListViewBox}>
        <View style={styles.ListTitel}>
          <Text style={styles.ListTitleText}>{'请选择商品'}</Text>
        </View>
        <ScrollView style={{borderRadius:8}}>
          {content}
        </ScrollView>
      </View>
    )
  }
}

class CouponsList extends PureComponent {
  constructor (props){
    super(props);
    this.state={
      array:[
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
        {coupon:'35',couponName:'满399-50元',rules:'六月新品除外',validity:'2018-06-01 -- 2018-06-30'},
      ]
    }
  }

  render(){
    let content = this.state.array.map((data,index)=>{
      return(
        <View key = {index}>
          <TouchableOpacity style={{height:SCREEN_HEIGHT * 0.15,borderTopWidth: 1, borderColor: '#e5e5e5',justifyContent:'center'}}
                            onPress={()=>this.props.selectData(data,'couponsList')}
          >
            <View style={{paddingLeft:px2dp(35),flexDirection:'column',}}>
              <Text style={[styles.ProductListText,{color:'#E5472C',fontSize:px2dp(40)}]}>{data.couponName}</Text>
              <Text style={[styles.ProductListText,{color:'#252525'}]}>{data.rules}</Text>
              <Text style={[styles.ProductListText,{color:'#252525'}]}>{data.validity}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    })

    return(
      <View style={styles.ListViewBox}>
        <View style={styles.ListTitel}>
          <Text style={styles.ListTitleText}>{'请选择优惠券'}</Text>
        </View>
        <ScrollView style={{borderRadius:8}}>
          {content}
        </ScrollView>
      </View>
    )
  }
}

class PayTypeView extends PureComponent{

  constructor (props){
    super(props);
    this.state= {
      payList : [
        {payId:1,payName:'京东支付'},
        {payId:2,payName:'微信支付'},
        {payId:3,payName:'支付宝支付'},
        {payId:4,payName:'银联支付'}
      ],
      payId:1,
    }
  }

  selectPay=(data)=>{
    this.setState({
      payId :data.payId
    })
  }


  render(){
    let content = this.state.payList.map((data,index)=>{
      return(
        <View key={index} style={{width:(SCREEN_WIDTH-px2dp(200)) / 2,padding:px2dp(15)}}>
          <TouchableOpacity style={this.state.payId == data.payId ? styles.WriteInliTouchSelect : styles.WriteInliTouch} onPress={()=>this.selectPay(data)}>
            <Text style={this.state.payId == data.payId ? styles.WriteInliTextstyleSelect : styles.WriteInliTextstyle2 }>{data.payName}</Text>
          </TouchableOpacity>
        </View>
      )
    })

    return(
      <View style={[styles.WriteInli2]}>
        <View style={styles.WriteInliTit}><Text style={styles.WriteInliTitstyle}>{'支付方式：'}</Text></View>
        <View style={[styles.WriteInliText,{flexDirection:'row',flexWrap:'wrap'}]}>
          {content}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  WriteInli: {
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height :px2dp(80),
    width:SCREEN_WIDTH,
  },
  WriteInli2: {
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height :px2dp(160),
    width:SCREEN_WIDTH,
  },
  WriteInlinfo: { borderBottomWidth: 1, borderColor: '#e5e5e5', paddingBottom: 10, },
  WriteInliTit: { height: px2dp(80), justifyContent: 'flex-end', alignItems: 'center', width: px2dp(160), flexDirection: 'row', },
  WriteInliTitstyle: { fontSize: px2dp(30), color: '#333', },
  WriteInliText: { flex: 3, },
  WriteInliTextstyle: { fontSize: px2dp(30), color: '#666', paddingRight: 5, },
  WriteInliTextstyle2: { fontSize: px2dp(25), color: '#666', padding: px2dp(10), },
  WriteInliTextstyleSelect: { fontSize: px2dp(33), color: '#666', padding: px2dp(10), },
  WriteInliTouch: { alignItems:'center',justifyContent:'center' },
  WriteInliTouchSelect: { borderWidth:1,borderColor:'#000',borderRadius:px2dp(20),alignItems:'center',justifyContent:'center' },
  ListViewBox:{
    width:SCREEN_WIDTH * 0.75,maxHeight:SCREEN_HEIGHT * 0.9, backgroundColor:'#fff',borderRadius:8
  },
  ProductListText:{
    padding:px2dp(10)
  },
  ListTitel:{
    height:SCREEN_HEIGHT * 0.06,backgroundColor:'#333',alignItems:'center',justifyContent:'center', borderTopLeftRadius: 8, borderTopRightRadius: 8,
  },
  ListTitleText:{
    color:'#FFF'
  },
})