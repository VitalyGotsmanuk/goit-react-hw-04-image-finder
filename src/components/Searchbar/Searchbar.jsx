import css from './Searchbar.module.css';

export const Searchbar = ({
    searchQuery,
    onChange,
    handleSearch
    
}) => {

    // const handleOnChange = () => {
    //    console.log(searchQuery) 
    // }

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

// import { Component } from 'react';

// export class Searchbar extends Component { 

//     // handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     // console.log("Submit", event)

//     //     //const searchQuery = event.currentTarget.elements.number.value;

//     //     const searchQuery = event.target[0].value;


//     //     // this.setState({
//     //     //     searchQuery: searchQuery
//     //     // })
        
//     //     // const number = event.currentTarget.elements.number.value;

//     //     // const contact = {
//     //     //     name,
//     //     //     number //: Number.parseFloat(number), //має бути число
//     //     // };
            
//     //     this.props.fetchPictures(searchQuery)

//     //     console.log("Submit", searchQuery)

//     // }
