/******************
色迷聚合

[rewrite_local]
http:\/\/api\.sgapi004\.xyz\/api\/applogin url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/semi.js

[mitm] 
hostname = api.sgapi004.xyz
********************/

let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

if ($request.url === "https://api.sgapi004.xyz/api/applogin") {
    obj.data.deleted_at = "2999-12-12 21:27:01";//
    obj.data.vip = 1;// 
    obj.data.status = 1//
} 

$done({ body: JSON.stringify(obj), status: 200 });
