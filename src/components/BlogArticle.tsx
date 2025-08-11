import { type BlogData } from "../types"
import TableOfContents from "./TableOfContents"
import ThemeMenu from "./ThemeMenu"
import { Link } from "react-router-dom"
import HeaderLink from "./HeaderLink"
import { ReactNode } from "react";
import Markdown, { type Components } from "react-markdown"
import CodeBlock from "./CodeBlock"
import { useBreakpointContext } from "./BreakpointContext"
import M3IconButton from "./M3IconButton"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function urlStringifyHeading(text: string): string {
    return text.toLowerCase().replace(/[^A-z0-9 ]/g, "").replace(/ /g, "-")
}

const H1Component: Components["h1"] = ({ children }) => {
    let innerHTML = children as string
    return (
        <HeaderLink headingType="h1" id={urlStringifyHeading(innerHTML)}>{innerHTML}</HeaderLink>
    )
}
const H2Component: Components["h2"] = ({ children }) => {
    let innerHTML = children as string
    return (
        <HeaderLink headingType="h2" id={urlStringifyHeading(innerHTML)}>{innerHTML}</HeaderLink>
    )
}
const H3Component: Components["h3"] = ({ children }) => {
    let innerHTML = children as string
    return (
        <HeaderLink headingType="h3" id={urlStringifyHeading(innerHTML)}>{innerHTML}</HeaderLink>
    )
}
const H4Component: Components["h4"] = ({ children }) => {
    let innerHTML = children as string
    return (
        <HeaderLink headingType="h4" id={urlStringifyHeading(innerHTML)}>{innerHTML}</HeaderLink>
    )
}
const H5Component: Components["h5"] = ({ children }) => {
    let innerHTML = children as string
    return (
        <HeaderLink headingType="h5" id={urlStringifyHeading(innerHTML)}>{innerHTML}</HeaderLink>
    )
}
const H6Component: Components["h6"] = ({ children }) => {
    let innerHTML = children as string
    return (
        <HeaderLink headingType="h6" id={urlStringifyHeading(innerHTML)}>{innerHTML}</HeaderLink>
    )
}
const BlockQuoteComponent: Components["blockquote"] = ({ children }) => {
    let innerHTML = children as string
    return (
        <div className="rounded-md overflow-clip bg-surface-container-highest">
            <blockquote className="p-4 my-4 border-s-4 border-primary">
                <span className=" italic font-medium leading-relaxed text-primary">{innerHTML}</span>
            </blockquote>
        </div>
    )
}

const ParagraphComponent: Components['p'] = ({ children }) => {
    let innerHTML = children as string
    return (
        <>
            <p>{innerHTML}</p>
            <br />
            <br />
        </>
    )
}

const CodeComponent: Components["code"] = ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match && match[1];
    return match ? (<CodeBlock lang={lang || "text"} codeChildren={String(children)} />) : (
        <code {...props} className="bg-surface-container-high text-tertiary md:bg-surface p-1 rounded-sm">{children}</code>
    )
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
        case 'md':
            return <DesktopLayout blogData={blogData} />
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
        <div className="bg-surface h-screen flex p-5 justify-center">
            <div className="bg-surface gap-2 grid md:grid-cols-[1fr_3fr] max-w-[1200px]">
                <div className="rounded-md flex flex-col p-5 h-full bg-surface-container gap-5 items-center">
                    {/* <M3ExtendedFab icon={faArrowLeft}>Go back</M3ExtendedFab> */}
                    <Link to='/blog' className="text-primary self-start">← Back to blogs</Link>
                    <div className="h-full justify-end">
                        <TableOfContents className="bg-surface-container-highest p-5 rounded-md h-fit" />
                    </div>
                    <ThemeMenu vertical={false} side='top' className="bg-surface-container-highest"></ThemeMenu>
                </div>
                <Article blogData={blogData}></Article>
            </div >
        </div >
    )
}

function MobileLayout({
    blogData
}: {
    blogData: BlogData
}): ReactNode {

    const [navOpen, setNavOpen] = useState(false)

    return (
        <div className="bg-surface pt-5">
            <Link to='/blog' className="text-primary self-start m-5 mb-0">← Back to blogs</Link>
            <Article blogData={blogData}></Article>
            <div className="fixed bottom-5 left-5 rounded-full bg-surface-container-highest p-2">
                <M3IconButton icon={faBars} clickHandler={() => setNavOpen(!navOpen)} />
            </div>
            {navOpen && <div className="fixed top-0 h-screen w-[80%]">
                <div className="rounded-r-xl flex flex-col p-5 h-full bg-surface-container gap-5 items-center">
                    {/* <M3ExtendedFab icon={faArrowLeft}>Go back</M3ExtendedFab> */}
                    <Link to='/blog' className="text-primary self-start">← Back to blogs</Link>
                    <div className="h-full justify-end">
                        <TableOfContents className="bg-surface-container-highest p-5 rounded-md h-fit" />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <span className="w-[56px]"></span>
                        <ThemeMenu vertical={false} side='top' className="bg-surface-container-highest"></ThemeMenu>
                        <div className="rounded-full bg-surface-container-highest p-2">
                            <M3IconButton icon={faBars} clickHandler={() => setNavOpen(!navOpen)} />
                        </div>
                    </div>
                </div>
            </div>}
        </div >
    )
}

function Article({ blogData }: { blogData: BlogData }) {

    const mdComponentMap: Components = {
        h1: H1Component,
        h2: H2Component,
        h3: H3Component,
        h4: H4Component,
        h5: H5Component,
        h6: H6Component,
        blockquote: BlockQuoteComponent,
        code: CodeComponent,
        p: ParagraphComponent
    }

    return (
        <div className="md:bg-surface-container rounded-md p-5 text-on-surface flex flex-col overflow-y-scroll">
            <div className="bg-surface-container-highest flex flex-col gap-2 rounded-md p-5">
                <h1 id="title" className="m-0">{blogData.title}</h1>
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
            <div className="p-5">
                <Markdown components={mdComponentMap}>{blogData.data}</Markdown>
            </div>
        </div>
    )
}