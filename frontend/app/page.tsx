import Link from "next/link"
import PageHeader from "./components/page-header"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <PageHeader />

      <main className="flex-1">
        <section className="flex flex-col items-center justify-center space-y-2 text-center py-12 md:py-24">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
              Welcome to <span className="text-green-500 italic">takeUforward</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Practice coding questions, prepare for interviews, and get hired.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className=" inline-flex h-12 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-10 shadow-sm text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/execute"
            >
              Submit Code
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-10 py-2 text-xl font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/submissions"
            >
              View Submissions
            </Link>
          </div>
        </section>
        
      </main>
      
    </div>
  )
}

