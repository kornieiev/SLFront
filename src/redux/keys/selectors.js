import { createSelector } from "reselect";

export const selectLoading = (state) => state.keys.loading;

export const selectAllKeys = (state) => state.keys.allKeys;

export const selectFilters = (state) => state.keys.filters;

export const selectMakersArr = createSelector(
  [selectAllKeys],
  (selectAllKeys) => {
    const uniqueMakers = [...new Set(selectAllKeys.map((item) => item.Maker))];
    return uniqueMakers;
  }
);

export const selectModelsArr = (state) => state.keys.filters.ModelsArr;

export const selectYearsArr = (state) => state.keys.filters.YearsArr;

export const selectTypeOfKeyArr = (state) => state.keys.filters.TypeOfKeyArr;

export const selectkeysForRender = (state) => state.keys.keysForRender;

export const selectTypesOfIgnition = createSelector(
  [selectAllKeys],
  (selectAllKeys) => {
    const uniqueIgnitionTypes = [
      ...new Set(selectAllKeys.map((item) => item["Type of Ignition"])),
    ];
    return uniqueIgnitionTypes;
  }
);

export const selectTypesOfKey = createSelector(
  [selectAllKeys],
  (selectAllKeys) => {
    const uniqueTypesOfKey = [
      ...new Set(selectAllKeys.map((item) => item["Type of Key"])),
    ];
    return uniqueTypesOfKey;
  }
);
