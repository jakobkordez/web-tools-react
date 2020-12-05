import { combineReducers } from 'redux'

import { systemReducer } from './system/reducers'
import { userReducer } from './user/reducers'

export const rootReducer = combineReducers({
    system: systemReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>