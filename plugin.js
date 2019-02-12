module.exports = class MyPlugin {
  // 构造方法
  constructor(options) {
    console.log('MyPlugin constructor:', options)
  }

  // 应用函数
  apply(compiler) {
    // 绑定钩子事件
    compiler.hooks.compilation.tap('MyPlugin', compilation => {
      console.log('MyPlugin')
    })
  }
}