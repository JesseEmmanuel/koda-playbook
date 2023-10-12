import { HiSearch } from "react-icons/hi"
import PageTitle from "@/app/[locale]/_components/page-title"
import { useTranslations } from "next-intl"

export default function PageHeader() {
    const translate = useTranslations('People')
    return (
        <>
            <PageTitle title={translate('title')} />
            <div className="flex justify-between items-center border-b-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-stretch max-sm:gap-4 max-sm:w-fit">
                <div className="flex gap-8">
                    <p>
                        {translate('tab1')}
                    </p>
                    <p>
                        {translate('tab2')}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiSearch />
                        </span>
                        <input className="w-80 placeholder:text-slate-400 block bg-[#ECEDF6] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder={translate('Placeholder')} type="text" name="search" />
                    </label>
                </div>
            </div>
        </>

    )
}
