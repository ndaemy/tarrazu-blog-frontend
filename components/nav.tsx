import Link from 'next/link'

const links = [{ href: 'https://github.com/yuyaebean', label: 'GitHub' }]

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-between items-center p-8'>
        <li>
          <Link href='/'>
            <a className='text-blue-500 no-underline'>Home</a>
          </Link>
        </li>
        <ul className='flex justify-between items-center space-x-4'>
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className='btn-blue no-underline' target='_blank'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
