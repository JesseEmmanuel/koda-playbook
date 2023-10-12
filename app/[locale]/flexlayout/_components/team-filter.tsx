import { HiOutlineChevronUpDown } from 'react-icons/hi2'
import { useTranslations } from 'next-intl'

export default function TeamFilter() {
    const translate = useTranslations('People')
    return (
        <div className="flex gap-4 p-4 items-center bg-[#E8EDFF] rounded-md max-sm:grow">
            <span className='text-sm text-[#577BF9] font-semibold'>{translate('DesignTeam')}</span>
            <HiOutlineChevronUpDown color="#577BF9" size={20} />
        </div>
    )
}
