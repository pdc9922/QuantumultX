/*************************************

APP名称：light (自制壁纸)
下载地址：https://apps.apple.com/cn/app/id1564770460
作者：鹏
QQ群：798678782 
使用声明：脚本仅供参考，请勿转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1$ url script-response-body https://raw.githubusercontent.com/pdc9922/QuantumultX/main/light.js

[mitm]
hostname = api.revenuecat.com

*************************************/


var peck = JSON.parse($response.body);

peck = {
  "status" : 0,
  "receipt" : {
    "receipt_type" : "com.miiiao.iwallpaper.lifetime",
    "app_item_id" : 1387167765,  
    "receipt_creation_date" : "2023-06-06 16:06:26 Etc/GMT",
    "bundle_id" : "com.miiiao.iwallpaper.lifetime",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1686065612000",
        "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
        "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "490001314520000",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001314520000",
        "purchase_date" : "2023-06-06 16:06:06 Etc/GMT",
        "product_id" : "com.miiiao.iwallpaper.lifetime",
        "original_purchase_date_pst" : "2023-06-06 06:06:07 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1686065613000",
        "web_order_line_item_id" : "490000123456789",
        "expires_date_ms" : "4092599349000",
        "purchase_date_pst" : "2023-06-06 06:06:06 America/Los_Angeles",
        "original_purchase_date" : "2023-06-06 16:06:07 Etc/GMT"
      }
    ],
    "original_purchase_date" : "2023-06-06 16:00:00 Etc/GMT",
    "adam_id" : 1387167765,
    "receipt_creation_date_pst" : "2023-06-06 06:06:26 America/Los_Angeles",
    "request_date" : "2023-06-06 16:06:27 Etc/GMT",
    "request_date_pst" : "2023-06-06 06:06:27 America/Los_Angeles",
    "version_external_identifier" : 888888888,
    "request_date_ms" : "1686065635000",
    "original_purchase_date_pst" : "2023-06-06 06:00:00 America/Los_Angeles",
    "application_version" : "1473",
    "original_purchase_date_ms" : "1686065430000",
    "receipt_creation_date_ms" : "1686065634000",
    "original_application_version" : "1473",
    "download_id" : 666666666666666600
  },
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1686065612000",
      "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
      "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "490001314520000",
      "is_trial_period" : "false",
      "original_transaction_id" : "490001314520000",
      "purchase_date" : "2023-06-06 16:06:06 Etc/GMT",
      "product_id" : "com.miiiao.iwallpaper.lifetime",
      "original_purchase_date_pst" : "2023-06-06 06:06:07 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1686065613000",
      "web_order_line_item_id" : "490000123456789",
      "expires_date_ms" : "4092599349000",
      "purchase_date_pst" : "2023-06-06 06:06:06 America/Los_Angeles",
      "original_purchase_date" : "2023-06-06 16:06:07 Etc/GMT"
    }
  ],
  "latest_receipt" : "",
  "environment" : "Production",
  "pending_renewal_info" : [
    {
      "product_id" : "com.miiiao.iwallpaper.lifetime",
      "original_transaction_id" : "490001314520000",
      "auto_renew_product_id" : "com.miiiao.iwallpaper.lifetime",
      "auto_renew_status" : "1"
    }
  ],
  "warning" : "本脚本由鹏客软件制作，禁止转载售卖",
};

$done({body : JSON.stringify(peck)});
