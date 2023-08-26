import { addUser, deleteUser } from "../reducers/userSlice"
import { store } from "../store"
 const {dispatch}=store
 export const sendaction=(data)=>{
dispatch(addUser(data))
}
export const deleteaction=(data)=>{
    dispatch(deleteUser(data))
}