
import './Loader.css'; // Correct path to your CSS file
import LoaderImg from '../../assets/images/loader.png'; // Correct path to your image

const Loader = () => {
  return (
    <div className='loader-section'>
      <img src={LoaderImg} className="loader-image" alt="loader" />
    </div>
  );
}

export default Loader;
