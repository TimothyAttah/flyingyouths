import { USER_TYPE } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(userData);
    dispatch({
      type: USER_TYPE.REGISTER_USER,
      payload: data,
    });
    console.log('User Data:', data.data);

    let str = data.data.courseToLearn;

    let newLink = str.replace(/\s+/g, '-').toLowerCase();




    // str = str.replace(/\s+/g, '-').toLowerCase();

    toast.success(data.msg);
    localStorage.setItem('user', JSON.stringify(data.data));
    window.location.href = `/payment/${newLink}`;

  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userData);
    dispatch({
      type: USER_TYPE.LOGIN_USER,
      payload: data,
    });
    console.log('User Data:', data.data);

    localStorage.setItem('jwt', data.token);
    localStorage.setItem('user', JSON.stringify(data.data));

    toast.success(data.msg);
    window.location.href = '/dashboard';
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
