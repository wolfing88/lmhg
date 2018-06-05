//服务器域名
const SERVICE_BASE_URL = `http://cs001web.free.wtbidccn2.cn/`;

//获取商品列表
export const getProductList = args => SERVICE_BASE_URL + '/lmFx/service/getProduct.php?a=1'  + JsonToString(args);







