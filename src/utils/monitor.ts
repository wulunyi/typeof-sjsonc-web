import Aegis from 'aegis-web-sdk';

export const aegis = new Aegis({
    id: 'kXD2YxMe7J2oAzeWb1', // 上报 id
    // uin: 'xxx', // 用户唯一 ID（可选）
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    spa: true // spa 应用页面跳转的时候开启 pv 计算
});