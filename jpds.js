/*************************************

APP名称：解剖大师
下载地址：https://apps.apple.com/cn/app/id1510070525
QQ群：798678782
TG群：https://t.me/peckios
脚本作者：鹏
使用声明：脚本仅供参考，请勿转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api.vesal.cn\/vesal-jiepao-prod\/ultimate\/app\/personalCenter\/getActiveComboList url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/jpds.js

[mitm]
hostname = api.vesal.cn

*************************************/

var objc = JSON.parse($response.body);

   objc =
{
  "msg": "success",
  "BuySvip": true,
  "code": 0,
  "list": [{
    "totalDuration": 999881,
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
$done({body : JSON.stringify(objc)});
