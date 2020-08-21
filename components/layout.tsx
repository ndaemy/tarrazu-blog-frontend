import Head from 'next/head'
import Nav from './Nav'

type Props = {
  title?: string
  children: React.ReactNode
}

export default function Layout({ title, children }: Props) {
  return (
    <div className='max-w-screen-lg mx-auto px-8'>
      <Head>
        <title>{title ? `Tarrazu Blog | ${title}` : 'Tarrazu Blog'}</title>
      </Head>
      <Nav />
      {children}
    </div>
  )
}
