/**
 * 港居通 · 高德地图 Key 配置
 * -------------------------------------------------
 * 两种配置方式（任选其一）：
 * 1) 直接改本文件（部署到 GitHub Pages 时推荐）
 * 2) 在页面右上角「设置」弹窗里填写（会存入浏览器 localStorage，仅本机生效）
 *
 * 如何获取：
 * ① 打开 https://console.amap.com/dev/key/app 创建 Web端(JS API) 应用
 * ② 复制「Key」填到 jsKey；若开启了 Key 安全设置，把「安全密钥」填到 securityJsCode
 * ③ 重要：在 Key 的「域名白名单」里只允许 fredrick-clearwater.github.io/*，否则 key 会被吊销
 */
window.GJT_CONFIG = {
  jsKey: '3bc200a03770e9848ccc9669fae238d9',          // 高德 JS API Key（Web端）
  securityJsCode: '5cefda61060baf11e5c4e1cb5198fa1d', // 高德安全密钥（已开启安全设置）
  exchangeRate: 0.86  // 港元→人民币 汇率（已确认硬编码，可在此修改）
};
