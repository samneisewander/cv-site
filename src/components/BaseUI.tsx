import { ReactNode, useState } from "react"
import M3IconButton from "./M3IconButton"
import { bgUtilityClass, fillUtilityClass, textUtilityClass, borderUtilityClass, type M3ColorRole } from 'm3-palettes'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { Tooltip } from '@base-ui-components/react/tooltip'
import { Popover } from '@base-ui-components/react'
import { Accordion } from '@base-ui-components/react/accordion'

export function BuiAccordion({
    children,
    header,
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

export function BuiPopover({ children, icon, side = 'top' }: { children: ReactNode, icon: IconDefinition, side?: 'top' | 'bottom' | 'left' | 'right', }) {
  return (
    <Popover.Root>
      <Popover.Trigger render={<div></div>} nativeButton={false}>
        <M3IconButton icon={icon}></M3IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={20} side={side}>
          <Popover.Popup className="origin-[var(--transform-origin)] rounded-lg bg-primary p-1 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
            <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              <ArrowSvg />
            </Popover.Arrow>
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-primary"
      />
    </svg>
  );
}


export function BuiTooltip({
	children,
	text,
	tabstop,
    background = 'primary',
    color = 'on-primary',
	side = 'bottom',
	offset = 10
}: {
	children: React.ReactNode,
	text: string,
	tabstop: boolean,
    background?: M3ColorRole,
    color?: M3ColorRole,
	side?: 'top' | 'bottom' | 'left' | 'right',
	offset?: number
}) {

	return (
		<Tooltip.Root>
			<Tooltip.Trigger tabIndex={tabstop? undefined : -1}>{children}</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Positioner sideOffset={offset} side={side}>
					<Tooltip.Popup
						className={`flex origin-[var(--transform-origin)] flex-col rounded-md ${bgUtilityClass[background]} border-0 px-2 py-1 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0`}>
						<Tooltip.Arrow
							className={`data-[side=bottom]:top-[-8px] data-[side=left]:right-[-12px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180`}>
							<svg
								width='20'
								height='10'
								viewBox='0 0 20 10'
								className={fillUtilityClass[background]}
							>
								<path
									d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
								/>
								<path
									d='M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z'
								/>
							</svg>
						</Tooltip.Arrow>
						<p className={textUtilityClass[color]}>
							{text}
						</p>
					</Tooltip.Popup>
				</Tooltip.Positioner>
			</Tooltip.Portal>
		</Tooltip.Root>
	)
}