import { useState } from 'react'
import { FC } from 'react'

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michel', age: 20 },
]

export const UserSearch: FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name
    })

    setUser(foundUser)
  }

  return (
    <div>
      <h3>UserSearch</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}
