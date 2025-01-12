import PropTypes from 'prop-types';
import { Icons } from '../../../assets/Icons';
const CustomPrevArrow = ({onClick}) => {
  return (
    <button className='custom-prev-arrow bg-black06 flex items-center justify-center' onClick={onClick}>
      <img src={Icons.ArrowLeft} alt=''/>
    </button>
  )
}
CustomPrevArrow.propTypes = {
    onClick:PropTypes.func,
}
export default CustomPrevArrow;
