

import { VILLAGE_SETUP, REPORTS, VOLUNTEER_SETUP, VOLUNTEER_SUCCESS, DISPLAY_ALERT, CLEAR_ALERT, HOUSEHOLD_SETUP, HOUSEHOLD_SUCCESS, USERDATA_SETUP } from "./actions.js"

const reducer = (state, action) => {

    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values Correctly!'
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: ''
        }
    }

    if (action.type === VILLAGE_SETUP) {
        return {
            ...state,
            isLoading: true,

            village: action.payload.vilName,
        }
    }
    if (action.type === VOLUNTEER_SETUP) {
        return {
            ...state,
            villageSelect: true,
            volunteerData: action.payload.data
        }
    }
    // if (action.type === HOUSEHOLD_SETUP) {
    //     return {
    //         ...state,
    //         houseHoldHeadName: action.payload.currentName,
    //     }
    // }
    if (action.type === VOLUNTEER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            volunteerSelect: true,
            Volunteer: action.payload.currentName,
            householdData: action.payload.Household,

        }
    }
    if (action.type === HOUSEHOLD_SETUP) {
        return {
            ...state,
            headSelect: true,
            houseHoldHeadName: action.payload.headName


        }
    }
    if (action.type === HOUSEHOLD_SUCCESS) {
        return {
            ...state,
            Result: action.payload.data


        }
    }
    if (action.type === USERDATA_SETUP) {
        return {
            ...state,

            adhar: action.payload.values.Adhar,
            checkbox: action.payload.values.checkbox

        }
    }
    if (action.type === REPORTS) {
        return {
            ...state,
            Reports: action.payload.data


        }
    }


    throw new Error(`no such action: ${action.type}`)
}
export default reducer

