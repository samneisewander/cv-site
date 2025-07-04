// Import Images
import samNeisewanderHeadshot from '../assets/headshot.webp'
import notreDame from '../assets/notre-dame.webp'
import dixon from '../assets/dixon.webp'

// Import Icons
import {
	faLinkedin,
	faInstagram,
	faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import {
	faPalette,
	faMoon,
	faSun,
	faCircleHalfStroke,
} from '@fortawesome/free-solid-svg-icons'

// Import Components
import ContactCard from '../components/ContactCard'
import BuiPreviewCard from '../components/PreviewCard'
import BuiPopover from '../components/BaseUI/BUI_Popover'

import M3IconButton from '../components/M3IconButton'
import BuiTooltip from '../components/BaseUI/BUI_Tooltip'
import HeaderLink from '../components/HeaderLink'
import BUI_Accordion from '../components/BaseUI/BUI_Accordion'
import { HexColorPicker } from 'react-colorful'

// Import Functions
import { useState, useEffect } from 'react'
import { updateTheme } from 'm3-palettes'

export default function Home() {
	/* MATERIAL 3 COLOR */
    const [color, setColor] = useState('#32a852')
    const [contrast, setContrast] = useState(0)
    //const [scheme, setScheme]: [SchemeStringType, (...args: any[]) => void] = useState('content')
    const [darkMode, setDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
    // const handleToggleGroupChange = (groupValue: any[]) => {
    //     if (!groupValue[0]) return
    //     const scheme = groupValue[0] as SchemeStringType
    //     setScheme(scheme)
    //     updateTheme(color, scheme, darkMode, contrast)
    // }
    const handleChangeComplete = (newColor: string) => {
        setColor(newColor)
        updateTheme(newColor, 'content', darkMode, contrast)
    }
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode)
        updateTheme(color, 'content', !darkMode, contrast)
    }
    const handleContrastToggle = (value: number) => {
        setContrast(value)
        updateTheme(color, 'content', darkMode, contrast)
    }
    // Initialize theme on page load
    useEffect(() => {
        updateTheme(color, 'content', darkMode, contrast)
    }, [])

	return (
		<div className={darkMode ? 'dark' : 'light'}>
			<div className='bg-surface text-on-surface w-screen grid grid-cols-[1fr_500px_1fr]'>
				<div itemID='raceway' className='col-start-2'>
					<ContactCard
						headshot={samNeisewanderHeadshot}
						socials={[
							{
								icon: faLinkedin,
								text: 'Connect with me on LinkedIn!',
								link: 'https://www.linkedin.com/in/samuelneisewander',
								key: 1,
							},
							{
								icon: faInstagram,
								text: 'Follow me on Instagram!',
								link: 'https://www.instagram.com/samneisewander',
								key: 2,
							},
							{
								icon: faSpotify,
								text: 'Listen to my work on Spotify!',
								link: '',
								key: 3,
							},
						]}
					/>

					<iframe className='h-40' src="https://open.spotify.com/embed/track/2RZATnVze9rZm82lZX4TLi?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

					<HeaderLink text='About' id='about' />
					<p>Sam Neisewander is a sophomore student at the </p>

					<BuiPreviewCard
						link='https://en.wikipedia.org/wiki/University_of_Notre_Dame'
						text='University of Notre Dame'
						imgSrc={notreDame}
						imgAltTxt={"A birdseye view of Notre Dame's campus."}
						description={
							<p>
								The{' '}
								<strong>University of Notre Dame du Lac</strong>{' '}
								(known simply as Notre Dame; ND) is a private
								Catholic research university in Notre Dame,
								Indiana, United States. Founded in 1842 by
								members of the Congregation of Holy Cross, a
								Catholic religious order of priests and
								brothers, the main campus of 1,261 acres has a
								suburban setting and contains landmarks such as
								the Golden Dome main building, Sacred Heart
								Basilica, the Grotto of Our Lady of Lourdes, the
								Word of Life mosaic mural, and Notre Dame
								Stadium.
							</p>
						}
					/>

					<p>
						, majoring in Computer Science and minoring in Music.
						Sam is from {' '}
					</p>

					<BuiPreviewCard
						link='https://en.wikipedia.org/wiki/Dixon,_Illinois#'
						text='Dixon, IL'
						imgSrc={dixon}
						imgAltTxt={
							"Dixon's signature white arch which sits over Route 52."
						}
						description={
							<p>
								<strong>Dixon</strong> is a city in Lee County,
								Illinois. The population was 15,274 as of the
								2020 census. The city is named after founder
								John Dixon, who operated a rope ferry service
								across the Rock River, which runs through the
								city. The Illinois General Assembly designated
								Dixon as "Petunia Capital of Illinois" in 1999.
								Dixon was the boyhood home of former U.S.
								President Ronald Reagan. The city is also the
								site of the Lincoln Monument State Memorial,
								marking the spot where Abraham Lincoln joined
								the Illinois militia at Fort Dixon in 1832
								during the Black Hawk War.
							</p>
						}
					/>

					<p>
						. On campus, Sam is a resident of Sorin College, where
						he helps operate the grilling team and plays guitar for
						Sorin's chapel Mass. Sam is an officer of The Melodies
						of Notre Dame, a SATB a cappella group that peforms
						concerts each semester on campus and at various nursing
						homes as a form of community outreach.
					</p>

					<br />
					<br />

					<p>
						In his free time, Sam enjoys tinkering with computers,
						working on software projects, reading, producing music,
						and running.
					</p>

					<Classes/>

					<br />
				</div>


				<Island
					handleChangeComplete={handleChangeComplete}
					handleContrastToggle={handleContrastToggle}
					handleDarkModeToggle={handleDarkModeToggle}
					darkMode={darkMode}
					color={color}
				/>


			</div>
		</div>
	)
}

function Classes() {
	return (
		<BUI_Accordion header={<h1>Classes</h1>}>
			<h2>Freshman</h2>
					<h3>Fall</h3>
					<ul>
						<li>Calculus I</li>
						<li>Introduction to Chemical Principles</li>
						<li>Engineering Design</li>
						<li>Moreau First Year Experience</li>
						<li>Theory I: Materials & Techniques of Music</li>
						<li>How Did I Get Here & Where Am I Going?</li>
					</ul>
					<h3>Spring</h3>
					<ul>
						<li>Calculus II</li>
						<li>Engineering Physics I: Mechanics</li>
						<li>Engineering Programming</li>
						<li>Moreau First Year Experience</li>
						<li>Theory II: Materials & Techniques of Music</li>
						<li>Foundations of Theology</li>
					</ul>

					<h2>Sophomore</h2>
					<h3>Fall</h3>
					<ul>
						<li>Calculus III</li>
						<li>Engineering Physics II: E&M</li>
						<li>Fundamentals of Computing</li>
						<li>Discrete Mathematics</li>
						<li>Aquinas, Faith, & Wisdom</li>
					</ul>
					<h3>Spring</h3>
					<ul>
						<li>
							Intro to Linear Algebra & Differential Equations
						</li>
						<li>Data Structures</li>
						<li>Systems Programming</li>
						<li>Logic Design</li>
						<li>Music Histories & Cultures II</li>
					</ul>

					<h2>Junior</h2>
					<h3>Fall</h3>
					<ul>
						<li>Compilers and Language Design</li>
						<li>Computer Architeture</li>
						<li>Computer Music Programming</li>
						<li>Introduction to Artificial Intelligence</li>
						<li>Operating System Principles</li>
					</ul>
					{/* <h3>Spring</h3>

					<h2>Senior</h2>
					<h3>Fall</h3>
					<h3>Spring</h3> */}
		</BUI_Accordion>
	)
}

/**
 * Function responsible for drawing the right-hand island that contains color
 * theme controls and accessibility settings such as the level of contrast.
 *  
 * @returns A JSX Element containing the island portion of the page.
 */
function Island({
	handleChangeComplete,
	handleContrastToggle,
	handleDarkModeToggle,
	darkMode,
	color,
}: {
	handleChangeComplete: any,
	handleContrastToggle: any,
	handleDarkModeToggle: any,
	darkMode: boolean,
	color: string,
}) {
	return (
		<div className='h-screen w-fit flex flex-col justify-center col-start-3 top-0 ml-10'>
			<div
				itemID='island'
				className='bg-surface-container fixed h-fit rounded-full flex flex-col p-2 items-center justify-center gap-3'>
				<BuiTooltip
					color='on-surface'
					background='surface-container'
					text='Themes'
					side='left'
					offset={20}>
					<BuiPopover icon={faPalette}>
						<HexColorPicker onChange={handleChangeComplete} color={color} />
					</BuiPopover>
				</BuiTooltip>
				<BuiTooltip
					color='on-surface'
					background='surface-container'
					text='Toggle dark mode'
					side='left'
					offset={20}>
					<M3IconButton
						clickHandler={handleDarkModeToggle}
						icon={darkMode ? faSun : faMoon}></M3IconButton>
				</BuiTooltip>
				<BuiTooltip
					color='on-surface'
					background='surface-container'
					text='Toggle contrast level'
					side='left'
					offset={20}>
					<M3IconButton
						clickHandler={handleContrastToggle}
						icon={faCircleHalfStroke}></M3IconButton>
				</BuiTooltip>
			</div>
		</div>
	)
}
