import React from 'react'
import { useTranslations } from 'next-intl'

export default function DesignTeam() {
    const translate = useTranslations('People')
    return (
        <div className='flex flex-col gap-2 p-14 border-b-2'>
            <p className='text-xs text-gray-400'>{translate('selected')}</p>
            <h1 className="text-2xl font-medium">
                {translate('DesignTeam')}
            </h1>
        </div>
    )
}
