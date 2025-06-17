import { Accordion } from '@base-ui-components/react/accordion'
import React from 'react'
import { M3ColorRole } from '../../utils/M3Types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function BUI_Accordion({
    children,
    header,
    iconWhenOpen = faMinus,
    iconWhenClosed = faPlus,
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
    return (
        <Accordion.Root className="flex flex-col justify-center text-gray-900">
            <Accordion.Item className="border-b border-gray-200">
                <Accordion.Header>
                    <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-gray-50 text-left font-medium hover:bg-gray-100 focus-visible:z-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800">
                        {header}
                        <FontAwesomeIcon icon={iconWhenClosed}/>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
                    {children}
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion.Root>
    )
}