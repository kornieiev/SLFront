export const selectLoading = (state) => state.keys.loading;
// console.log("🚀 ~ selectLoading:", selectLoading);

export const selectFilter = (state) => state.keys.filter;
// console.log("🚀 ~ selectFilter:", selectFilter);

export const selectAllTasks = (state) => state.keys.allKeys;
// console.log("🚀 ~ selectAllTasks:", selectAllTasks);

export const selectKeysByMaker = (state) => state.keys.keysByMaker;
// console.log("🚀 ~ selectKeysByMaker:", selectKeysByMaker);
