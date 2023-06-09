import React from 'react';

const DashboardHeader = ({heading}) => {
    return (
        <div>
            <div className="divider w-1/2"></div>
            <div className="flex items-center justify-between">
                <h3 className='text-2xl font-semibold'>{heading}</h3>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default DashboardHeader;