import css from './Button.module.css';

export const Button = ({
    handleClick
}) => {
    return (
        <div className={ css.buttonContainer }
        >        <button
                onClick={handleClick}
                type="click"
                name="page"
                className={css.loadMore}
            >Load more</button>
        </div>    
    )
}