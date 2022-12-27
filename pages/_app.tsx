import '../styles/globals.css'

import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'

export default function App(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <>
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
                <Component {...pageProps} />
            </MantineProvider>
        </>
    )
}
