import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { oneProductApi, productsApi } from './productsApi'
import cartReducer from './cartSlice'


export const store = configureStore({
  reducer: {
    //  "carttt" ======>  useSelector
    carttt: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [oneProductApi.reducerPath]: oneProductApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(oneProductApi.middleware),
})

setupListeners(store.dispatch)