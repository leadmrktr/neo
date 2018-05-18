import { neoRequest, neoConstants } from 'helpers'

const recieveSubmitUserDetails = (userData) => {
  return {
    type: `RECIEVE_USER_DETAILS`,
    userData
  }
}

export const saveUserData = (data, callback) => {
  return (dispatch) => {
    dispatch(recieveSubmitUserDetails(data))
    return neoRequest.post(neoConstants.API_SAVE_USER_DETAILS, data)
      .then((res) => {
        dispatch(recieveSubmitUserDetails(res.data))
        callback()
      })
      .catch((err) => {
        console.log("something went wrong", err);
      })
  }
}
