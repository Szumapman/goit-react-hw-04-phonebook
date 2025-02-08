import React from 'react';
import css from './Filter.module.css';

interface FilterProps {
    filter: string;
    onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<FilterProps> = ({ filter, onFilterChange }) => {
    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input
                type="text"
                name="filter"
                value={filter}
                onChange={onFilterChange}
                placeholder="Filter contacts"
            />
        </div>
    );
};
