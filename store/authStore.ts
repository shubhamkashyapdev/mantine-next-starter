import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { UserType } from '@/types/index'

type IUser = {
    name: string
}

type IAuthStore = {
    authenticated: boolean
    user: IUser | null
}

const authStore = (set: any) => ({
    authenticated: false,
    user: null,
    token: null,
    authenticateUser: null,
    setUserDetails: (user: UserType) =>
        set((prevState: IAuthStore) => ({
            ...prevState,
            user,
            authenticated: true
        })),
    logoutUser: () =>
        set((prevState: IAuthStore) => ({
            ...prevState,
            user: null,
            token: null,
            authenticated: false
        }))
})

const useAuthStore = create(
    devtools(authStore, {
        name: 'auth'
    })
)

export default useAuthStore
