# yangjing.world

这是 [yangjing.world](https://yangjing.world) 的 Hexo 源项目，由现有 GitHub Pages
静态文件与线上页面恢复而来。

## 本地预览

```bash
npm install
npm run server
```

浏览器访问 `http://localhost:4000`。

## 发布方式

日常内容在 `source` 分支维护。推送到 `source` 后，GitHub Actions 会运行 Hexo，
并把生成的 `public/` 发布到 `main` 分支；GitHub Pages 继续从 `main` 分支托管。

新文章可放入 `source/_posts/`，或运行：

```bash
npx hexo new "文章标题"
```
