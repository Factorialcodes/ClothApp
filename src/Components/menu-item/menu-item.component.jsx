  import React from 'react'
import { Link} from 'react-router-dom';
  // import { Link } from 'react-router-dom';
  // import { withRouter } from 'react-router-dom'
  import './menu-item.styled.css'
  // import {hatsPage} from '../../Pages/hATS/hatsPage'


  
  const MenuItem = ({title , imageUrl, size, linkUrl,history}) => {
    return (
      <>
      
        <div className={`${size} menu-item`}>
        <Link to={`/${linkUrl}`}>
            <div className='backgroundImage'>
              <img src={`${imageUrl}`} alt="#" />
              
                <div className='content'>
                    <h1 className="title"> {title.toUpperCase()} </h1>
                    <span className="subtitle">Shop Now</span> 
                </div>
              </div>
           </Link>
        </div>
     
      </>
    )
  }

  export default MenuItem; 