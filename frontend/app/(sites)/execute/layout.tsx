import PageHeader from "@/app/components/page-header"

export default function Layout({ children } : { children: React.ReactNode}) {
    return (
        <div>
            <PageHeader />
        <div>
            {children}
        </div>

        </div>
    )
}