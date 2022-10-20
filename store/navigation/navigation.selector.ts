import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

const selectNavigationSlice = (state: RootState) => state.navigation;

export const selectIsSideBarOpen = createSelector(selectNavigationSlice, (state => state.isSideBarOpen));

export const selectNavigationList = createSelector(selectNavigationSlice, (state => state.navigationList));

export const selectUseDarkMode = createSelector(selectNavigationSlice, (state => state.useDarkMode))