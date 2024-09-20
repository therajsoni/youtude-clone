import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
import Feed from '../../components/Feed/Feed';
import { useState } from 'react';

const Home = ({sidebar}) => {

  const [category,setCategory] = useState(0)

  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div
    className={`container ${sidebar ? "" : "large-container"}`}
    >
    <Feed category={category} />  
    </div>
    </>
  )
}

Home.propTypes = {
  sidebar: PropTypes.bool.isRequired, // or PropTypes.oneOf(['small', 'large']) based on your use case
};

export default Home