/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2019-12-20 17:33:34
 * @lastEditTime: Do not edit
 */
const fs = require('fs');
const path = require('path');

function resolve(url) {
    return path.resolve(__dirname, url);
}
// 删除或取消链接文件
// fs.unlink(resolve('../temp/unlink.js'), (err) => {
//     if (err) {
//         throw new Error(err);
//     }

//     console.log('删除成功');
// })

// 删除目录
fs.rmdir(resolve('../temp'), (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log('删除目录成功');
})