import React from 'react'
import NoResults from '../NoResults';
import UserResults from '../UserResults';
import {UserResult} from '../../types/users';

interface SearchDisplayProps {
    results: Array<UserResult>;
}

const SearchDisplay = ({results}: SearchDisplayProps) => {
    if (results.length === 0) {
        return (
            <NoResults />
        )
    }

    return (
        <UserResults items={results} />
    )
}

export default SearchDisplay
