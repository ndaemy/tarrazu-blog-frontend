import Link from 'next/link'

const links = [{ href: 'https://github.com/yuyaebean', label: 'GitHub' }]

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-between items-center p-8 md:px-32'>
        <li>
          <Link href='/'>
            <a className='text-teal-500 no-underline mr-8'>Home</a>
          </Link>
          <Link href='/profile'>
            <a className='text-teal-500 no-underline'>Profile</a>
          </Link>
        </li>
        <ul className='flex justify-between items-center space-x-4'>
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className='btn-teal no-underline' target='_blank'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
