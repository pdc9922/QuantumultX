/*************************************

APP名称：解剖大师
下载地址：https://apps.apple.com/cn/app/id1510070525
QQ群：798678782
TG群：https://t.me/peckios
脚本作者：鹏
使用声明：脚本仅供参考，请勿转载与售卖！

**************************************

[rewrite_local]
# 解剖大师_解锁限制
^https://api.vesal.cn/ url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/jpds.js

[mitm]
hostname = api.vesal.cn

*************************************/

let body = $response.body;

body = body.replace(/"is_charge":"\w"/g, '"is_charge":"n"');
body = body.replace(/"isCharge":"\w"/g, '"isCharge":"N"');

$done({ body });
