import { IN, OUT } from '../Actions/action';

const sessionReducer = (state = false, action) => {
  switch (action.type) {
    case IN:
      return true;
    case OUT:
      return false;
    default:
      return state;
  }
};
export default sessionReducer;
