import { createSelector } from 'reselect';
import { LOGIN_ACTION as ACTIONS } from '../actions'
import axios from 'axios';
import { prop } from 'ramda'
import loginApi from '../../api/loginRequest';
import { Navigate } from 'react-router-dom';
// import { emailrgx } from '../../constant';


const initialState = {
    emailId: '',
    password: '',
    error: null,
    loading: false,
    userData: []
}



export const getSlice = prop('login')
export const getEmailId = createSelector(getSlice, prop('emailId'))
export const getPassword = createSelector(getSlice, prop('password'))
export const getError = createSelector(getSlice, prop ('error'))
export const getIsLoading = createSelector(getSlice, prop('loading'))
export const getUserData = createSelector(getSlice, prop('userData'))

export const loginAction = (emailId, password,) => async (dispatch) => {
    dispatch({
        type: ACTIONS.LOGIN_REQUEST
    })
    try { 
        const userData = await loginApi(); 
        if (userData.times === 2) {                                                                                                                                                                                                                                                                                                                                                         
        dispatch({      
            type: ACTIONS.LOGIN_SUCCESS,
            data: userData,
        });
        Navigate("/app/main/dashboard");
    }
    }
      catch (e) {
        dispatch({
            type: ACTIONS.LOGIN_FAILURE,
            error: e
        })
        return Navigate("/login");
    }
}

export default (state = initialState, { type, ...action }) => {
    switch (type) {
        case ACTIONS.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.data
            }
        case ACTIONS.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
    }

}