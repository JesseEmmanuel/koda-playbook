import { HiOutlineChevronUpDown } from "react-icons/hi2"
import { useTranslations } from "next-intl"

export default function PositionFilter() {
    const translate = useTranslations('People')
    return (
        <div className='flex gap-6 bg-white rounded-md shadow-md p-4 items-center max-sm:grow max-sm:justify-between'>
            <span className="text-sm text-gray-500">{translate('Position')}</span>
            <HiOutlineChevronUpDown size={20} />
        </div>
    )
}
