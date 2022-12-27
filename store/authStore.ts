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
    setUserDetails: (user: UserType) =>
        set((prevState: IAuthStore) => {
            if (user) {
                return {
                    ...prevState,
                    user,
                    authenticated: true
                }
            } else {
                return {
                    ...prevState,
                    user: null,
                    authenticated: false
                }
            }
        }),
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
