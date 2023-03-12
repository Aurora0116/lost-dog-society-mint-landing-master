import '../styles/style.scss'
import type { AppProps } from 'next/app'

function LDS({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default LDS
