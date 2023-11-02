/*************************************

APP名称：解剖大师_超级会员全解锁
下载地址：https://apps.apple.com/cn/app/id1510070525
QQ群：798678782
TG群：https://t.me/peckios
脚本作者：鹏
使用声明：脚本仅供参考，请勿转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.vesal\.cn\/(personalCenter\/getActiveComboList)$ url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/jpds.js

[mitm]
hostname = api.vesal.cn

*************************************/

var body = $response.body;
var peck = $request.url;
var objc = JSON.parse(body);

const user = '/ultimate/app/personalCenter/getActiveComboList';

if (peck.indexOf(user) != -1) {
  objc.data[0] = {
  "msg": "success",
  "BuySvip": true,
  "code": 0,
  "list": [{

"totalDuration": 881,

"mbId": 1846319,

"addTime": "2023-11-01",

"comboName": "解剖大师超级会员",

"id": 265394,

"endTime": "2999-12-12",

"comboCode": "ULTIMATE_ANATOMY_SVIP",

"cardNo": "61698850086965"
  }, {

"mbId": 1846319,

"addTime": "2023-11-01 22:48:07",

"endTime": "2999-12-12",

"comboCode": "ULTIMATE_ANATOMY_VIP_PC"
  }, {

"mbId": 1846319,

"addTime": "2023-11-01 22:48:07",

"endTime": "2999-12-12",

"comboCode": "ULTIMATE_ANATOMY_SVIP"
  }]
};
  body = JSON.stringify(objc);
}
$done({ body });
