
/******************************

脚本功能：AI陪练
应用版本：1.0.0
应用下载：https://apps.apple.com/cn/app/id1580896775
脚本作者：鹏客软件
更新时间：2023-12-21
鹏客网盘：https://peck.cool
使用声明：脚本仅供学习交流, 禁转卖与商业用途！

*******************************
[rewrite_local]

^https:\/\/partner-ai-api\.quthing\.com\/(ai\/vip\/state|student\/info\/h5) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Laiyin.js

[mitm]
hostname = partner-ai-api.quthing.com
*******************************/
var body = $response.body;
var url = $request.url;

if (url.indexOf('vip/state') != -1) {
    var obj = JSON.parse(body);
    obj.data.seniorVip = true;
    obj.data.showText = "2099.09.09到期";
    obj.data.validVip = true;
    obj.data.expireTime = 4092595200000;
    obj.data.vipCount = 205889;
    obj.data.lastBuySkuName = "partnertrainingai_yaer_vip";
    body = JSON.stringify(obj);
} else if (url.indexOf('student/info/h5') != -1) {
    var obj = JSON.parse(body);
    obj.data.vipInfo.seniorVip = true;
    obj.data.vipInfo.showText = "2099.09.09到期";
    obj.data.vipInfo.validVip = true;
    obj.data.vipInfo.expireTime = 4092595200000;
    obj.data.vipInfo.vipCount = 205889;
    obj.data.vipInfo.lastBuySkuName = "partnertrainingai_yaer_vip";
    body = JSON.stringify(obj);

}
$done({ body });