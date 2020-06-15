import Head from 'next/head'
import Nav from './nav'

type Props = {
  title?: string
  children: React.ReactChild
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title ? `Tarrazu Blog | ${title}` : 'Tarrazu Blog'}</title>
      </Head>
      <Nav />
      {children}
    </>
  )
}
