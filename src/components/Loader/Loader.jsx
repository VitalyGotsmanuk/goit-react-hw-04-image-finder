import css from './Loader.module.css';

import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loader}>
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#007bff" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />

    {/* <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /> */}
    </div>
  );
};

// Loader;