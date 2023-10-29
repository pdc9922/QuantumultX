/*************************************

APP名称：解剖大师
下载地址：https://apps.apple.com/cn/app/id1510070525
QQ群：798678782
TG群：https://t.me/peckios
脚本作者：鹏
使用声明：脚本仅供参考，请勿转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.vesal\.cn $ url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/jpds.js

**************************************

[mitm]
hostname = api.vesal.cn

*************************************/

var body = $response.body;
var objc = JSON.parse(body);

objc.data = {
    "isCharge":"N",
    "ischarge":"n"
};

body = JSON.stringify(objc);
$done({ body });
