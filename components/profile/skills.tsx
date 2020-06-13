interface Props {
  names: string[]
}

export default function Skill({ names }: Props) {
  return (
    <ul>
      {names.map(name => (
        <li
          key={name}
          className='rounded-lg bg-gray-700 p-2 text-sm text-white mr-2 mb-2 inline-block'
        >
          {name}
        </li>
      ))}
    </ul>
  )
}
