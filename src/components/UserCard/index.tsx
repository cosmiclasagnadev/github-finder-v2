import {ActionIcon, Avatar, Box, Button, Card, Center, Flex, SimpleGrid, Title} from '@mantine/core'
import React from 'react'
import {UserResult} from '../../types/users'
import {IconExternalLink} from '@tabler/icons';

interface UserCardProps {
    user: UserResult;
}

const index = ({user}: UserCardProps) => {
    return (
        <Card key={user.id} withBorder radius="md">
            <Flex direction="row" justify="center" align="center">
                <Avatar size="xl" radius={100} src={user.avatar_url} />
                {/* <ActionIcon radius="md" size={32} component="a" href={user.html_url}>
                    <IconExternalLink size={18} />
                </ActionIcon> */}
            </Flex>
            <Box my={8}>
                <Center>
                    <Title order={5}>{user.login}</Title>
                </Center>
            </Box>
            <SimpleGrid cols={2}>
                <Button component='a' href={user.starred_url}>
                    Stars
                </Button>
                <Button component='a' href={user.repos_url}>
                    Repos
                </Button>
            </SimpleGrid>
        </Card>
    )
}

export default index
