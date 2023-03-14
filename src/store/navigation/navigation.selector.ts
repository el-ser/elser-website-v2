import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

const selectNavigationSlice = (state: RootState) => state.navigation;

export const selectIsSideBarOpen = createSelector(selectNavigationSlice, (state => state.isSideBarOpen));

export const selectNavigationList = createSelector(selectNavigationSlice, (state => state.navigationList));

export const selectExternalLinks = createSelector(selectNavigationList, (state =>
    state.filter((link) => link.optionalText)))

export const selectInternalLinks = createSelector(selectNavigationList, (state => state.filter((link) => !link.optionalText)))

export const selectUseDarkMode = createSelector(selectNavigationSlice, (state => state.useDarkMode))
