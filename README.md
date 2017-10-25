# hexo-theme-lavas

hexo-theme-lavas 是 [Lavas](https://lavas.baidu.com/) 为 hexo 定制的主题，主题中具备 [Lavas](https://lavas.baidu.com/) 的多种特性

- [预览](http://hexo.io/hexo-theme-landscape/)

## 使用

### 安装

``` bash
$ git clone https://github.com/hexojs/hexo-theme-landscape.git
```

### 使用

修改hexo项目 `_config.yml` 文件中主题配置 `theme` 为 `hexo-theme-lavas`

### 升级

``` bash
cd themes/hexo-theme-lavas
git pull
```

## 配置

### 项目配置

```
# 网站标题，页面title、首页横幅都会使用该title配置
title: Lavas

# 网站副标题，首页横幅中的网站简介使用该配置
subtitle: 基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题

# 其余配置遵循 hexo 原有逻辑
```

### 主题配置

``` yml
# 菜单栏配置，一个名字，一个url对应
menu:
  Home: /
  Archives: /archives/

# 摘要文章底部“阅读更多”的链接，设置为false则隐藏该链接
excerpt_link: Read More

# Sidebar 侧边栏位置设置，可设置为left、right、bottom，分别将侧边栏放置在左边、右边和底部，也可以设置为false直接不展示侧边栏
sidebar: right

# 侧边栏模块，包含“分类”、“标签”、“归档”、“最新发布”，将按配置顺序罗列展示
widgets:
- recent_posts
- category
- tag
- archives

# 归档类型，可分为 monthly 和 yearly，分别代表月份归档和年份归档
archive_type

# 是否显示数量，true则在侧边栏模块分类中显示文章数量
show_count: true

# favicon 地址
favicon: /favicon.png

# 是否启用 service worker，开启离线缓存功能
service_worker: true

# manifest 是否启用 manifest
manifest

# banner 配置首页横幅图片，pc、mobile 分别配置pc和移动端的横幅图片，不配置将会使用默认颜色填充
banner:
  pc: /img/banner-pc.jpg
  mobile: /img/banner-mobile.jpg

```

## Development

### 要求

- Hexo 2.4+
