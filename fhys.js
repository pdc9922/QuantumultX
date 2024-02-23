/*
/******************************************
APP名称：凤凰易学
鹏客官网：https://peck.cool/
脚本作者：鹏客软件
免费QQ群：798678782
使用声明：解锁会员及全课程,脚本仅供参考,请勿转载与售卖！
******************************************

[rewrite_local]
https:\/\/app\.fhestudy\.com\/(collection\/getCatalogAndResource\.do|collection\/getVideoResource\.do|collection\/getTeachingOrCourseDetail\.do|system\/getCheckOutInfo\.do|textbooks\/getTextBookInCourse\.do|user\/getUserInfo\.do|home\/getHomeData\.do) url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/fhys.js
[mitm] 
hostname = app.fhestudy.com
*******************************************/

let body = $response.body;
let obj = JSON.parse(body);
let url = $request.url;

if (/https:\/\/app\.fhestudy\.com\/home\/getHomeData\.do/.test(url)) {
    // 首页图片
    if (obj.data.topBannerList && obj.data.topBannerList.length > 0) {
        obj.data.topBannerList[0].jumpUrl = "https://peck.cool";
        obj.data.topBannerList[0].bannerName = "鹏客软件出品";
        obj.data.topBannerList[0].pictureUrl = "https://s11.ax1x.com/2024/01/05/pixuBb6.png";
        body = JSON.stringify(obj);
    }
} else if (url === "https://app.fhestudy.com/user/getUserInfo.do") {
    // 会员
    obj.data.name = "peck";
    obj.data.rightsType = 1;
    obj.data.rightsStartTime = "2024-09-29";
    obj.data.schoolName = "鹏客大学";
    obj.data.rightsEndTime = "2099-09-09";
    body = JSON.stringify(obj); 
} else if (/https:\/\/app\.fhestudy\.com\/(collection\/getCatalogAndResource\.do|collection\/getVideoResource\.do|collection\/getTeachingOrCourseDetail\.do|system\/getCheckOutInfo\.do|textbooks\/getTextBookInCourse\.do)/.test(url)) {
    // 课程及资源
    body = body.replace(/"lastStudyFlag":\s*false/g, '"lastStudyFlag": true')
               .replace(/"resourceFreeType":\s*2/g, '"resourceFreeType": 1')
               .replace(/"freeType":\s*4/g, '"freeType": 1')
               .replace(/"price":\s*"\d+"/g, '"price": "0"')
               .replace(/"priceRMB":\s*"\d+"/g, '"priceRMB": "0"')
               .replace(/"balance":\s*"0"/g, '"balance": "9999"')
               .replace(/"isFree":\s*\d+/g, '"isFree": 0')
               .replace(/"hasRight":\s*false/g, '"hasRight": true');
}

$done({ body });
