import React from 'react';

const SectionTitleButton = ({text}) => {
    return (
        <div className='flex justify-center'>
            <button className='py-2 px-3 text-cyan-700 font-semibold text-md shadow-lg rounded-lg uppercase drop-shadow-lg'>{text}</button>
            <div>
                
            </div>
        </div>
    );
};

export default SectionTitleButton;