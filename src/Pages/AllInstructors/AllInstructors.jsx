import React from 'react';
import useInstructors from '../../hooks/useInstructors';
import SecondaryBanner from '../../Shared/SecondaryBanner/SecondaryBanner';
import InstructorCard from '../../componants/InstructorCard/InstructorCard';

const AllInstructors = () => {
  const [instructors, refetch] = useInstructors();
  console.log(instructors);
    return (
        <div>
          <SecondaryBanner title={"All Instructors"}/>
          <div className='grid md:grid-cols-3 gap-5 my-10'>
            {
              instructors?.map(instructor => <InstructorCard instructor={instructor} />)
            }
          </div>
            
        </div>
    );
};

export default AllInstructors;