interface CardProps {
    title: string;
    colorStyle: string;
    status: string;
}
export default function CardNumber({ title, colorStyle, status }: CardProps) {
    // console.log('here', color)
    return (
        <div className='flex flex-col p-4 bg-[#F6F6FA] gap-2 rounded-lg'>
            <span className='text-xs text-gray-500'>{title}</span>
            <div className={`text-2xl font-medium pl-2 border-l-4 ${colorStyle}`}>
                {status}
            </div>
        </div>
    );
}
