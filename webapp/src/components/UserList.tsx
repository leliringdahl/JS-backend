import React, {useEffect} from 'react'
import { UserContext, UserContextType } from '../contexts/UserContext' 

export const UserList = () => {
    const { users, getAll} = React.useContext(UserContext) as UserContextType

    useEffect(() => {
        getAll()
    }, [getAll])

    
  return (
    <div>UserList</div>
  )
}