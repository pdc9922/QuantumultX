/******************************

脚本名称：宝塔助手hook test
脚本功能：本脚本仅供内部测试
脚本作者：by鹏
更新时间：2025-03-01

*******************************
[rewrite_local]
^https?:\/\/zsbt\.apisrv\.cn url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/refs/heads/main/btzs.js

[mitm]
hostname = zsbt.apisrv.cn
*******************************/


$notify("鹏哥提醒您脚本已注入成功!");
var body = $response.body
    .replace(/false/g, "true");
$done({
    body
});
