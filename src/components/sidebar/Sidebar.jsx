import './Sidebar.css'
import PropTypes from 'prop-types';
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobile.png'
import sports from '../../assets/sports.png'
import entertaiment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music1.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({ sidebar , category , setCategory }) => {
  return (
    <div
    className={`sidebar ${sidebar ? "" : "small-sidebar"}`}
    >
    <div className='shortcut-links'>
    

   

    <div
    className='side-link' 
    onClick={()=>setCategory(0)}
    >
    <img
    src={home}
     alt='home.png'
    />
    <p>Home</p>
    </div>

    <div
    className='side-link' 
    onClick={()=>setCategory(20)}
    >
    <img
    src={game_icon}
     alt='home.png'
    />
    <p>Game</p>
    </div>

    <div
    className='side-link' 
    onClick={()=>setCategory(2)}
    >
    <img
    src={automobiles}
     alt='home.png'
    />
    <p>Automobiles</p>
    </div>
    <div
    className='side-link' 
    onClick={()=>setCategory(17)}
    >
    <img
    src={sports}
     alt='home.png'
    />
    <p>Sports</p>
    </div>
    <div
    className='side-link' 
    onClick={()=>setCategory(24)}
    >
    <img
    src={entertaiment}
     alt='home.png'
    />
    <p>Entertaiment</p>
    </div>
    <div
    className='side-link'
    >
    <img
    src={tech}
     alt='home.png'
    />
    <p>Technology</p>
    </div>
    <div
    className='side-link'
    >
    <img
    src={music}
     alt='home.png'
    />
    <p>Music</p>
    </div>

    <div
    className='side-link' 
    onClick={()=>setCategory(28)}
    >
    <img
    src={blogs}
     alt='home.png'
    />
    <p>Blogs</p>
    </div>

    <div
    className='side-link' 
    onClick={()=>setCategory(10)}
    >
    <img
    src={news}
     alt='home.png'
    />
    <p>News</p>
    </div>
    </div>
    <hr/>
    <div
    className='subscribe-list'
    >
      <h3>
        Subscribed
      </h3>

      <div
      className='side-link'
      >
      <img src={jack} />
      <p>PewDiePie</p>
      </div>

      <div
      className='side-link' 
      onClick={()=>setCategory(22)}
      >
      <img src={simon} />
      <p>Mr Beast</p>
      </div>

      <div
      className='side-link' 
      onClick={()=>setCategory(25)}
      >
      <img src={tom} />
      <p>z</p>
      </div>
      <div
      className='side-link' 
      onClick={()=>setCategory(22)}
      >
      <img src={megan} />
      <p>Pew</p>
      </div>
      <div
      className='side-link'
      >
      <img src={cameron} />
      <p>dily</p>
      </div>

    

    </div>
    </div>
  )
}
Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  setCategory: PropTypes.func.isRequired,
};


export default Sidebar