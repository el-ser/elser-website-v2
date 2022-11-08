import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { FaGithub, FaReadme, FaFeatherAlt, FaLinkedin, FaCode } from "react-icons/fa"

import HashnodeIcon from "../../components/hashnode-icon";

export type NavItem = {
    href: string;
    text: string;
    optionalText?: boolean;
    Icon: React.ElementType;
};

type NavigationList = NavItem[];

type InitialState = {
    isSideBarOpen: boolean;
    navigationList: NavigationList
    useDarkMode: boolean;
}


export const INITIAL_STATE: InitialState = {
    isSideBarOpen: false,
    navigationList: [{
        href: "/",
        text: "About",
        optionalText: false,
        Icon: FaReadme
    },
    {
        href: "/blogs",
        text: "Blogs",
        optionalText: false,
        Icon: FaFeatherAlt

    },
    {
        href: "/work",
        text: "Work",
        optionalText: false,
        Icon: FaCode
    },
    {
        href: "https://github.com/el-ser",
        text: "GitHub",
        optionalText: true,
        Icon: FaGithub
    },
    {
        href: "https://www.linkedin.com/in/manuel-serafin-bugarin-636554144/",
        text: "LinkedIn",
        optionalText: true,
        Icon: FaLinkedin
    },
    {
        href: "https://elser.hashnode.dev/",
        text: "Hashnode",
        optionalText: true,
        Icon: HashnodeIcon
    }
    ],
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