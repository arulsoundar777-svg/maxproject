import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'


import FavSlice from './FavSlice'

export const store=configureStore(
    {
        reducer:{
            cart:CartSlice,
            fav:FavSlice,
        }
    }
)
