import React from 'react'
import NoResults from '../NoResults';
import UserResults from '../UserResults';
import {UserResult} from '../../types/users';

interface SearchDisplayProps {
    results: Array<UserResult>;
    totalCount: number;
    handlePaginate: (page: number) => void;
}

const SearchDisplay = ({results, totalCount, handlePaginate}: SearchDisplayProps) => {
    if (results.length === 0) {
        return (
            <NoResults />
        )
    }

    return (
        <UserResults totalPages={totalCount} items={results} handlePaginate={handlePaginate} />
    )
}

export default SearchDisplay
