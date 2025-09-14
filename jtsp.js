/*
 *  名称：加藤视频
 *  功能：去广告解锁会员
 *  时间: 2025-09-14
 *  作者：鹏客软件
 *  官网：peck.cool
 */

let body = JSON.parse($response.body);

if (body.data) {
  body.data.isVip = true;
  body.data.vipExpire = "2099-12-12";
  body.data.hasAd = false;
  body.data.watchLimit = false;
  body.data.nickname = "VIP用户";
}

$done({ body: JSON.stringify(body) });