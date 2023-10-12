export interface RootState {
    sideBarOpen: boolean,
    name?: string,
    todos: Todo[]
}

interface Todo {
    id: number
    taskName: string;
    isCompleted: boolean;
}

