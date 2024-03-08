'use server'

import { getAllUsers } from '@/data/user'
import { SelectItem } from './ui/select'

const Teste = async () => {
  const users = await getAllUsers()
  return (
    <>
      {users?.map((user, idx) => (
        <SelectItem key={idx} value={user.id}>
          {user.name}
        </SelectItem>
      ))}
    </>
  )
}

export default Teste
