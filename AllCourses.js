import React, {useState} from 'react';
import Course from './Course';

const AllCourses=()=>{

    const [Courses,setCourses]=useState([
        {title:"Java Course", description:"this is demo course"},
        {title:"Django Course", description:"this is demo course"},
        {title:"ReactJS Course", description:"this is demo course"},
         {title:"Angular Course", description:"this is demo course"}
    ])

    return(
            <div>
              <h1>All Courses</h1>
              <p>List of Courses are as follows</p>

               {
                   Courses.length>0
                   ? Courses.map((item) => <Course course={item} />)

                   : "No course"}
               

            </div>
    );
};

export default AllCourses;