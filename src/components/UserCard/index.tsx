import {ActionIcon, Avatar, Box, Button, Card, Center, createStyles, Flex, SimpleGrid, Title} from '@mantine/core'
import React from 'react'
import {UserResult} from '../../types/users'
import {IconExternalLink} from '@tabler/icons';

interface UserCardProps {
    user: UserResult;
}

const useStyles = createStyles((theme) => ({
    card: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? `${theme.colors.dark[9]}` : `${theme.colors.gray[2]}`,
            transition: 'all 0.2s ease-in-out',
        }
    }
}))

const UserCard = ({user}: UserCardProps) => {
    const {classes} = useStyles();
    return (
        <Card key={user.id} className={classes.card} withBorder radius="md">
            <Flex direction="row" justify="center" align="center">
                <Avatar size="xl" radius={100} src={user.avatar_url} />
            </Flex>
            <Box my={8}>
                <Center mb={8}>
                    <Title order={5}>{user.login}</Title>
                </Center>
                <Center>
                    <Button variant="subtle" size="xs" component='a' href={user.html_url} target="_blank">
                        Open Github
                    </Button>
                </Center>
            </Box>

        </Card>
    )
}

export default UserCard
