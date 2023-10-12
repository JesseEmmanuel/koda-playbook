'use client'

// import SearchField from './search-field'
import Date from '../_components/date'
import Notifications from '../_components/notifications'
// import User from '../_components/user'
import SearchField from '../_components/search-field'
import { HiOutlineMenu } from 'react-icons/hi'
import { HiUserCircle } from 'react-icons/hi2'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next-intl/client'
import { useTransition } from 'react'
import { useDispatch } from 'react-redux'
import { hamburgerPressed } from '../_redux/root_slice'

export default function Header() {
    const translate = useTranslations('Index');
    const router = useRouter();
    const pathName = usePathname();
    const [isPending, startTransition] = useTransition();
    const locale = useLocale()
    const dispatch = useDispatch()

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value;
        startTransition(() => {
            router.replace(pathName, { locale: lang });
        })
    }
    // const { locale } = useRouter();
    return (
        <div className='flex gap-6 max-w-full justify-around md:justify-between items-center p-6 shadow-black'>
            <div className='hidden max-md:flex'>
                <HiOutlineMenu onClick={() => dispatch(hamburgerPressed())} />
            </div>
            <SearchField />
            <div className='flex gap-8 items-center'>
                <select name="language" id="language" defaultValue={locale} onChange={handleSelect} className='text-[#577BF9] outline-none'>
                    {['en', 'ja'].map((cur) => (
                        <option key={cur} value={cur}>
                            {translate('locale', { locale: cur })}
                        </option>
                    ))}
                </select>
                <Date />
                <Notifications />
                <HiUserCircle color="#577BF9" size={50} />
                {/* <LanguageSwitcher /> */}
            </div>
        </div>
    )
}
