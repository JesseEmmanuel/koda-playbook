import CardNumber from "../_components/card-number"
import { useTranslations } from "next-intl"

export default function ProjectStatus() {
    const translate = useTranslations('People')
    return (
        <div className='flex flex-col py-6 px-14 gap-4 border-b-2'>
            <h1 className='text-2xl font-medium'>
                {translate('project')}
            </h1>
            <div className='grid gap-4 grid-cols-2 grid-rows-2 max-xl:flex max-xl:flex-wrap'>
                <CardNumber title={translate('total')} colorStyle="border-[#395BD4]" status="148" />
                <CardNumber title={translate('completed')} colorStyle="border-[#6FC416]" status="56" />
                <CardNumber title={translate('in-progress')} colorStyle="border-[#54B5FF]" status="76" />
                <CardNumber title={translate('waiting')} colorStyle="border-[#F7B501]" status="16" />
            </div>
        </div>
    )
}
