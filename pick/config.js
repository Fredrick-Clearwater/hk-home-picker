/**
 * 港居通 · 高德地图 Key 配置
 * -------------------------------------------------
 * 三种配置方式（按推荐顺序）：
 * 1) 在页面右上角「设置」弹窗里填写：会存入浏览器 localStorage，刷新即生效
 * 2) 直接改本文件（提交前请确认不会被推到公网仓库）
 * 3) 用 GitHub Actions 把仓库 Secret 注入（见 README）
 *
 * 如何获取：
 * ① 打开 https://console.amap.com/dev/key/app 创建 Web端(JS API) 应用
 * ② 复制「Key」填到 jsKey；若开启了 Key 安全设置，把「安全密钥」填到 securityJsCode
 * ③ 重要：在 Key 的「域名白名单」里只允许 fredrick-clearwater.github.io/*，否则 key 会被吊销
 */
window.GJT_CONFIG = {
  jsKey: '',          // 高德 JS API Key（Web端）
  securityJsCode: '', // 高德安全密钥（选填）
  exchangeRate: 0.86  // 港元→人民币 汇率（已确认硬编码，可在此修改）
};
