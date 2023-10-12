import { HiSearch } from 'react-icons/hi'

export default function SearchField() {
    return (
        <div>
            <label className="relative block max-sm:hidden">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiSearch />
                </span>
                <input className="w-80 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" name="search" />
            </label>
        </div>
    )
}
