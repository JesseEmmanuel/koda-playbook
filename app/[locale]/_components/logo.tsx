import React from 'react'
import { HiMiniCog, HiMiniChevronDown } from 'react-icons/hi2'

export default function Logo() {
    return (
        <div className='flex gap-2 justify-center items-center'>
            <div className='bg-[#ECEDF6] p-6 rounded-3xl'>
                <div className='bg-[#577BF9] rounded-xl p-2'>
                    <HiMiniCog color="white" size={23} />
                </div>
            </div>
            <div>
                <HiMiniChevronDown />
            </div>
        </div>
    )
}
