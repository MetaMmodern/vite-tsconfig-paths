import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // changing tsconfigPaths options does not influence anything
  plugins: [react(), tsconfigPaths()],
})
