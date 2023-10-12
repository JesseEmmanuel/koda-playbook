'use client'

import { HiOutlineCalendar, HiCalculator, HiOutlineClipboardList, HiOutlineCloudUpload, HiOutlineGlobeAlt, HiOutlineLogout, HiOutlineTemplate, HiOutlineUserGroup, HiOutlineX } from 'react-icons/hi'
import { useState } from "react"
import { RootState } from "@/store"
import { useDispatch, useSelector } from "react-redux"
import { menuClosePressed } from "../_redux/root_slice"
import { useTranslations } from 'next-intl'
import NavItem from '../_components/nav-item'

export default function Menu() {
    const state = useSelector((state: RootState) => state.rootReducer)
    const dispatch = useDispatch()
    const translate = useTranslations('Sidebar')
    return (
        <div className='absolute md:relative top-0 left-0 z-10'>
            <div className={`${state.sideBarOpen ? 'flex' : 'hidden'} md:flex bg-white flex-col w-48 shadow-2xl md:shadow-none p-6 gap-20 h-screen`}>
                <div className='self-center bg-gray-300 rounded-full p-4 md:hidden'>
                    <HiOutlineX size={25} onClick={() => dispatch(menuClosePressed())} />
                </div>
                <div className='rounded-lg bg-[#577BF9] shadow-xl text-white text-center p-2'>
                    {translate('request')}
                </div>
                <ul className='flex flex-col gap-8 grow justify-center'>
                    <li className='flex items-center gap-4'>
                        <HiOutlineClipboardList size={23} />
                        <NavItem text={translate('todo')} href='/'></NavItem>
                    </li>
                    <li className='flex items-center gap-4'>
                        <HiOutlineTemplate size={23} />
                        <NavItem text={translate('ui')} href='/flexlayout'></NavItem>
                    </li>
                    <li className='flex items-center gap-4'>
                        <HiCalculator size={23} />
                        <NavItem text={translate('counter')} href='/counter'></NavItem>
                    </li>
                    <li className='flex items-center gap-4'>
                        <HiOutlineCloudUpload size={23} />
                        <NavItem text={translate('datafetch')} href='/datafetch'></NavItem>
                    </li>
                    {/* <li className='flex items-center gap-4'>
                        <HiOutlineChartBar size={23} />
                        <NavItem text={translate('statistics')} href='/statistics'></NavItem>
                    </li>
                    <li className='flex items-center gap-4'>
                        <HiOutlineDocumentText size={23} />
                        <NavItem text={translate('documents')} href='/documents'></NavItem>
                    </li>
                    <li className='flex items-center gap-4'>
                        <HiOutlineCalendar size={23} />
                        <NavItem text={translate('calendar')} href='/calendar'></NavItem>
                    </li> */}
                </ul>
                <div className='flex flex-col gap-12'>
                    <div className='flex items-center gap-4 justify-center'>
                        <HiOutlineGlobeAlt />
                        <NavItem text={translate('support')} href='/support'></NavItem>
                    </div>
                    <div className='rounded-full bg-[#577BF9] self-center text-white p-4'>
                        <HiOutlineLogout />
                    </div>
                </div>
            </div>
        </div>
    )

    // return state.sideBarOpen ? (
    //     <div className='absolute top-0 left-0 z-10'>
    //         <div className="hidden max-sm:flex bg-white flex-col w-48 shadow-2xl p-6 gap-20 h-screen">
    //             <div className='self-center bg-gray-300 rounded-full p-4'>
    //                 <HiOutlineX size={25} onClick={() => dispatch(menuClosePressed())} />
    //             </div>
    //             <Request />
    //             <NavItems />
    //             <Support />
    //         </div>
    //     </div>
    // ) : null
}
