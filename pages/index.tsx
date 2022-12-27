import { Box, Button, Checkbox, Group, TextInput, Title } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import Layout from 'components/layout/Layout'
import { loginSchema } from 'types/component'

export default function Home() {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: zodResolver(loginSchema)
    })
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
                        <Title mb={'md'} color="primary.1">
                            Login
                        </Title>
                        <form onSubmit={form.onSubmit(() => {})}>
                            <TextInput
                                withAsterisk
                                label="Email"
                                placeholder="your@email.com"
                                {...form.getInputProps('email')}
                            />
                            <TextInput
                                withAsterisk
                                label="Password"
                                placeholder="********"
                                {...form.getInputProps('password')}
                            />

                            <Checkbox
                                mt="md"
                                label="I agree to sell my privacy"
                                {...form.getInputProps('termsOfService', {
                                    type: 'checkbox'
                                })}
                            />

                            <Group position="left" mt="lg">
                                <Button
                                    variant="gradient"
                                    gradient={{
                                        from: 'primary.1',
                                        to: 'primary.6',
                                        deg: 160
                                    }}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Group>
                        </form>
                    </Box>
                </main>
            </Layout>
        </>
    )
}
