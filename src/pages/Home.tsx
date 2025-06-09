import samNeisewanderHeadshot from '../assets/headshot.webp'
import notreDame from '../assets/notre-dame.webp'
import dixon from '../assets/dixon.webp'

import ContactCard from '../components/ContactCard'
import {
	faLinkedin,
	faInstagram,
	faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import { faPalette, faMoon, faSun, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import BuiPreviewCard from '../components/PreviewCard'
import PopOver from '../components/PopOver'
import { SketchPicker, ColorResult } from 'react-color'
import { useState, useEffect } from 'react'
import { updateTheme } from '../utils/updateTheme'
import M3IconButton from '../components/M3IconButton'
import BuiTooltip from '../components/Tooltip'
import HeaderLink from '../components/HeaderLink'

export default function Home() {
	const [color, setColor] = useState('#FF0000');
	const [contrast, setContrast] = useState(0);
	const [darkMode, setDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

	const handleChangeComplete = (newColor: ColorResult) => {
		setColor(newColor.hex);
		updateTheme({primary: newColor.hex,}, 'class', 'content', contrast)
	}

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode)
		console.log(darkMode)
	}

	const handleContrastToggle = () => {
		let newContrast = contrast + .5
		if (newContrast > 1.0) {
			newContrast = -1
		}
		setContrast(newContrast)
		updateTheme({primary: color,}, 'class', 'content', contrast)
	}

	useEffect(() => {
		updateTheme({primary: '#D0021B',}, 'class', 'content', 0)
	}, []);

	return (
		<div className={darkMode ? 'dark' : 'light'}>
			<div className='bg-surface w-screen grid grid-cols-[1fr_500px_1fr]'>

				{/* <div className='h-screen w-fit flex flex-col justify-center col-start-1 top-0 ml-10'>
					<div itemID='chapters' className='w-[200px] h-[100px] bg-surface-container fixed rounded-md'>
						<HashLink smooth to={'/#about'}>About</HashLink>
					</div>
				</div> */}

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
					<HeaderLink text='About' id='about'/>
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
						Sam is from the small, rural town of{' '}
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

					<h1>Classes</h1>

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

					{/* <h2>Junior</h2>
					<h3>Fall</h3>
					<h3>Spring</h3>

					<h2>Senior</h2>
					<h3>Fall</h3>
					<h3>Spring</h3> */}
				</div>

				<div className='h-screen w-fit flex flex-col justify-center col-start-3 top-0 ml-10'>
					<div
						itemID='island'
						className='bg-surface-container fixed h-fit rounded-full flex flex-col p-2 items-center justify-center gap-3'>
						<BuiTooltip color='on-surface-container' background='surface-container' text='Themes' side='left' offset={20}>
							<PopOver icon={faPalette}>
								<SketchPicker className='bg-surface-container font-[Poppins]' disableAlpha={true} onChangeComplete={handleChangeComplete} color={color}></SketchPicker>
							</PopOver>
						</BuiTooltip>
						<BuiTooltip color='on-surface-container' background='surface-container' text='Toggle dark mode' side='left' offset={20}>
							<M3IconButton clickHandler={handleDarkModeToggle} icon={darkMode ? faSun : faMoon}></M3IconButton>
						</BuiTooltip>
						<BuiTooltip color='on-surface-container' background='surface-container' text='Toggle contrast level' side='left' offset={20}>
							<M3IconButton clickHandler={handleContrastToggle} icon={faCircleHalfStroke}></M3IconButton>
						</BuiTooltip>
					</div>
				</div>
			</div>
		</div>
	)
}
