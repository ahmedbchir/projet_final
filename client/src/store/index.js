import { ACTION_TYPE } from "./actions"
import { addUserApi } from "./userApi"

export const AddUser = (user) => async dispatch => {
    
    await dispatch ({
        type: ACTION_TYPE.ADD_USER,
        payload : addUserApi(user)
    })
}