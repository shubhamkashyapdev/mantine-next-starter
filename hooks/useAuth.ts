import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import useAuthStore from '@/store/authStore'
import { LoginType } from '@/types/schemas'
import http from '@/utilities/http'

const loginUser = async (loginInput: LoginType) => {
    try {
        const promise = http.post('/users/login', loginInput)
        const res = await toast.promise(promise, {
            pending: 'Logging you in',
            success: 'Logged in successfully',
            error: 'Please check your email & password'
        })
        const { token } = res.data
        return token
    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message)
        }
    }
}
const getCurrentUser = async () => {
    try {
        const res = await http.get('/users/me')
        return res.data.user
    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message)
        }
    }
}

const login = async (loginInput: LoginType) => {
    await loginUser(loginInput)
    const user = await getCurrentUser()
    return user
}

const useAuth = () => {
    const router = useRouter()
    const { setUserDetails } = useAuthStore()
    const fetchProfile = async () => {
        const user = await getCurrentUser()
        if (user) {
            setUserDetails(user)
        }
    }
    const authenticateUser = async (loginInput: LoginType, route?: string) => {
        const data = await login(loginInput)
        if (data) {
            setUserDetails(data.user)
            if (route) {
                router.push(route)
            }
        }
        return data
    }
    return { authenticateUser, fetchProfile }
}

export default useAuth
