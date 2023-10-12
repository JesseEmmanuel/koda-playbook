import PageHeader from "./_sections/page-header"
import DesignTeam from "./_sections/design-team"
import Progress from "./_sections/progress"
import ProjectStatus from "./_sections/project-status"
import Messages from "./_sections/messages"
import PeopleFilter from "./_sections/people-filter"
import ProfileGrid from "./_sections/profile-grid"

export default function PeoplePage() {
    return (
        <div className="flex max-md:flex-col max-lg:flex-col">
            <div className="flex flex-col gap-8 grow w-5/6 max-sm:w-screen p-4 max-sm:px-6 overflow-y-scroll max-md:overflow-y-auto max-lg:overflow-y-auto h-[90vh] max-md:h-full">
                <PageHeader />
                <PeopleFilter />
                <ProfileGrid />
            </div>
            <div className="flex flex-col bg-white w-2/6 max-md:w-full max-lg:w-full overflow-y-auto h-[90vh] max-md:hidden max-lg:hidden">
                <DesignTeam />
                <Progress />
                <ProjectStatus />
                <Messages />
            </div>
        </div>
    )
}

