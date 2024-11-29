import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: '../api/src/http/swagger.json',
    output: {
      clean: true,
      mock: true,
      biome: true,
      target: './src/http/generated/api.ts',
      mode: 'tags-split',
      httpClient: 'fetch',
      client: 'react-query',
      baseUrl: 'http://localhost:3333',
    },
  },
})
