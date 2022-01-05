import { createStore } from 'redux'
import { genetateColorReducer } from './reducers/indes'

const store = createStore(genetateColorReducer)

export default store
