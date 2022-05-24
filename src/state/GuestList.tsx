import { useState } from 'react'
import type { FC } from 'react'

export const GuestList: FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const onClick = () => {
    setName('')
    setGuests([...guests, name])
  }

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest, i) => (
          <li key={i}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  )
}
