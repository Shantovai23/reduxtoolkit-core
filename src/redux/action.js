import {authSlice} from './slice'
import axios from 'axios'
const {actions:slice}=authSlice;


export const loginAction=(phone)=>(dispatch)=>{
    dispatch(slice.setLogin(phone))
}
export const logoutAction=()=>(dispatch)=>{
    dispatch(slice.setLogout())
}

export const dataGet=()=>(dispatch)=>{
    const getData=async()=>{
        try {
            let response=await axios.get('https://jsonplaceholder.typicode.com/posts/1')
             dispatch(slice.setData(response.data))
        } catch (error) {
            console.log(error)
        }
    }
    getData()
}