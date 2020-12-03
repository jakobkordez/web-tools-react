import { SystemActionTypes, SystemState, UPDATE_SESSION } from './types'

const initialState: SystemState = {}

export function systemReducer(
    state = initialState,
    action: SystemActionTypes
): SystemState {
    switch (action.type) {
        case UPDATE_SESSION: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}