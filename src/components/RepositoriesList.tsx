import type { FC, FormEvent } from 'react'
import { useState } from 'react'

export const RepositoriesList: FC = () => {
  const [term, setTerm] = useState('')
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}