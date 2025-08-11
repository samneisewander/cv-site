import { ReactNode } from "react"
import { Link } from "react-router-dom"
import ThemeMenu from "@/components/ThemeMenu"
import blogData from '@/data/blogData.json'
import { BlogData } from "@/types"
import { useBreakpointContext } from "@/components/BreakpointContext"

export default function Blog(): ReactNode {

    const bp = useBreakpointContext()

    switch (bp) {
        case '2xl':
        case 'xl':
        case 'lg':
        case 'md':
            return <DesktopLayout />
        case 'sm':
            return <MobileLayout />
    }

}

function DesktopLayout(): ReactNode {
    return (
        <div className="bg-surface h-screen flex p-5 justify-center">
            <div className="bg-surface gap-2 grid grid-cols-[1fr_3fr] max-w-[1200px]">
                <NavDrawer></NavDrawer>
                <div className="bg-surface-container rounded-md p-5 text-on-surface flex flex-col gap-5 overflow-y-scroll">
                    {blogData.map((blog, index) => <BlogCard key={index} blogData={blog} />)}
                </div>
            </div >
        </div>
    )
}

function MobileLayout(): ReactNode {
    return (
        <div className="bg-surface gap-2 h-screen pt-5">
            <Link to='/' className="text-primary self-start p-5">← Back to home</Link>
            <div className="bg-surface rounded-md p-5 text-on-surface flex flex-col gap-5 overflow-y-scroll">
                {blogData.map((blog, index) => <BlogCard key={index} blogData={blog} />)}
            </div>
            <div className="fixed w-full flex flex-row justify-center bottom-5">
                <ThemeMenu vertical={false} side='top' className="bg-surface-container-highest" />
            </div>
        </div >
    )
}

function NavDrawer() {
    return (
        <div className="rounded-md flex flex-col p-5 bg-surface-container gap-5 justify-between items-center">

            {/* <M3ExtendedFab icon={faArrowLeft}>Go back</M3ExtendedFab> */}
            <Link to='/' className="text-primary self-start">← Back to home</Link>
            <ThemeMenu vertical={false} side='top' className="bg-surface-container-high"></ThemeMenu>
        </div>
    )
}

function BlogCard({ blogData }: { blogData: BlogData }) {
    return (
        <div className="rounded-md bg-surface-container-high max-h-[500px]">
            <div className="bg-surface-container-highest flex flex-col gap-2 rounded-md p-5">
                <Link to={blogData.shortTitle}><h1 id="title" className="m-0">{blogData.title}</h1></Link>

                <div className="flex flex-row gap-2">
                    <p className="">Author{blogData.authors.length > 1 && 's'}: {blogData.authors.join(', ')}</p>
                    <p className="">Published: {blogData.datePublished}</p>
                    <p className="">Modified: {blogData.dateModified}</p>
                </div>
                <div className="flex flex-row gap-2">
                    {blogData.tags.map((tag, index) => {
                        return (
                            <div key={index} className="bg-secondary-container text-on-secondary-container rounded-md w-fit text-sm pl-1 pr-1">
                                {tag}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}