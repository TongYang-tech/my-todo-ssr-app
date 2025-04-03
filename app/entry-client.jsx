import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from './createEmotonCache.js'
import theme from './theme'
import App from './App'

const cache = createEmotionCache()

hydrateRoot(
  document.getElementById('root'),
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <CssBaseline />
        <App />
      </StrictMode>
    </ThemeProvider>
  </CacheProvider>,
)
