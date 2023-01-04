import {Card, SimpleGrid, Skeleton} from '@mantine/core'
import React from 'react'

const CardLoader = () => {
    return (

        <SimpleGrid cols={5} breakpoints={[
            {maxWidth: 'md', cols: 4, spacing: 'md'},
            {maxWidth: 'sm', cols: 3, spacing: 'sm'},
            {maxWidth: 'xs', cols: 2, spacing: 'sm'},
        ]}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((item, index) => (
                <Card key={index} withBorder radius="md" >
                    <Skeleton height={50} circle mb="xl" />
                    <Skeleton height={8} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} width="70%" radius="xl" />
                </Card>
            ))}
        </SimpleGrid>

    )
}

export default CardLoader
