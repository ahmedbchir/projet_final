import { ACTION_TYPE } from "./actions"

const initialState = {
   user:{}
}

export const combineReducers = (state=initialState, { type, payload } = {}) => {
    console.log("tessssst",type)
  switch (type) {
    case ACTION_TYPE.ADD_USER:
        console.log("inside");
        return { ...state, user: payload }
    default:
      return state
  }
}

  