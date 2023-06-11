import React from 'react';
import useUsers from '../../hooks/useUsers';
import useInstructors from '../../hooks/useInstructors';

const AllInstructors = () => {
  const [instructors, refetch] = useInstructors();
  console.log(instructors);
    return (
        <div>
            
        </div>
    );
};

export default AllInstructors;