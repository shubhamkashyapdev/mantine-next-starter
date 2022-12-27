import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import useAuth from '@/hooks/useAuth'

export default function App(props: AppProps) {
    const { fetchProfile } = useAuth()
    const { Component, pageProps } = props
    useEffect(() => {
        fetchProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <ToastContainer />
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'dark',
                    respectReducedMotion: true,
                    cursorType: 'pointer',
                    colors: {
                        primary: [
                            '#671ddf',
                            '#5d1ac9',
                            '#5217b2',
                            '#48149c',
                            '#3e1186',
                            '#340f70',
                            '#290c59',
                            '#1f0943',
                            '#15062d',
                            '#0a0316'
                        ]
                    }
                }}
            >
                <NotificationsProvider>
                    <Component {...pageProps} />
                </NotificationsProvider>
            </MantineProvider>
        </>
    )
}
