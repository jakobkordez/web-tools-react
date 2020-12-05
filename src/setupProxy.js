const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.REACT_APP_API_HOST || 'http://localhost:6006',
            changeOrigin: true,
            pathRewrite: (path) => path.substring(4),
        })
    );
}