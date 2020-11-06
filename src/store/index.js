import {exampleReducer} from './reducers/exampleReducer'
import AsyncStorage from '@react-native-community/async-storage'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
  exampleReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['exampleReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export const persistedStore = persistStore(store)
