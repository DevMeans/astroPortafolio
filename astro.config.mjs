import { defineConfig } from 'astro/config';

export default defineConfig({
    server: {
        proxy: {
            '/send-email': {
                target: 'https://api.resend.com',
                changeOrigin: true,
                headers: {
                    'Authorization': 'Bearer re_iDydGUN2_NEXwCoT2LhutAYxDyU61bogH',
                    'Content-Type': 'application/json',
                }
            }
        }
    }
});
