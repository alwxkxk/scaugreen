# 绿音
旨在扩展大学新生环保视野的静态网站。  
由于只打算微信上显示，只针对移动端而作的静态页面，PC端浏览效果并不好。另考虑到绿音一年也更新不了几次，所以华农环协直接微信联系我来更新绿音就好。
_所以只适合在手机上看，电脑请使用开发工具调整为手机模式。_

## 内容更新
1. 先安装环境（node 8），下载源代码，安装依赖包。
2. 在src/pages/下以markdwon言语编写内容，经编译后其文件名会成为菜单名，出现在菜单栏中，网站默认以《绿音》为首页。
3. 上传至静态网站服务器。
```bash
#下载源代码
git clone git@github.com:alwxkxk/scaugreen.git

#安装依赖包
npm install 

#修改文件后重新编译，在dist目录里输出静态网站，另需要将src/css，src/fonts目录复制到dist/目录下。
npm run build

#本地测试
npm run dev 

#部署： 上传dist文件 至七牛云 或gh-pages
```
### 图片问题
所有背景图在index.css里修改，采用图床。所有图片都在src/img另有备份保存。

## TODO List
ABCD分别对应 重要紧急、重要不紧急、不重要紧急、不重要不紧急
- 目录排序问题（B）
- 可配置默认首页（D）
- ios机存在乱点击出现空白内容（C）

### 更新
此分支已失效，新的分支scaugreen2以hexo搭建。
