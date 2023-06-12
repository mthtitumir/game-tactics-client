import React from 'react';
import SectionTitleButton from '../SectionTitleButton/SectionTitleButton';

const SectionHeader = ({heading, subHeading}) => {
    return (
        <div>
            <SectionTitleButton text={"Instructors"} />
            <h3 className='text-center my-3 text-3xl font-semibold'>{heading}</h3>
            <p className='font-semibold text-center'>{subHeading}</p>
            
        </div>
    );
};

export default SectionHeader;