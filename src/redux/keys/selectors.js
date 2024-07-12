import { createSelector } from "reselect";

export const selectLoading = (state) => state.keys.loading;

export const selectFilters = (state) => state.keys.filters;

export const selectAllKeys = (state) => state.keys.allKeys;

export const selectKeysByMaker = createSelector(
  [selectAllKeys],
  (selectAllKeys) => {
    const uniqueMakers = [...new Set(selectAllKeys.map((item) => item.Maker))];
    return uniqueMakers;
  }
);

export const selectModelsArr = (state) => state.keys.filters.ModelsArr;

export const selectYearsArr = (state) => state.keys.filters.YearsArr;
