/*************************************

APP名称：解剖大师
下载地址：https://apps.apple.com/cn/app/id1510070525
鹏客官网：https://peck.cool/
TG交流群：https://t.me/peckios
脚本作者：鹏
使用声明：脚本仅供参考，请勿转载与售卖！

**************************************/

[rewrite_local]
^https?:\/\/api\.vesal\.cn\/ $ url script-response-body jpds.js

**************************************

[mitm]
hostname = api.vesal.cn

*************************************


var body = $response.body
    .replace(/\"isCharge\":\"\w+\"/g, "\"isCharge\":\"N"")
    .replace(/\"ischarge\":\"\w+\"/g, "\"ischarge\":\"n\"");
$done({
    body
});