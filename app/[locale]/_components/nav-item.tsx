import Link from 'next/link'

export default function NavItem({ text, href }: { text: string, href: string }) {
    return (
        <Link href={href} >{text}</Link>
    )
}
