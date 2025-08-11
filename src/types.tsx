import { IconDefinition } from "@fortawesome/free-brands-svg-icons"

export interface BlogData {
    id: number,
    shortTitle: string,
    title: string,
    subtitle: string,
    authors: string[],
    tags: string[],
    datePublished: string,
    dateModified: string,
    data: string
}

export interface Social {
    icon: IconDefinition,
    link: string,
    text: string,
    key: number
}