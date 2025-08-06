import { Accordion } from '@base-ui-components/react/accordion'
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { type M3ColorRole, bgUtilityClass, textUtilityClass, borderUtilityClass } from 'm3-palettes'

export default function BUI_Accordion({
    children,
    header,
    // iconWhenOpen = faMinus,
    iconWhenClosed = faPlus,
    iconWhenOpen = faMinus,
    background = 'surface-container',
    color = 'on-surface',
}: {
    children: React.ReactNode,
    header: React.ReactNode,
    iconWhenOpen?: IconDefinition,
    iconWhenClosed?: IconDefinition,
    background?: M3ColorRole,
    color?: M3ColorRole,
}) {
    const [icon, setIcon] = useState(iconWhenClosed)

    const clickHandler = async () => {
        setIcon(icon == iconWhenClosed ? iconWhenOpen : iconWhenClosed)
    }

    return (
        <Accordion.Root className="flex flex-col justify-center">
            <Accordion.Item className={`rounded pl-4 pr-4 ${bgUtilityClass[background]} ${textUtilityClass[color]} border-b-2 ${borderUtilityClass[color]}`} onOpenChange={clickHandler}>
                <Accordion.Header render={<span className='m-2'></span>}>
                    <Accordion.Trigger className={`group relative flex w-full items-baseline justify-between gap-4 text-left font-medium hover:cursor-pointer focus-visible:z-1 focus-visible:outline focus-visible:outline-white`}>
                        {header}
                        <FontAwesomeIcon icon={icon} />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
                    {children}
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion.Root>
    )
}