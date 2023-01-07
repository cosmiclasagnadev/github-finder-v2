import {Card, SimpleGrid, Pagination, Box} from '@mantine/core'
import React from 'react'
import {UserResult} from '../../types/users'
import UserCard from '../UserCard';

interface Props {
    items: Array<UserResult>;
    totalPages: number;
    handlePaginate: (page: number) => void;
}

const UserResults = ({items, totalPages, handlePaginate}: Props) => {
    const paginate = (page: number) => {
        handlePaginate(page);
    }
    return (
        <>
            <Box mb={16}>
                <Pagination total={totalPages} onChange={paginate} />
            </Box>
            <SimpleGrid cols={5} breakpoints={[
                {maxWidth: 'md', cols: 4, spacing: 'md'},
                {maxWidth: 'sm', cols: 3, spacing: 'sm'},
                {maxWidth: 'xs', cols: 2, spacing: 'sm'},
            ]}>
                {items.map((user: UserResult) => (
                    <div key={user.id}>
                        <UserCard user={user} />
                    </div>
                ))}
            </SimpleGrid>
        </>
    )
}

export default UserResults
