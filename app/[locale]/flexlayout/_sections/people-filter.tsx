import TeamFilter from "../_components/team-filter"
import PositionFilter from "../_components/position-filter"
import OtherFilter from "../_components/other-filter"
import Sort from "../_components/sort"
import DisplayLayoutButton from "../_components/display-layout-button"

export default function PeopleFilter() {
    return (
        <div className="flex gap-12 justify-between items-center max-sm:flex max-sm:flex-col max-sm:gap-4">
            {/* Desktop View */}
            <div className="flex gap-8 max-md:hidden max-xl:hidden">
                <TeamFilter />
                <PositionFilter />
                <OtherFilter />
            </div>
            <div className="flex gap-4 max-md:hidden max-xl:hidden">
                <Sort />
            </div>
            <div className="max-md:hidden max-xl:hidden">
                <DisplayLayoutButton />
            </div>

            {/* Mobile View */}

            <div className="hidden max-xl:flex max-xl:gap-2 max-xl:self-start max-xl:w-full">
                <TeamFilter />
                <PositionFilter />
            </div>
            <div className="hidden max-sm:flex max-sm:self-stretch">
                <OtherFilter />
            </div>
        </div>
    )
}
