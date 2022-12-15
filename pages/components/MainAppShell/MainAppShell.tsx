import {useState} from 'react'
import {
    AppShell,
    Footer,
    Text,
    useMantineTheme,
    Container,
} from '@mantine/core';
import {HeaderSimple} from '../Header';

const links = [{link: '/', label: 'Home'}, {link: '/login', label: 'Login'}];

export const MainAppShell = (props: any) => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState<boolean>(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            footer={
                <Footer height={60} p="md" withBorder={false}>
                    <Container size="xl">
                        <Text>Github Finder © {new Date().getFullYear()}</Text>
                    </Container>
                </Footer>
            }
            header={
                <HeaderSimple links={links} />
            }
        >
            {props.children}
        </AppShell>
    )
}
