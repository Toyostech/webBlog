import React from 'react'
import Heropage from '../heroSection/Heropage'
import Courses from '../course/Courses'
import Post from '../post/Post'
import TutorCom from '../tutorCom/TutorCom'
import Total from '../totalstudent/Total'
import Description from '../descript/Description'


const HomePage = () => {
    return (
        <div>
           
            <Heropage />

            <Courses />
            <Post />




            <TutorCom />
            <Total />

            <Description />

        </div>
    )
}

export default HomePage
