import { configureStore } from "@reduxjs/toolkit";
import BagPacks from "./BagPacks";

const store = configureStore({
    reducer: {
        BagPacks: BagPacks
    }
})

export default store;