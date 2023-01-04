import {Center, Container, Text, createStyles, Group, Title, Button} from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 90,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 34,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

const NoResults = () => {
    const {classes} = useStyles();
    return (
        <Container className={classes.root}>
            <div className={classes.label}>Start Your Search!</div>
            <Title className={classes.title}>We&apos;ll change this up once you&apos;ve searched for a user 😉</Title>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
                Enter a user&apos;s name above and click the search button to get started!
            </Text>
        </Container>
    )
}

export default NoResults
