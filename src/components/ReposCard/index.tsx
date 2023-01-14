import {ActionIcon, Card, Group, Text, Title} from '@mantine/core'
import {IconBrandGithub} from '@tabler/icons';
import moment from 'moment';
import React from 'react'

const ReposCard = ({repoObject}: any) => {
    return (
        <Card withBorder radius="md" mb="md">
            <Card.Section withBorder p="md">
                <Group position="apart" noWrap>
                    <Title order={3}>
                        <Text lineClamp={1}>{repoObject.name}
                        </Text>
                    </Title>
                    <ActionIcon component='a' href={repoObject.html_url} target="_blank">
                        <IconBrandGithub size={15} />
                    </ActionIcon>
                </Group>
                <Text mb={5} lineClamp={2}>{repoObject.description}</Text>
                <Text size="xs" color="dimmed">Created {moment(repoObject.created_at).fromNow()} ∙ Pushed {moment(repoObject.pushed_at).fromNow()}</Text>
            </Card.Section>
            <Card.Section p="md">
                <Group spacing="sm">
                    <div>
                        <Text weight={700}>{repoObject.stargazers_count}</Text>
                        <Text size="xs" color="dimmed">Stars</Text>
                    </div>
                    <div>
                        <Text weight={700}>{repoObject.forks}</Text>
                        <Text size="xs" color="dimmed">Forks</Text>
                    </div>
                    <div>
                        <Text weight={700}>{repoObject.open_issues}</Text>
                        <Text size="xs" color="dimmed">Open Issues</Text>
                    </div>
                </Group>
            </Card.Section>
        </Card>
    )
}

export default ReposCard
