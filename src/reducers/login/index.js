

const initialState = {
  isLoggedIn: false
};

export default function wlTables (tableType) {
  return function (state=initialState,action) {
    switch (action.type) {
      case `RECIEVE_USER_LOGGING_IN`:
        return Object.assign({},state,{
          "isLoggedIn" : action.isLogin
        });
      default:
        return state;
    }
  };
}
