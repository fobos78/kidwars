import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function Logout() {
  // const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      await fetch('/api/logout');
      // dispatch({ type: 'logout' });
      window.localStorage.setItem('auth', JSON.stringify(false));
      window.localStorage.setItem('userEmail', JSON.stringify(''));
      history.push('/');
    })();
  }, [history]);
  return <>До свидания !</>;
}

export default Logout;
