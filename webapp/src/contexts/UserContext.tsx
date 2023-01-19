import React, {useState, useContext, createContext} from 'react'
import {User, UserRequest} from '../models/UserModel'


//funderade på att skriva allt som comment/message istället för user men insåg sen att man antagligen använder user i den verkliga världen för att ha det samlat med t.ex. användarnamn, lösenord, adress osv.

interface UserProviderType {
    children: any
}

export interface UserContextType {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    users: User[]
    userRequest: UserRequest
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    create: (e: React.FormEvent<UserRequest>) => void
    get: (id: number) => void
    getAll: () => void
    update: (id: number, e: React.FormEvent<User>) => void
    remove: (id:number) => void
}



export const UserContext = createContext<UserContextType | null>(null)


export const useUserContext = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}:UserProviderType) => {
    const defaultUserValues: User = {id: 0, name:'', email:'', comment:''}
    const defaultUserReqValues: UserRequest = {name:'', email:'', comment:''}


    const baseUrl = 'http://localhost:5000/api/users'    
    const [user, setUser] = useState(defaultUserValues)
    const [userRequest, setUserRequest] = useState(defaultUserReqValues)
    const [users, setUsers] = useState<User[]>([])




    const create = async (e: React.FormEvent<UserRequest>) => {
        e.preventDefault()

        const res = await fetch(`${baseUrl}`,{
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        })

        if (res.status === 200)
            setUserRequest(defaultUserReqValues)
        

    }

    const get = async (id: number) => {
        const res = await fetch(`${baseUrl}/${id}`)
        if (res.status === 201)
            setUser(await res.json())
    }

    const getAll = async () => {
        const res = await fetch(`${baseUrl}`)
        if (res.status === 200)
            setUsers(await res.json())
    }

    const update = async (id: number, e: React.FormEvent<User>) => {
        e.preventDefault

        const res = await fetch(`${baseUrl}/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (res.status === 200)
            setUser(await res.json())
    }

    const remove = async (id: number) => {

        const res = await fetch(`${baseUrl}/${id}`, {
            method: 'delete'})

        if (res.status === 204)
            setUser(defaultUserValues)

    }


    return (
    <UserContext.Provider value={{user, setUser, users, userRequest, setUserRequest, create, get, getAll, update, remove}}>
        {children}
    </UserContext.Provider>
    )
}

export default UserProvider