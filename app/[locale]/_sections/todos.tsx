"use client"

import React from 'react'
import TodoItem from '../_components/todo-item'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { addTodo } from '../_redux/root_slice'

export default function Todos() {
    const todos = useSelector((state: RootState) => state.rootReducer.todos)
    const dispatch = useDispatch();
    // console.log(todos)
    return (
        <div className='flex flex-col gap-4 px-8 w-full items-center justify-center grow'>
        </div>
    )
}
