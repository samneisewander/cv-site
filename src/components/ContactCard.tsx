import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import BuiTooltip from './BaseUI/BUI_Tooltip'

type Social = {
    icon: IconDefinition,
    link: string,
    text: string,
    key: number
}

export default function ContactCard({
	headshot,
	socials,
	email=null,
}: {
	headshot: string
	socials: Social[]
	email?: string | null,
}) {
	return (
		<>
			<div className='flex flex-col gap-3 items-center justify-center w-full h-fit pt-10 mb-10'>
				<img
					src={headshot}
					className='size-40 rounded-full'
					alt='Headshot of Sam Neisewander'
				/>
				<h1 className='text-on-surface m-0'>
					Sam Neisewander
				</h1>
				{ email ? 
					<div className='text-sm font-[Poppins]'>
						<a href={`mailto:${email}`}>{email}</a>
					</div> 
					: ''
				}
				<div className='flex flex-row gap-3 w-fit'>
					{/* ICON BUTTONS */}
                    {socials.map(social => (
                        <BuiTooltip tabstop={true} key={social.key} text={social.text} color='on-primary' background='primary'>
                            <a href={social.link} target='_blank' >
                                <FontAwesomeIcon
                                    icon={social.icon}
                                    className='text-2xl text-on-surface w-fit h-fit'>
                                </FontAwesomeIcon>
                            </a>
                        </BuiTooltip>
                    ))}
				</div>
			</div>
		</>
	)
}
