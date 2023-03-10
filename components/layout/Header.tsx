import {
    Burger,
    Button,
    Center,
    Container,
    createStyles,
    Group,
    Header,
    Menu
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBrandGithubCopilot, IconChevronDown } from '@tabler/icons'
import { useRouter } from 'next/router'
import { NestedLinkType } from 'types/component'

import useAuth from '@/hooks/useAuth'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none'
        }
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none'
        }
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0]
        }
    },

    linkLabel: {
        marginRight: 5
    }
}))

interface HeaderActionProps {
    links: NestedLinkType[]
}

export default function HeaderAction({ links }: HeaderActionProps) {
    const router = useRouter()
    const { authenticated, logoutTheUser } = useAuth()
    const { classes } = useStyles()
    const [opened, { toggle }] = useDisclosure(false)
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ))

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    exitTransitionDuration={0}
                >
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>
                                    {link.label}
                                </span>
                                <IconChevronDown size={12} stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        )
    })

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                    />
                    <IconBrandGithubCopilot size={28} />
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Group>
                    <Button
                        variant="gradient"
                        gradient={{
                            from: 'primary.1',
                            to: 'primary.6',
                            deg: 160
                        }}
                        radius="sm"
                        sx={{ height: 35 }}
                        onClick={() => {
                            if (authenticated) {
                                // @todo - navigate to user's profile panel
                                router.push('/')
                            } else {
                                router.push('/login')
                            }
                        }}
                    >
                        {authenticated ? 'Profile' : 'Login'}
                    </Button>
                    {authenticated ? (
                        <Button
                            variant="gradient"
                            gradient={{
                                from: 'primary.1',
                                to: 'primary.6',
                                deg: 160
                            }}
                            radius="sm"
                            sx={{ height: 35 }}
                            onClick={logoutTheUser}
                        >
                            Logout
                        </Button>
                    ) : null}
                </Group>
            </Container>
        </Header>
    )
}
