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
        <div className="bg-surface min-h-screen p-5 grid grid-cols-[1fr_2fr_1fr]">
            <div className="col-start-2 flex flex-col gap-2">
                <Link to='/' className="text-primary self-start">← Back to home</Link>
                {blogData.map((blog, index) => <BlogCard key={index} blogData={blog} />)}
            </div>
            <div className='bottom-10 w-[90%] pointer-events-none md:relative md:h-screen md:w-fit flex md:flex-col justify-center md:col-start-3 md:top-0 md:ml-10'>
                <ThemeMenu vertical={true} side='left' className='bg-surface-container-highest fixed'></ThemeMenu>
            </div>
        </div>
    )
}

function MobileLayout(): ReactNode {
    return (
        <div className="bg-surface gap-2 min-h-screen pt-5">
            <Link to='/' className="text-primary self-start p-5">← Back to home</Link>
            <div className="bg-surface rounded-md p-5 text-on-surface flex flex-col gap-5 overflow-y-scroll">
                {blogData.map((blog) => <BlogCard key={blog.id} blogData={blog} />)}
            </div>
            <div className="fixed w-full flex flex-row justify-center bottom-5">
                <ThemeMenu vertical={false} side='top' className="bg-surface-container-highest" />
            </div>
        </div >
    )
}

function BlogCard({ blogData }: { blogData: BlogData }) {
    return (
        <div className="rounded-md max-h-[500px]">
            <div className="bg-surface-container text-on-surface flex flex-col gap-2 rounded-md p-5">
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