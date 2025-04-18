import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import BuiTooltip from './Tooltip'

type Social = {
    icon: IconDefinition,
    link: string,
    text: string,
    key: number
}

export default function ContactCard({
	headshot,
	socials,
}: {
	headshot: string
	socials: Social[]
}) {
	return (
		<>
			<div className='flex flex-col gap-3 items-center justify-center w-full h-[75vh]'>
				<img
					src={headshot}
					className='size-40 rounded-full'
					alt='Headshot of Sam Neisewander'
				/>
				<h3 className='text-on-surface'>
					Sam Neisewander
				</h3>
				<div className='flex flex-row gap-3'>
					{/* ICON BUTTONS */}
                    {socials.map(social => (
                        <BuiTooltip key={social.key} text={social.text} color='on-surface-container' background='surface-container'>
                            <a href={social.link} target='_blank'>
                                <FontAwesomeIcon
                                    icon={social.icon}
                                    className='text-2xl text-on-surface'>
                                </FontAwesomeIcon>
                            </a>
                        </BuiTooltip>
                    ))}
				</div>
			</div>
		</>
	)
}
