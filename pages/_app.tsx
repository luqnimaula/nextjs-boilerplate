import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DarkModeProvider } from '@/hooks/useDarkMode'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}
