'use client'
import Link from "next/link"
import { Toggle } from "@/components/ui/toggle"
import { usePathname } from 'next/navigation'


export default function PageHeader() {

    const pathname = usePathname();
    

    return (
        <nav className="flex flex-row items-center h-16 px-4 border-b border-gray-200/50 backdrop-filter backdrop-blur-sm bg-gray-50 dark:bg-gray-950/60">
            <Link className={`flex items-center space-x-2 text-sm font-medium mr-4 sm:mr-10 lg:mr-14 ${pathname == '/' ? 'pointer-events-none' : ''}`}  href={pathname == '/' ? '#' : '/'}>
                <span className=" font-bold  text-2xl">takeUforward</span>
            </Link>
            <nav className="hidden space-x-4 lg:flex flex-row text-base font-medium">
                <Link className={pathname == '/execute' ? "text-gray-400 pointer-events-none" : "text-gray-900"} href={pathname == '/execute' ? '#' : '/execute'}>
                    Submit Code
                </Link>

                <Link className={pathname == '/submissions' ? "text-gray-400 pointer-events-none" : "text-gray-900"} href={pathname == '/submissions' ? '#' : '/submissions'}>
                    View All Submissions
                </Link>
            </nav>
           
        </nav>
    )
}
