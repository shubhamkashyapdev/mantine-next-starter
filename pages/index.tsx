import { Box, Title } from '@mantine/core'
import Layout from 'components/layout/Layout'

export default function Home() {
    return (
        <>
            <Layout>
                <main className={`grid h-[70vh] place-content-center`}>
                    <Box
                        sx={(theme) => ({
                            width: 300,
                            borderColor: theme.colors.primary[1],
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderRadius: 4
                        })}
                        className=" p-4 shadow-lg shadow-white/5"
                        mx="auto"
                    >
                        <Title mb={'md'} align="center" color="primary.1">
                            Home
                        </Title>
                    </Box>
                </main>
            </Layout>
        </>
    )
}
