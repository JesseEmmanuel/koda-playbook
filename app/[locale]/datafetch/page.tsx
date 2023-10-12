"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './_thunks/data_actions'
import { RootState } from '@/store'
import DataPagination from './pagination'

export default function FetchDataPage() {
    const PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const dispatch = useDispatch();
    const { items, loading, error, images } = useSelector((state: RootState) => state.dataSlice)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch,])

    return (
        <div className='flex min-h-screen flex-wrap items-center gap-4 p-24'>
            {images.map((image) => {
                return (
                    <div className='flex flex-col'>
                        <img src={image.url} alt="" />
                        <p>{image.title}</p>
                    </div>
                )
            })}
            {/* <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={images.length} onPageChange={(page) => setCurrentPage(page)} /> */}
        </div>
    )
}
