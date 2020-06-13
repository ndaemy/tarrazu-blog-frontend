interface Props {
  names: string[]
}

export default function Tags({ names }: Props) {
  return (
    <ul>
      {names.map(name => (
        <li
          key={name}
          className='rounded bg-gray-600 px-2 py-1 text-xs text-white mr-2 mb-2 inline-block'
        >
          {name}
        </li>
      ))}
    </ul>
  )
}
