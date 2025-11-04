import React from 'react'
import './Header.css'
import NetflixLogo from '../../Assets/Images/NetflixLogo.png'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
      <div className='header_outer_container'>
          <div className='header_container'>
              <div className='header_left'>
                  <ul> 
                      <li><img src={NetflixLogo} alt='Netflix Logo' /></li>
                      <li>Home</li>
                      <li>TVShows</li>
                      <li>Movies</li>
                      <li>Latest</li>
                      <li>MyList</li>
                      <li>Browse by Languages</li>
                  </ul>
              </div>
              <div>
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
              </div> 
          </div>
    </div>
  )
}

export default Header