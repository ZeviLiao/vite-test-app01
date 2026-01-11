import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'
import './styles/globals.css'
import ComponentsTest from '@/features/component-test/page'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure you have <div id="root"></div> in your HTML.',
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ComponentsTest />
    </ThemeProvider>
  </StrictMode>,
)
