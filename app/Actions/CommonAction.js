import {
  getProductList,
} from '../Common/ApiUrl';


//获取商品列表
export function getProductListAction(param,callback) {

  RTRequest.fetch()

  ShowLoading();

  fetch(getProductList(param))
    .then(response => response.json())
    .then(responseJson => {
      HideLoading();
      if (responseJson.result == 10000) {
        callback(responseJson);
      } else {

      }
    }).catch(error => {
    HideLoading();

  }).done();
}