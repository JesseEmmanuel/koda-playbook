import { PayloadAction, createSlice, } from "@reduxjs/toolkit"
import { RootState } from "./root_state"

const initialState: RootState = {
    sideBarOpen: false,
    todos: []
}

export const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        hamburgerPressed: (state: RootState) => {
            return {
                ...state,
                sideBarOpen: true
            }
        },
        menuClosePressed: (state: RootState) => {
            return {
                ...state,
                sideBarOpen: false
            }
        },

        addItem: (state: RootState, action: PayloadAction<string>) => {
            const todos = [...state.todos]
            todos.push({
                id: state.todos.length + 1,
                taskName: action.payload,
                isCompleted: false
            })
            return {
                ...state,
                todos: todos
            }
        },
        itemChecked: (state: RootState, action: PayloadAction<number>) => {
            const todos = [...state.todos]
            const index = state.todos.findIndex((todo) => todo.id == action.payload)
            todos[index] = {
                ...todos[index],
                isCompleted: !todos[index].isCompleted
            }
            return {
                ...state,
                todos: todos
            }
        }
    }
})

export const { hamburgerPressed, menuClosePressed, addItem, itemChecked } = rootSlice.actions

export default rootSlice.reducer