# loader用于编译开发的代码编译成浏览器识别的代码
# 常用的loader有
## babel-loader 用于将js文件中的ES6转成ES5
## url-loader   用于在处理文件的时候，可以通过配置指定一个大小，当文件小于这个配置值时，url-loader 会将其转换为一个 base64 编码的 DataURL
## sass-loader  用于将scss或者sass less 编译成css
## style-loader 用于将css-loader 解析的结果转变成 JS 代码，运行时动态插入 style 标签来让 CSS 代码生效
## css-loader   用于将CSS 中的依赖，例如 @import 和 url() 等引用外部文件的声明
## postcss-loader 会帮助我们将写的一写css样式兼容各个浏览器 帮助我们省了兼容的问题
## eslint-loader  配置一些代码规范
## px2rem-loader  将css中或者sass中的px换算成对应的rem
