import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from './createEmotonCache.js'
import theme from './theme'
import App from './App'

/**
 * @param {string} _url
 */
export function render(_url) {
  const cache = createEmotionCache()
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks
  } = createEmotionServer(cache)

  const html = renderToString(
    <StrictMode>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>
    </StrictMode>,
  )

  const emotionChunks = extractCriticalToChunks(html)
  const head = constructStyleTagsFromChunks(emotionChunks)

  return { head, html }
}
