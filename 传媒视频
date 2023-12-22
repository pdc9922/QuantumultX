/******************************

脚本功能：蜜桃传媒解锁全视频
应用版本：1.0.0
应用下载：https://bit.ly/3TF4KxH
脚本作者：鹏客软件
更新时间：2023-12-21
鹏客网盘：https://peck.cool
使用声明：脚本仅供学习交流, 禁转卖与商业用途！

*******************************

[mitm]
hostname = *m6aw*, *3ju7q*, *gar48*, *68bhf*, *z0pf9*, *cloudfront*, plkxo.vg4b3.com, zpisj.ie3x0.com, xplk.ib1tp.com, *.ie3x0.com, *.vg4b3.com, *.b1tp.com

[rewrite_local]
# > 蜜桃传媒破解全部视频
^http[s]?:\/\/.*(m6aw0|3ju7q|gar48|68bhf|z0pf9|cloudfront|vg4b3|ie3x0|b1tp).+\/api\/app\/(recommend\/vid\/(list|ad)|mine\/info|ping\/domain\/h5|vid\/(section|info|list|user\/count)|recreation\/list) url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/PeachMediaYuheng01Crack.js

*******************************/

const $ = new Env('蜜桃传媒')
let obj = JSON.parse($response.body)
;(async () => {
    try {
        let decrypted = obj.hash ? await DecryptResp(obj.data) : obj.data
        const handlers = {
            // 去全局广告
            'ping/domain/h5': () => {
                decrypted.adsInfoList = []
                // decrypted.sourceList = []
                decrypted.systemConfigList = []
                decrypted.adsTimeLongVideo = -1
                decrypted.jingangArea.list = []
            },
            // 去视频广告
            'vid/ad': () => (decrypted = []),
            // 解锁短视频
            'vid/(section|list)': () => {
                let list = []
                if (decrypted.hasOwnProperty('list')) {
                    list = decrypted.list
                } else if (decrypted.hasOwnProperty('vInfos')) {
                    list = decrypted.vInfos
                } else if (decrypted.hasOwnProperty('videos')) {
                    list = decrypted.videos
                }
                list.forEach((item) => {
                    item.previewURL && item.sourceURL && (item.previewURL = '')
                    item.vidStatus.hasPaid = true
                    item.watch.isFreeWatch = true
                    // 托底
                    item.freeTime = item.playTime
                    item.watch.watchCount = 9999
                })
                if (decrypted.hasOwnProperty('list')) {
                    decrypted.list = list
                } else if (decrypted.hasOwnProperty('vInfos')) {
                    decrypted.vInfos = list
                } else if (decrypted.hasOwnProperty('videos')) {
                    decrypted.videos = list
                }
            },
            // 解锁视频
            'vid/info': () => {
                decrypted.previewURL && decrypted.sourceURL && (decrypted.previewURL = '')
                decrypted.vidStatus.hasPaid = true
                decrypted.watch.isFreeWatch = true
                // 托底
                decrypted.freeTime = decrypted.playTime
            },
            // 解锁次数
            'vid/user/count': () => {
                decrypted = { isCan: true, watchCount: 9999 }
            },
            // 个人中心
            'mine/info': () => {
                decrypted = {
                    ...decrypted,
                    ike: 999,
                    follow: 999,
                    fans: 999,
                    like: 999,
                    name: 'peck.cool',
                    summary: 'https://peck.cool',
                    vipLevel: 3,
                    watchCount: 999,
                    vipExpireDate: '2099-01-01T08:00:00+08:00',
                    isMadou: true,
                    snapVip: 1
                }
            },
            // 去除菠菜广告
            'recreation/list': () => {
                decrypted.adv = []
                // const black_list = ['同城', '直播', '开元', '棋牌', '官方', '体育']
                const white_list = ['无忧', '红杏', '物色', '色中色', '红杏', '揭秘', '吃瓜', '海角'] // 仅显示已解锁应用
                decrypted.shuApp = decrypted.shuApp.filter((item) => white_list.some((i) => item.name.includes(i)))
            }
        }
        for (const pattern in handlers) {
            if (new RegExp(pattern).test($request.url)) {
                handlers[pattern]()
            }
        }
        obj = {
            ...obj,
            data: decrypted,
            hash: false
        }
    } catch (e) {
        console.log(e)
    }
})()
    .catch((e) => $.log('', `❗️ ${$.name}, 错误! 原因: ${e}!`, ''))
    .finally(() =>
        $.done({
            body: JSON.stringify(obj)
        })
)
