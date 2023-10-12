import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from './_sections/header'
import { Providers } from '@/app/[locale]/_sections/provider';
import Menu from './_sections/menu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

const locales = ['en', 'ja'];

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  // const isValidLocale = locales.some((cur) => cur === params.locale);
  // if (!isValidLocale) notFound();
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <body className={`flex overflow-y-hidden ${inter.className}`}>
          <Providers>
            <Menu />
            <div className='grow z-0'>
              <Header />
              <div className="flex min-h-screen flex-col overflow-y-scroll h-screen bg-[#F6F6FA]">
                {children}
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </NextIntlClientProvider>
  )
}
