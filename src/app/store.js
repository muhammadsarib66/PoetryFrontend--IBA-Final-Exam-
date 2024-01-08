import { configureStore } from "@reduxjs/toolkit";
// import orderCake from "../features/cake/cakeSlice";
import Slicer from '../features/Slicer'
export const store = configureStore({
   reducer : {

       show : Slicer
   }
});

