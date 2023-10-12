import { HiDotsVertical, HiUserCircle } from 'react-icons/hi'

export default function ProfileCard({ name, email, position }: { name: string, email: string, position: string }) {
    return (
        <div className='flex flex-col shadow-md w-64'>
            <div className='flex flex-col gap-4 bg-white p-4 border-b-[1px] rounded-t-md'>
                <div className='self-end'>
                    <HiDotsVertical />
                </div>
                <div className='self-center'>
                    <HiUserCircle size={90} color="#577BF9" />
                </div>
                <div className='self-center'>
                    <span className='text-md font-semibold'>{name}</span>
                    <p className='text-sm text-gray-400'>{email}</p>
                </div>
            </div>
            <div className='bg-[#FBFBFD] p-4 rounded-b-md'>
                <p className='text-gray-500 uppercase text-center'>{position}</p>
            </div>
        </div>
    )
}
