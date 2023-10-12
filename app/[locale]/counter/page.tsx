"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store';
import { incrementButtonPressed, decrementButtonPressed, resetButtonPressed } from './_redux/root_slice';
import { useTranslations } from 'next-intl';
import { HiArrowPath } from 'react-icons/hi2'


export default function CounterPage() {
    const translate = useTranslations('Counter')
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.counterSlice)

    return (
        <div className='flex min-h-screen flex-col items-center gap-4 p-24'>
            <h1 className='text-8xl'>{state.count}</h1>
            <div className='flex gap-4'>
                <button className='py-2 px-4 bg-indigo-700 text-white rounded-md' onClick={() => dispatch(incrementButtonPressed(state.count))}>{translate('increment')} (+)</button>
                <button className='py-2 px-4 bg-gray-300 text-black rounded-md' onClick={() => dispatch(decrementButtonPressed(state.count))}>{translate('decrement')} (-)</button>
            </div>
            <div className='flex w-72'>
                <button className='flex py-2 px-4 bg-green-200 text-green-700 font-bold rounded-md grow items-center justify-center gap-2' onClick={() => dispatch(resetButtonPressed(state.count))}>
                    Reset
                    <span>
                        <HiArrowPath />
                    </span>
                </button>
            </div>
        </div>
    )
}
