const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log(app);
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  );
};
// const { createProxyMiddleware } = require('http-proxy-middleware')
// module.exports = function (app) { 
//     app.use(
//         createProxyMiddleware('/api', { 
//             target: 'http://localhost:5000', 
//             changeOrigin: true, 
//             pathRewrite: { '^/api': '' } 
//         }),) 
//     }
