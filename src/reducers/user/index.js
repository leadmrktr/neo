

const initialState = {};


export default function user (state = initialState, action) {
  switch (action.type) {
    case `RECIEVE_USER_DETAILS`:
      return action.userData
    default :
      return state;
  }
}
