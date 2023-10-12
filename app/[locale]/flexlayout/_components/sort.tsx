import { HiOutlineChevronDown } from "react-icons/hi2"
import { useTranslations } from "next-intl"

export default function Sort() {
    const translate = useTranslations('People')
    return (
        <div className='flex gap-4 p-4'>
            <p className='text-sm text-gray-500'>{translate('SortBy')}:</p>
            <span className='text-sm'>{translate('tab1')}</span>
            <HiOutlineChevronDown />
        </div>
    )
}
