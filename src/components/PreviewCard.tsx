import { PreviewCard } from '@base-ui-components/react/preview-card'
import { ReactNode } from 'react'
import {
	useFloating,
	inline,
	offset,
	autoPlacement,
} from '@floating-ui/react'

export default function BuiPreviewCard({
	link,
	imgSrc,
	imgAltTxt,
	text,
	description,
}: {
	link: string
	imgSrc: string
	imgAltTxt: string
	text: string
	description: ReactNode
}) {

	const { refs, floatingStyles, } = useFloating({
		middleware: [
			inline(),
			autoPlacement(),
			offset(20),
		],
	})

	return (
		<PreviewCard.Root>
			<PreviewCard.Trigger href={link}>
				<p ref={refs.setReference} className='inline'>
					{text}
				</p>
			</PreviewCard.Trigger>

			<PreviewCard.Portal>
				<PreviewCard.Positioner
					ref={refs.setFloating}
					style={floatingStyles}>
					<PreviewCard.Popup className='flex flex-col gap-2 p-1 rounded-md h-fit max-w-80 bg-primary text-on-primary origin-[var(--transform-origin)] transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0'>
						<img
							width='448'
							height='300'
							className='block w-full rounded-sm'
							src={imgSrc}
							alt={imgAltTxt}
						/>
						<span className='text-on-surface-container font-[Poppins] text-sm p-1'>
							{description}
						</span>
					</PreviewCard.Popup>
				</PreviewCard.Positioner>
			</PreviewCard.Portal>
		</PreviewCard.Root>
	)
}
