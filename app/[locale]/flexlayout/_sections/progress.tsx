import { HiCog } from 'react-icons/hi'

export default function Progress() {
    return (
        <div className='flex flex-col p-6'>
            <div className='self-end'>
                <HiCog size={25} color="#757296" />
            </div>
            <img className='self-center' src={'/images/timelog.png'} width={300} />
        </div>
    )
}
