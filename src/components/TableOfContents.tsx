import { useEffect, useState, useRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

type HeadingTag = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6'

interface Heading {
    tagName: HeadingTag,
    id: string,
    title: string,
    items: Heading[]
}

export default function TableOfContents({ className }: { className?: string }) {
    const [activeId, setActiveId] = useState<string>();
    const { nestedHeadings } = useHeadingsData();
    const navigate = useNavigate()

    useIntersectionObserver(setActiveId, activeId);

    return (
        <nav aria-label="Table of contents" className={className}>
            <Headings headings={nestedHeadings} activeId={activeId} navigate={navigate} />
        </nav>
    );
};

const Headings = ({ headings, activeId, navigate }: { headings: Heading[], activeId: string | undefined, navigate: NavigateFunction }) => {
    return (
        <ul>
            {headings.map((heading, idx) => (
                <li key={idx} className={heading.id === activeId ? "text-primary list-disc" : "text-on-surface list-circle"}>
                    <a
                        href={window.location.origin + window.location.pathname + '#' + heading.id}
                        onClick={async (e) => {
                            e.preventDefault();
                            let element = document.querySelector(`#${heading.id}`)
                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth"
                                });
                                navigate(window.location.pathname +  '#' + heading.id, { replace: true });
                            }
                        }}
                    >
                        {heading.title}
                    </a>
                    {heading.items && heading.items.length > 0 && <Headings headings={heading.items} activeId={activeId} navigate={navigate} />}
                </li>
            ))}
        </ul>
    )
}

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const headingElements: HTMLHeadingElement[] = Array.from(
            document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        );

        const newNestedHeadings: Heading[] = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
};

const getNestedHeadings = (headingElements: HTMLHeadingElement[]): Heading[] => {
    let nestedHeadings: Heading[] = [];
    const tagToDepthMap: { [key: string]: number } = {
        'H1': 0,
        'H2': 1,
        'H3': 2,
        'H4': 3,
        'H5': 4,
        'H6': 5
    }

    const drillNest = (nest: Heading, headingDepth: number, heading: HTMLHeadingElement, tagName: HeadingTag): Heading => {
        /**
         * If the passed heading's depth is greater than the current depth, make a recursive call to drill down a level
         * Otherwise, append to the nests items list of trees and return nest.
         */
        if (nest.items.length <= 0 || headingDepth <= tagToDepthMap[nest.items[0].tagName]) {
            // base case: we have reached a leaf node. append and return.
            // base case: the heading depth is lte to nest depth, so insert here.
            nest.items.push({ tagName: tagName, id: heading.id, title: heading.innerHTML, items: [] })
        }
        else {
            // recursive case
            let end = nest.items.pop()
            if (end) {
                nest.items.push(drillNest(end, headingDepth, heading, tagName))
            }
        }

        return nest
    }

    for (let heading of headingElements) {
        let tag: HeadingTag
        switch (heading.tagName) {
            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
                tag = heading.tagName
                break
            default:
                continue
        }

        /**
         * If the nestedHeadings list is empty, append node
         * otherwise, compare the last node in list of trees to this heading.
         * if the heading depth is greater than the last node depth, drill tree
         * otherwise, append node
         */

        if (nestedHeadings.length > 0) {
            if (tagToDepthMap[tag] > tagToDepthMap[nestedHeadings[nestedHeadings.length - 1].tagName]) {
                // drill
                let endNode = nestedHeadings.pop()
                if (endNode) {
                    nestedHeadings.push(drillNest(endNode, tagToDepthMap[tag], heading, tag))
                }
                continue
            }
        }
        nestedHeadings.push({ tagName: heading.tagName, id: heading.id, title: heading.innerHTML, items: [] })
    }

    return nestedHeadings;
};

const useIntersectionObserver = (setActiveId: React.Dispatch<React.SetStateAction<string | undefined>>, activeId: string | undefined): void => {
    const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

    useEffect(() => {

        const callback = (headings: IntersectionObserverEntry[]) => {
            headingElementsRef.current = headings.reduce((map: { [key: string]: IntersectionObserverEntry }, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current);

            const visibleHeadings: IntersectionObserverEntry[] = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
            });

            const getIndexFromId = (id: string): number =>
                headingElements.findIndex((heading) => heading.id === id);

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a: IntersectionObserverEntry, b: IntersectionObserverEntry): number => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
            else if (visibleHeadings.length === 0) {
                const activeElement = headingElements.find((el) => el.id === activeId);
                const activeIndex = headingElements.findIndex(
                    (el) => el.id === activeId
                );

                const activeIdYcoord = activeElement?.getBoundingClientRect().y;
                if (activeIdYcoord && activeIdYcoord > 150 && activeIndex !== 0) {
                    setActiveId(headingElements[activeIndex - 1].id);
                }
            }
        }

        const observer = new IntersectionObserver(callback, {
            rootMargin: '0px 0px -40% 0px',
        })

        const headingElements: HTMLHeadingElement[] = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [setActiveId, activeId])
};