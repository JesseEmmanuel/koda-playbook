import React from 'react'
import { HiChatAlt } from 'react-icons/hi'
import { useTranslations } from 'next-intl'

export default function Messages() {
    const translate = useTranslations('People')
    return (
        <div className='flex bg-[#F5F7FF] m-12 p-6 gap-4 justify-center'>
            <div className='bg-[#577BF9] p-4 rounded-md'>
                <HiChatAlt color="#FFFFFF" />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-xs text-gray-400'>{translate('declaration-center')}</p>
                <span className='text-sm font-semibold'>{translate('internal-message')}</span>
            </div>
        </div>
    )
}
