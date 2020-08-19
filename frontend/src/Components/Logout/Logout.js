import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions';
import { clearScore, lockAccess } from '../../redux/actions';

function Logout() {
  const score = useSelector((state) => state.game.score);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      await fetch('/api/logout');
      dispatch(logout());
      window.localStorage.setItem('auth', JSON.stringify(false));
      window.localStorage.setItem('userEmail', JSON.stringify(''));
      window.localStorage.setItem('accessFlag', JSON.stringify(false));
      window.localStorage.setItem('date', JSON.stringify('00.00.0000'));
      dispatch(clearScore());
      dispatch(lockAccess());
      history.push('/');
    })();
  }, [history, dispatch]);
  return <>До свидания !</>;
}

export default Logout;
