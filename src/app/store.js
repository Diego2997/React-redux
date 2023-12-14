import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../features/tasks/taskSlice";

//Si se esta diviendo la app en varios archivos y varios estados, configureStore los agrupa en un solo lugar

//2) Luego se utiliza el store como Provider
export const store = configureStore({
    reducer: {
        tasks: tasksSlice,
    },
});
