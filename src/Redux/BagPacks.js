import { createSlice } from "@reduxjs/toolkit";

import One from '../assets/MostPopularOne.webp'
import Two from '../assets/MostPopularTwo.webp'
import Three from '../assets/MostPopularThree.webp'
import Four from '../assets/MostPopularFour.webp'
import Five from '../assets/MostPopularFive.webp'
import Six from '../assets/MostPopularSix.webp'

const BagPacks = createSlice({
    name: "BagPacks",
    initialState: {
        LuggageArr: [['Size', 'Cabin', 'Medium', 'Large'], ['Type', 'Hard Luggage', 'Soft Luggage'], ['Features', 'TSA Lock', 'Expander', 'Double Wheels', 'Garment Suiter', 'Eco-freindly'], ['Travel Duration', 'Weekender Trip', '3-4  days', 'Long trip'], ['Traveller Type', 'Family', 'Kids', 'For Her']],
        BackPacksArr: [['Type', 'Kids express', 'Back to school', 'Back to college', 'Early jobber', 'Executive'], ['Category', 'Casual', 'Laptop', 'Weekender/Trekking'], ['Features', 'Rain cover', 'USB charge port', 'Detachable laptop compartment', '15”+ Laptop compatible', 'Gadget Pouch', 'Eco-friendly']],
        DuffelsArr: [['Category', 'Wheeled Duffle', 'Weekender Duffle']],
        BrowseArr: [['Kids', 'Luggage', 'Backpack'], ['Women', 'Luggage', 'Backpack', 'Duffle'], ['Business', 'Rolling Tote', 'Briefcase', 'Sling Bags'], ['Accessories', 'Lock', 'Pillow', 'Small Bags', 'Foldable', 'Eyeshades']],
        DiscoverArr: [['Discover', 'Chasing Colors of Travel', 'Not So Solo Solo Travel', 'Ready Set', 'Travel Buddy', 'Where The Funs At', 'Study Aboard At', 'Travel With Friends', 'little Explorers'], ['About American Tourister', 'Brand Story', '#ATCare']],
        MostPopular: [
            {
                name: "FORNAX",
                price: 8100,
                oldPrice: 10800,
                _id: 1,
                image: One
            },
            {
                name: "FORNAX",
                price: 10100,
                oldPrice: 12800,
                _id: 2,
                image: One
            },
            {
                name: "FORNAX",
                price: 6100,
                oldPrice: 8800,
                _id: 3,
                image: One
            },
            {
                name: "AMERICAN",
                price: 7100,
                oldPrice: 9800,
                _id: 4,
                image: Two
            },
            {
                name: "PLAYBLUE",
                price: 7500,
                oldPrice: 9000,
                _id: 5,
                image: Three
            },
            {
                name: "ROLLIO",
                price: 8100,
                oldPrice: 10800,
                _id: 6,
                image: Four
            },
            {
                name: "ROLLIO",
                price: 6100,
                oldPrice: 4800,
                _id: 7,
                image: Five
            },
            {
                name: "ROLLIO",
                price: 4500,
                oldPrice: 5900,
                _id: 8,
                image: Six
            },
        ],
        CartArr: [],
        CheckArr: [],
        TotalSum: null
    },
    reducers: {
        CartAdd: (state, action) => {
            return {
                ...state,
                CartArr: !state.CheckArr.includes(action.payload._id) ? [...state.CartArr, action.payload] : [...state.CartArr],
                TotalSum: !state.CheckArr.includes(action.payload._id) ? state.TotalSum + Number(action.payload.price) : state.TotalSum,
            }
        },
        CheckId: (state, action) => {
            return {
                ...state,
                CheckArr: !state.CheckArr.includes(action.payload) ? [...state.CheckArr, action.payload] : [...state.CheckArr],
            }
        },
        RemoveCart: (state, action) => {
            return {
                ...state,
                CartArr: state.CartArr.filter((item) => item._id !== action.payload._id),
                CheckArr: state.CheckArr.filter((item) => item !== action.payload._id),
                TotalSum: !state.CheckArr.includes(action.payload) ? state.TotalSum - Number(action.payload.price) : state.TotalSum,
            }
        }

    }
})

export const { CartAdd, CheckId, RemoveCart } = BagPacks.actions;
export default BagPacks.reducer;