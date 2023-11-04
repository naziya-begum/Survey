import React, { useReducer, useContext, createContext } from "react";
import axios from 'axios';
import {
    VILLAGE_SETUP,
    VOLUNTEER_SETUP, REPORTS, VOLUNTEER_SUCCESS, HOUSE_TYPE, HOUSEHOLD_SETUP, DISPLAY_ALERT, CLEAR_ALERT, HOUSEHOLD_SUCCESS, USERDATA_SETUP
} from './actions.js';

import reducer from './reducer.js';

const Data1 = localStorage.getItem('data')
// console.log(JSON.parse(Data1))

const initialState = {
    isLoading: false,
    village: '',
    villageSelect: false,
    volunteerData: null,
    volunteerSelect: false,
    Volunteer: '',
    householdData: null,
    houseHoldHeadName: '',
    headSelect: false,
    showAlert: false,
    housetype: '',
    housetypeselect: false,
    checkbox: '', alertType: '', alertText: '',
    Reports: JSON.parse(Data1) || null,
    Result: '',

}


const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [state, disPatch] = useReducer(reducer, initialState)


    const displayAlert = () => {
        disPatch({ type: DISPLAY_ALERT })
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            disPatch({ type: CLEAR_ALERT })
        }, 3000)

    }
    // const addUserToLocalStorage = (data) => {
    //     return localStorage.setItem('data', data)
    // }
    const VillageCheck = async (vilName) => {

        try {

            disPatch({ type: VILLAGE_SETUP, payload: { vilName } });
            const response = await axios.post('/', { vilName })
            const data = response.data;
            disPatch({ type: VOLUNTEER_SETUP, payload: { data } })

            // console.log(data)
        }
        catch (err) {
            console.log(err)
        }
        return console.log('village')
    }

    const volunteerCheck = async (currentName) => {

        try {
            // disPatch({ type: HOUSEHOLD_SETUP, payload: { currentName } });

            const response = await axios.post('/household', { currentName })

            const Household = response.data;

            disPatch({ type: VOLUNTEER_SUCCESS, payload: { Household, currentName } })

        }
        catch (err) {
            console.log(err)
        }
        return console.log(currentName)
    }


    const HouseHoldCheck = async (headName) => {

        try {
            disPatch({ type: HOUSEHOLD_SETUP, payload: { headName } });

            // const response = await axios.post('http://localhost:5000/household', { currentName })

            // const Household = response.data;

            // disPatch({ type: HOUSEHOLD_SUCCESS, payload: { Household } })

        }
        catch (err) {
            console.log(err)
        }
        return console.log(headName)
    }

    const userSend = async (values) => {

        try {
            disPatch({ type: USERDATA_SETUP, payload: { values } });

            const response = await axios.post('/user', { values })
            const data = response.data
            disPatch({ type: HOUSEHOLD_SUCCESS, payload: { data } })

            // const Household = response.data;



        }
        catch (err) {
            console.log(err)
        }
        return Report()
    }
    const houseType = async (type) => {
        try {
            return disPatch({ type: HOUSE_TYPE, payload: { type } });
        } catch (err) {
            console.log(err)
        }
    }
    const Report = async () => {
        try {
            const response = await axios.post('/Reports', 'hello')
            console.log(response)
            const data = response.data
            disPatch({ type: REPORTS, payload: { data } });
            // console.log(data)
            localStorage.setItem("data", JSON.stringify(data));
        } catch (err) {
            console.log(err)
        }
        return console.log('success')
    }




    return <AppContext.Provider value={{ ...state, houseType, displayAlert, VillageCheck, volunteerCheck, HouseHoldCheck, userSend, Report }}>
        {children}
    </AppContext.Provider>
}
const useAppContext = () => {
    return useContext(AppContext)
}
export { initialState, useAppContext, AppProvider }