import { useRouter } from "next/router"

const LanguageSwitcher = () => {

    const router = useRouter();

    const toggleLanguage = () => {
        const currentLang = router.locale;
        const targetLang = currentLang === 'en' ? 'ja' : 'en';

        router.push('/', undefined, { locale: targetLang });
    }

    return (
        <button onClick={toggleLanguage} className="p-4 rounded-lg bg-gray-500 text-gray-800">
            English/Japanese
        </button>
    )
}

export default LanguageSwitcher