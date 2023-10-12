import React from 'react'

export default function DataPagination({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
    return (
        <div>
            <ul>
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber}>
                        <button onClick={() => onPageChange(pageNumber)} disabled={pageNumber === currentPage}>{pageNumber}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
