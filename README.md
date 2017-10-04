### 开发基础
- MarkDown
- JS HTML5 CSS
- Nodejs
- Vue Vue-Router
- Webpack

### 部署
```bash
#修改src/pages/ 下的文章
#生成文章pages.json ,并打包
npm run build

#手动将img,css,fonts,js文件夹复制粘贴到dist下

#本地测试
npm run dev 

#部署： 上传dist文件 至七牛云 或gh-pages
```
### 备注
为解决gh-pages图片路径问题，index.css使用的背景图 改用七牛云路径

### TODO List
ABCD分别对应 重要紧急、重要不紧急、不重要紧急、不重要不紧急
- 目录排序问题（B）
- 样式应该独立问题（B）
- 写一个自动复制文件与目录的脚本（B）
- 个性化修改 与 开发指南（B）
- 可配置默认首页（D）
- 打包时能加载img路径问题（D）
- ios机存在乱点击出现空白内容（C）