import React from 'react';
import { Watch } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Watch
                height="80"
                width="80"
                radius="48"
                color="red"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;