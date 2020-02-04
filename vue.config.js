module.exports = {
  devServer: {
    https: false,
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://39.97.33.178',
        /* 允许跨域 */
        changeOrigin: true,
      },
      '/lib': {
        /* 目标代理服务器地址 */
        target: 'http://shadow.elemecdn.com',
        /* 允许跨域 */
        changeOrigin: true,
      },
      '/v2': {
        /* 目标代理服务器地址 */
        target: 'https://douban.uieee.com/',
        /* 允许跨域 */
        changeOrigin: true,
      }
    }
  }
}