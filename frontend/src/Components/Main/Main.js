import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  fadeIn, bounce, flash, flip, jello, zoomInUp,
} from 'react-animations';

import './Main.css';// background: linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ), url('/img/back/home-back.jpg');

function Main() {
  // const Bounce1 = styled.div`animation: 10s ${keyframes`${flip}`}`;
  const Bounce = styled.div`animation: 3s ${keyframes`${zoomInUp}`}`;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/user');
      const result = await response.json();
      console.log(result);
      setUsers(result);
    })();
  }, []);

  return (
    <>
      <div className="Main" style={{ backgroundImage: 'linear-gradient( rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5) ), url(/img/6.gif)' }}>
        {/* <Bounce1> */}
        <Bounce>
          {/* <p className="kid">KID WARS</p> */}
          {' '}
          <div style={{ backgroundImage: 'url(/img/2.png)' }} className="imgLogo" />
        </Bounce>
        {/* </Bounce1> */}
        <div>
          {/* <h2>
            Вы хотите чтоб Ваш ребенок развивался, а не только играл в игры?
            <br />
            Значит вы нашли то, что так давно искали
          </h2> */}
        </div>
        <div className="best">
          {/* <h2>Лучшие ученики:</h2>
          <div>
            {users.map((user) => (
              <>
                <div>
                  {' '}
                  {user.score}
                  {' '}
                  -
                  {' '}
                  {user.kidName}
                  {' '}

                </div>
              </>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Main;
