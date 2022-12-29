import React from 'react'
import Directory from '../../Components/Directory/directory.component';
import './homepage.styled.css'

const HomePage = () => {
  // console.log(props)
  return (
    <div className='homepage'>
       <Directory/>
       {/* {console.log({history})} */}
    </div>
  )
}

export default HomePage;
