import {createStore} from 'redux'
import { allReducers } from '../reducers'

export const myStore = createStore(allReducers)