import { createSlice } from "@reduxjs/toolkit";

type NavItem = {
    to: string;
    text: string;
};

type NavigationList = NavItem[];

type InitialState = {
    isSideBarOpen: boolean;
    navigationList: NavigationList
    useDarkMode: boolean;
}


const INITIAL_STATE: InitialState = {
    isSideBarOpen: false,
    navigationList: [{
        to: "/",
        text: "About",
    },
    {
        to: "/blogs",
        text: "Blogs",
    },
    {
        to: "/experience",
        text: "Experience",
    },],
    useDarkMode: false
}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState: INITIAL_STATE,
    reducers: {
        setIsSideBarOpen: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        setUseDarkMode: (state, action) => {
            state.useDarkMode = action.payload;
        }
    }
})

export const { setIsSideBarOpen, setUseDarkMode } = navigationSlice.actions;

export default navigationSlice.reducer;