import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Bug workaround (2026-07-14) · vite v7.3.5 con Node 22 deja handles
 * abiertos tras `vite build` completar · el proceso npm nunca termina
 * y Vercel lo mata con SIGKILL tras ~2min. Este plugin fuerza exit
 * limpio tras el closeBundle hook.
 */
const forceExitAfterBuild = () => ({
  name: 'force-exit-after-build',
  apply: 'build' as const,
  closeBundle() {
    setTimeout(() => process.exit(0), 100)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), forceExitAfterBuild()],
  base: '/',
  server: {
    port: 8090,
    strictPort: false,
  },
})
