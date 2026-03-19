
import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice(
    {
        name:"auth",
        initialState:{
            user:null,
            isAuthenticated:false,
        },
        reducers:{
            setUser:(state,action)=>{
                state.user = action?.payload ?? {}
            }
        }
    }
)

const {setUser} = authSlice.actions

export default authSlice.reducer