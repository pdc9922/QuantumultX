
/******************************

名称：潮汐（冥想 白噪音）
版本：4.4.15
下载：https://apps.apple.com/cn/app/id1077776989
作者：鹏客软件
时间：2025-08-31
网盘：https://www.peck.cool
声明：脚本仅供学习交流, 禁转卖与商业用途！

*******************************
[rewrite_local]

^https:\/\/tide-api\.moreless\.io\/v1\/users\/self url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/chaoxi.js

[mitm]
hostname = tide-api.moreless.io
*******************************/

var body = $response.body;
var url = $request.url;

if (url.indexOf('users/self') != -1) {
        var obj = JSON.parse(body);
        if (obj && obj.data) {
            obj.data.is_valid = true;
            obj.data.active_sub = true;
            obj.data.sub_cancel_at = 1;
            obj.data.is_lifetime_member = true;
            obj.data.created_at = 0;
            obj.data.expired_day_at = 0;
            obj.data.subscription_type = 1;
            obj.data.premium_type = 2;
            obj.data.updated_at = 0;
            obj.data.expired_at = 3900000000;
            obj.data.sub_expired_at = 0;
            obj.data.sub_info = null;
            obj.data.sub_expired_day_at = 0;
            
            body = JSON.stringify(obj);
        }
   
}
$notify("鹏客软件提醒您脚本已注入成功，严禁转载支持原创!");
$done({ body });
