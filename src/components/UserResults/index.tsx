import {Card, SimpleGrid, Title} from '@mantine/core'
import React from 'react'
import {UserResult} from '../../types/users'
import UserCard from '../UserCard';

interface Props {
    items: Array<UserResult>;
}

const UserResults = ({items}: Props) => {
    return (
        <SimpleGrid cols={4} breakpoints={[
            {maxWidth: 'md', cols: 3, spacing: 'md'},
            {maxWidth: 'sm', cols: 2, spacing: 'sm'},
            {maxWidth: 'xs', cols: 1, spacing: 'sm'},
        ]}>
            {items.map((user: UserResult) => (
                <div key={user.id}>
                    <UserCard user={user} />
                </div>
            ))}
        </SimpleGrid>
    )
}

export default UserResults
