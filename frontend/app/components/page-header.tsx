
import Link from "next/link"
import { Toggle } from "@/components/ui/toggle"

export default function PageHeader() {
  return (
    <nav className="flex flex-row items-center h-16 px-4 border-b border-gray-200/50 backdrop-filter backdrop-blur-sm bg-gray-50 dark:bg-gray-950/60">
      <Link className="flex items-center space-x-2 text-sm font-medium mr-4 sm:mr-10 lg:mr-14" href="#">
        <span className=" font-bold  text-2xl">takeUforward</span>
      </Link>
      <nav className="hidden space-x-4 lg:flex flex-row text-base font-medium">
        <Link className="text-gray-900" href="#">
          View All Submissions
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        
        <Toggle aria-label="Toggle theme" className="ml-4">Dark Mode</Toggle>
      </div>
    </nav>
  )
}