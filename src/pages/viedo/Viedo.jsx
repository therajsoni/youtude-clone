import PlayViedo from '../../components/playViedo/playViedo';
import Recommended from '../../components/Recommended/Recommended';
import './Viedo.css';


const Viedo = () => {
  return (
    <div
    className='play-container'
    >
    <PlayViedo/>
    <Recommended/>
    </div>
  )
}

export default Viedo