# 港居通 · 湾区置业特刊

新来港人才置业指南：纸墨版特刊 + 智能选房工具。

## 站点结构

```
.
├── index.html              ← 特刊首页（编辑式大字报）
├── pick/                   ← 港居通工具页（Vue + Tailwind + AMap）
│   ├── index.html
│   ├── config.js           ← 高德 Key / 汇率等本地配置
│   ├── embed_data.js       ← 数据兜底（file:// 或断网时使用）
│   └── data/
│       ├── areas.json
│       ├── poi.json
│       └── tax.json
└── assets/
    └── images/             ← 特刊用图
```

## 本地预览

任一静态服务器即可，例如：

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

打开 `http://localhost:8000` 看特刊，工具页走 `http://localhost:8000/pick/`。

> ⚠️ 直接 `file://` 打开 `pick/` 也能跑，但高德地图和 fetch 走本地数据时体验会降级。

## GitHub Pages 部署

1. 在 GitHub 新建仓库（例如 `gangjutong`）。
2. 把本目录推上去。
3. 仓库 Settings → Pages → Source 选 `main` 分支根目录。
4. 几分钟后访问 `https://<user>.github.io/<repo>/`。

## 数据口径

* 政策以香港税务局最新公布为准
* 区域尺价为参考均价，会随市场波动
* POI 数据为人工整理样本，仅供方向性参考

## 高德地图 Key

`pick/config.js` 已填入默认 Key。GitHub Pages 静态站 key 是公开的，但**高德控制台有域名白名单机制防盗用**——必须做这一步，否则 Key 会在第一次请求时被高德作废。

去 [高德开放平台](https://console.amap.com/dev/key/app) → 找到这个应用 → 在 Key 的「域名白名单」里填：

```
fredrick-clearwater.github.io/*
```

如果想在自己的域名跑，也加一行自己的域名。

如果默认 Key 失效或不够用，可以在工具页右上角点「设置」填自己的 Key，存浏览器 localStorage。