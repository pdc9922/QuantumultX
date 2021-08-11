/*

QX:

#环评云助手解锁会员by鹏
^https:\/\/www\.eiaclound\.com\/hpy\/f\/usertable\/getUserInfo\/.+ url script-response-body hpyzs.js


[mitm]
hostname = www.eiaclound.com
*/

var obj = JSON.parse($response.body);
obj.data.paymentEndDate = "2099-09-09";
obj.data.gradeld = "11";
obj.data.role = "8"

$done({body: JSON.stringify(obj)});
