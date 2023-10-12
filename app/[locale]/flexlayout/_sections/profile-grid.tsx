import ProfileCard from "../_components/profile-card"
import { useTranslations } from "next-intl"

export default function ProfileGrid() {
    const translate = useTranslations('People.PositionNames')
    return (
        <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
            <ProfileCard name="Henry Paulista" email="henry.p@gmail.com" position={translate('SeniorCreativeDirector')} />
            <ProfileCard name="Evan Jefferson" email="jefferson@gmail.com" position={translate('CreativeDirector')} />
            <ProfileCard name="Mark Thomson" email="mark.t@gmail.com" position={translate('SeniorUIDesigner')} />
            <ProfileCard name="Alice McKenzie" email="alice.mc@gmail.com" position={translate('SeniorCopywriter')} />
            <ProfileCard name="Jack Ro" email="" position={translate('ArtDirector')} />
            <ProfileCard name="Anastasia Groetze" email="anastasia.g@mgail.com" position={translate('SeniorUXDesigner')} />
        </div>
    )
}

