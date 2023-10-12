'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { HiPlusCircle } from 'react-icons/hi2';
import Todos from './_sections/todos'
import TodoItem from './_components/todo-item';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addItem } from './_redux/root_slice';
import { useState } from 'react';

export default function Home() {
  const t = useTranslations('Index')
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state: RootState) => state.rootReducer.todos)
  const dispatch = useDispatch()
  const handleAddTodo = () => {
    dispatch(addItem(todoText));
    setTodoText('');
  }
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div className='flex flex-col gap-4 items-center'>
        <input type="text" placeholder={`What's need to be done?`} className='p-2 rounded-md w-72' value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button className='flex items-center justify-center p-2 w-72 gap-2 bg-[#577BF9] rounded-md text-white' onClick={handleAddTodo}>
          <span>
            Add to list
          </span>
          <HiPlusCircle size={25} />
        </button>
      </div>
      <div className='flex flex-col gap-4 px-8 w-full items-center justify-center grow'>
        <h1 className='font-bold text-3xl'>List of To Do's:</h1>
        {todos.map((todo) => {
          return (
            <div className='flex flex-col gap-4' key={todo.id}>
              <TodoItem id={todo.id} text={todo.taskName} completed={todo.isCompleted} />
            </div>
          )
        })}
      </div>
    </main>
  )
}
