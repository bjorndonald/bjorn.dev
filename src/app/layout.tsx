import { createMetadata } from '@/utils/metadata'
import './globals.css'
import type { Metadata } from 'next'
import cx from 'classnames'
import { Inter, Manrope } from '@/styles/fonts';
import Script from 'next/script';
import { Meta } from './meta';
import { Providers } from '@/providers';

export const metadata = {
  ...createMetadata({
    title: 'Bjorn-Donald Bassey - Full-stack Software Engineer',
    description: "Passionate and creative full-stack software engineer from Colombia 🇳🇬  Detail- driven, I strive to build great-looking, user - friendly software while enhancing my skills along the way",
    keywords: [
      'bjorn-donald bassey',
      'bjorn',
      'bjorn-donald',
      'bassey',
      'open-source',
      'full-stack',
      'software engineer',
      'nigeria',
      'bio',
      'developer',
      'portfolio',
      'developement',
      'web'
    ]
  })
}

const { UMAMI_WEBSITE_ID: umamiWebsiteId = '', IS_TEMPLATE = 'true' } =
  process.env;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      id='page'
      lang="en"
      className={cx(
        Inter.className,
        Manrope.variable,
        IS_TEMPLATE === 'true' ? 'template' : ''
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          src={'https://umami.bjorncode.dev/script.js'}
          data-website-id={umamiWebsiteId}
          data-domains={'bjorncode.dev'}
          strategy={'lazyOnload'}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
