/******************************

脚本名称：宝塔助手正式版
脚本功能：解锁正式版，本脚本仅供内部测试！
脚本作者：by鹏
更新时间：2025-03-01
商店地址：https://apps.apple.com/cn/app/id6471957393

*******************************
[rewrite_local]
^https?:\/\/zsbt\.apisrv\.cn url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/refs/heads/main/btzs.js

[mitm]
hostname = zsbt.apisrv.cn
*******************************/

var body = $response.body
    .replace(/false/g, "true");
$done({
    body
});
