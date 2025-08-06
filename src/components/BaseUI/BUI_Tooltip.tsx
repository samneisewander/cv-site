import { Tooltip } from '@base-ui-components/react/tooltip'
import { bgUtilityClass, fillUtilityClass, textUtilityClass, type M3ColorRole } from 'm3-palettes'

export default function BuiTooltip({
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
