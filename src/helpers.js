import { useSelector } from 'react-redux';
import { sessionIn } from './Redux/Session/Actions/action';
import { setUser } from './Redux/CurrentUser/Action/action';
import index from './Users/index';

const LoginWithCredentials = async (username, password) => {
  const url = 'https://bodor-human-ressources-backend.herokuapp.com/v1/session';
  const data = {
    username,
    password,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),

  });
  return response.json();
};

export const populateStorage = (username, password) => {
  const credentials = { username, password };
  localStorage.setItem('credentials', JSON.stringify(credentials));
};

export const fetchStorage = () => (
  JSON.parse(localStorage.getItem('credentials'))
);
export const checkSession = async (credentials, dispatch) => {
  const { username, password } = credentials;
  const response = await LoginWithCredentials(username, password);
  const { status } = response;
  if (status === 'SUCCESS') {
    const { data } = response;
    dispatch(sessionIn());
    dispatch(setUser(data));
  }
};
export const getPhotoProfileFIle = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const { id } = currentUser;
  let profile = 'man.png';
  const file = index[id];
  if (file) {
    profile = file;
  }
  return profile;
};
export default LoginWithCredentials;
