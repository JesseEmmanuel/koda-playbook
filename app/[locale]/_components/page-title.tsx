import React from 'react'

export default function PageTitle({ title }: { title: string }) {
    return (
        <div>
            <h1 className="text-4xl font-medium">
                {title}
            </h1>
        </div>
    )
}
