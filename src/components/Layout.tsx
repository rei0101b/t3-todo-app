import {FC, ReactNode} from 'react'
import Head from 'next/head'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({children, title = "T3 Stack"}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by creat-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        {children}
      </main>
    </>
  )
}