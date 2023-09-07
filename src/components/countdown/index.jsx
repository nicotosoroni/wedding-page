import { useState } from 'react';
import { CountDownStyles } from './styles';

const CountDown = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const [dias, setDias] = useState();
  const [horas, setHoras] = useState();
  const [minutos, setMinutos] = useState();
  const [segundos, setSegundos] = useState();

  let countDown = new Date('Dec 08, 2023 20:00:00').getTime();
  let x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    setDias(Math.floor(distance / day));
    setHoras(Math.floor((distance % day) / hour));
    setMinutos(Math.floor((distance % hour) / minute));
    setSegundos(Math.floor((distance % minute) / second));
  }, second);
  // console.log(x);

  return (
    <CountDownStyles>
      <div className="contenido">
        <div className="contador">
          {/* <div className="responsivo1"> */}
          <div className="cartel">
            <div id="dias">{dias}</div>
            <div className="h3">
              <h3>Días</h3>
            </div>
          </div>
          <div className="cartel">
            <div id="horas">{horas}</div>
            <div className="h3">
              <h3>Horas</h3>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="responsivo2"> */}
          <div className="cartel">
            <div id="minutos">{minutos}</div>
            <div className="h3">
              <h3>Minutos</h3>
            </div>
          </div>
          <div className="cartel">
            <div id="segundos">{segundos}</div>
            <div className="h3">
              <h3>Segundos</h3>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <p style={{ display: 'none' }}>{x}</p>
    </CountDownStyles>
  );
};
export default CountDown;
