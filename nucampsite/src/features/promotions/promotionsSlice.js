import { createSlice } from '@reduxjs/toolkit';
import {PROMOTIONS} from '../../app/shared/PROMOTIONS';

const initialState ={
    promotionArray:PROMOTIONS
};

const promotionsSlice = createSlice({
    name:'promotions',
    initialState
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) =>{
    return state.promotions.promotionArray.find((promotion) => promotion.featured);
};

