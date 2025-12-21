import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/opensea-api': {
        target: 'https://testnets-api.opensea.io',
        changeOrigin: true,
        secure: false, // <--- 关键修改：忽略 SSL 证书验证
        rewrite: (path) => path.replace(/^\/opensea-api/, ''),
        // 添加一点调试日志，让你在终端看到请求有没有发出去
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('代理错误:', err);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('收到 OpenSea 响应:', proxyRes.statusCode, req.url);
          });
        },
      }
    }
  }
})
