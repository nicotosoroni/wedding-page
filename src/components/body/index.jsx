import CountDown from '../countdown';
import deco1 from '../../assets/deco/deco1.png';
import deco2 from '../../assets/deco/deco2.png';
import deco3 from '../../assets/deco/deco3.png';
import deco4 from '../../assets/deco/deco4.png';
import deco5 from '../../assets/deco/deco5.png';
import deco6 from '../../assets/deco/deco6.png';
import { StyledBody } from './styles';
import Navbar from '../navbar';

const Body = () => {
  return (
    <StyledBody>
      <Navbar />
      <div className="titleImg">
        <img src={deco1} alt="photo" />
      </div>

      <div className="bodyTitle">
        <span>Micaela y Mauricio</span>
      </div>
      <div className="titleImg">
        <img className="decoImg" src={deco2} alt="photo" />
      </div>
      <hr />
      <h2>8 de Diciembre, 2023</h2>
      <hr />
      <div>
        <img className="decoImg" src={deco3} alt="photo" />
      </div>
      <h4>San Luis, Argentina</h4>
      <div>
        <img className="decoImg" src={deco4} alt="photo" />
      </div>
      <h3>#micaymauri</h3>
      <div>
        <img className="decoImg" src={deco5} alt="photo" />
      </div>
      <hr />
      <CountDown />
      <hr />
      <div>
        <img className="decoImg" src={deco6} alt="photo" />
      </div>
    </StyledBody>
  );
};
export default Body;
