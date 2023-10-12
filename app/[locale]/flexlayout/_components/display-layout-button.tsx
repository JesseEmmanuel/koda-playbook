import { HiOutlineViewGrid, HiOutlineMenu } from 'react-icons/hi'

export default function DisplayLayoutButton() {
    return (
        <div className='flex p-2 bg-[#CBCBDE] rounded-lg items-center gap-6'>
            <div className='py-2 px-4 rounded-lg shadow-sm bg-[#F6F6FA]'>
                <HiOutlineViewGrid />
            </div>
            <HiOutlineMenu size={25} color="#9491B0" />
        </div>
    )
}

