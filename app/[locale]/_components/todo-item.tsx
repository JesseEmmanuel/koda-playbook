"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { itemChecked } from '../_redux/root_slice'


export default function TodoItem({ id, text, completed }: { id: number, text: string, completed: boolean }) {
    const state = useSelector((state: RootState) => state.rootReducer.todos)
    const dispatch = useDispatch()
    return (
        <div className='flex p-4 w-[700px] rounded-md shadow-md justify-between items-center bg-white'>
            <div className='flex gap-4 items-center'>
                <input type="checkbox" checked={completed} onChange={() => dispatch(itemChecked(id))} />
                <h1 className='font-bold text-xl' style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</h1>
            </div>
            <span style={{ color: completed ? 'green' : 'red' }}>
                {completed ? 'Done' : 'Ongoing'}
            </span>
        </div>
    )
}
