import css from './Searchbar.module.css';
//import { useState } from 'react';

export const Searchbar = ({
    searchQuery,
    onChange,
    handleSearch  
}) => {

    return (
            <header className={css.searchbar}>
                <form
                    onSubmit={handleSearch}
                    className={css.form}>
                
                <button type="submit"
                    className={css.btnSubmit }>
                    <span className="button-label">Search</span>
                </button>  
                <input
                className={css.input}
                name="searchQuery"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={onChange}
                value={searchQuery}        
                />                    
            </form>
            </header>
    )
}