import {
  getProductList,
} from '../Common/ApiUrl';


//获取商品列表
export function getProductListAction(param,callback) {
  let params = {
    mallType:'FX'
  }
  RTRequest.get(getProductList, true ,params, (data)=>{
    console.log(data)
  })

}
