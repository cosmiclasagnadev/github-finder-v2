import React, {useState, ReactNode} from 'react';
import {Text, Header, Container, Group, Burger, ActionIcon, useMantineColorScheme, Title, useMantineTheme, Button} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {headerUseStyles} from './HeaderSimple.styles';
import {useRouter} from 'next/router'

import {IconSun, IconMoonStars} from '@tabler/icons';

interface HeaderSimpleProps {
    links: {link: string; label: string}[];
}

const getItems = (classes: any, setActive: any, router: any, cx: any, active: any) => {
    return (
        <>
            <a
                key={'Home'}
                href={"/"}
                className={cx(classes.link, {[classes.linkActive]: active === "/"})}
                onClick={(event) => {
                    event.preventDefault();
                    setActive("/");
                    router.push("/");
                }}
            >
                Home
            </a>
            <a
                key={'About'}
                href={"/about"}
                className={cx(classes.link, {[classes.linkActive]: active === "/about"})}
                onClick={(event) => {
                    event.preventDefault();
                    setActive("/about");
                    router.push("/about");
                }}
            >
                About
            </a>
        </>
    )
}

export function HeaderSimple({links}: HeaderSimpleProps) {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    const theme = useMantineTheme();
    const dark = colorScheme === 'dark';
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const {classes, cx} = headerUseStyles();
    const router = useRouter();

    return (
        <Header height={60} mb={24}>
            <Container size='xl' className={classes.header}>
                <Title size="h2" order={3} color={colorScheme === 'dark' ? theme.colors.green[3] : theme.colors.green[7]}>Github Finder</Title>
                <Group spacing={5} className={classes.links}>
                    {getItems(classes, setActive, router, cx, active)}
                    <ActionIcon
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                    </ActionIcon>
                </Group>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            </Container>
        </Header>
    );
}
