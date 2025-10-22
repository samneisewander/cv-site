import ThemeMenu from "./ThemeMenu"
import HeaderLink from "./HeaderLink"

import { type BlogData } from "../types"
import { useBreakpointContext } from "./BreakpointContext"

import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { type Components, MarkdownHooks } from "react-markdown"

import rehypeStarryNight from 'rehype-starry-night'

function urlStringifyHeading(text: string | undefined): string {
    if (text) {
        return text.toLowerCase().replace(/[^A-z0-9 ]/g, "").replace(/ /g, "-")
    } else {
        console.warn("urlStringifyHeading: cannot stringify undefined")
        return ""
    }
}

/**
 * TODO: Find a way to reconcile urlStringifyHeading with Markdown formatting.
 * Example: ## This is a heading with a **bolded** word in it
 * Expected Behavior: The world bolded should appear boldface and the url should not be affected
 * Actual Behavior: error, because innerHTML is not a string in this case.
 */

const HeaderComponent: Components["h1"] = ({ node, ...props }) => {
    if (node && node.children[0].type == "text") {
        let innerHTML = node.children[0].value
        return (
            <HeaderLink headingType={node?.tagName.toLowerCase()} id={urlStringifyHeading(innerHTML)} {...props}>{innerHTML}</HeaderLink>
        )
    } else {
        console.warn(`HeaderComponent: cannot create header component from node: ${node}`)
    }
}

export default function Blog({
    blogData
}: {
    blogData: BlogData
}): ReactNode {

    const bp = useBreakpointContext()

    switch (bp) {
        case '2xl':
        case 'xl':
        case 'lg':
            return <DesktopLayout blogData={blogData} />
        case 'md':
        case 'sm':
            return <MobileLayout blogData={blogData} />
    }
}

function DesktopLayout({
    blogData
}: {
    blogData: BlogData
}): ReactNode {
    return (
        <div className='bg-surface box-border text-on-surface p-10 grid grid-cols-[1fr_2fr_1fr]'>
            <div className="flex flex-col gap-2 col-start-2">
                <Link to='/blog' className="text-primary self-start">← Back to blogs</Link>
                <Article blogData={blogData}></Article>
            </div>
            <div className='bottom-10 pointer-events-none relative h-screen w-fit flex flex-col justify-center col-start-3 top-0 ml-10'>
                <ThemeMenu vertical={true} side='left' className='bg-surface-container-highest fixed'></ThemeMenu>
            </div>
        </div>
    )
}

function MobileLayout({
    blogData
}: {
    blogData: BlogData
}): ReactNode {

    return (
        <div className="bg-surface pt-5">
            <Link to='/blog' className="text-primary self-start m-5 mb-0">← Back to blogs</Link>
            <Article blogData={blogData}></Article>
            <div className="w-full fixed bottom-5 flex justify-center pointer-events-none">
                <ThemeMenu vertical={false} side='top' className="bg-surface-container-highest"></ThemeMenu>
            </div>
            <br/>
            <br/>
            <br/>
        </div >
    )
}

function Article({ blogData }: { blogData: BlogData }) {

    // https://github.com/remarkjs/react-markdown?tab=readme-ov-file#appendix-b-components
    const mdComponentMap: Components = {
        h1: HeaderComponent,
        h2: HeaderComponent,
        h3: HeaderComponent,
        h4: HeaderComponent,
        h5: HeaderComponent,
        h6: HeaderComponent,
        /**
         * TODO:    - Add a copy button to code blocks, restrict ctrl-a to code blocks.
         *          - Make the highlighter be gruvbox theme goddamit
         */
        code({ node, children, ...props }) {
            if (props?.className) {
                return (
                    <div className="rounded-md bg-gray-900 p-2 w-full overflow-x-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-500">
                        <code {...props} className="text-sm">
                            {children}
                        </code>
                    </div>
                )
            } else {
                return (
                    <span className="rounded-md bg-gray-900 pl-1 pr-1">
                        <code {...props} className="text-sm">
                            {children}
                        </code>
                    </span>
                )
            }
        },
        blockquote({ node, children, ...props }) {
            return (
                <div className="rounded-md overflow-clip bg-surface-container">
                    <blockquote className="p-2 border-s-4 border-primary" {...props}>
                        {children}
                    </blockquote>
                </div>
            )
        },
        img({ node, src, alt, title, ...props }) {
            return (
                <span className="flex flex-row justify-center"><img src={src} title={title} alt={alt} {...props}></img></span>
            )
        }
    }

    return (
        <div className="rounded-md p-5 text-on-surface flex flex-col overflow-y-auto scrollbar scrollbar-track-gray-900 scrollbar-thumb-gray-500">
            <div className="flex flex-col gap-2 rounded-md p-5">
                <h1 id="title" className="m-0">{blogData.title}</h1>
                <div className="flex flex-col gap-2">
                    <p className="">Written by {blogData.authors.join(', ')}</p>
                    <div className="flex flex-row gap-2">
                        <p className=""><b>Published</b> {blogData.datePublished}</p>
                        <p className=""><b>Modified</b> {blogData.dateModified}</p>
                    </div>
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
            <div className="flex flex-col gap-3 p-5">
                <MarkdownHooks rehypePlugins={[rehypeStarryNight]} components={mdComponentMap}>{blogData.data}</MarkdownHooks>
            </div>
        </div>
    )
}