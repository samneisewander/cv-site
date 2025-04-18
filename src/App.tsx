import samNeisewanderHeadshot from './assets/headshot.webp'
import notreDame from './assets/notre-dame.webp'
import dixon from './assets/dixon.webp'

import ContactCard from './components/ContactCard'
import {
	faLinkedin,
	faInstagram,
	faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import { faPalette, faMoon, faSun, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import BuiPreviewCard from './components/PreviewCard'
import PopOver from './components/PopOver'
import { SketchPicker, ColorResult } from 'react-color'
import { useState, useEffect } from 'react'
import { updateTheme } from './utils/updateTheme'
import M3IconButton from './components/M3IconButton'
import BuiTooltip from './components/Tooltip'
import { HashLink } from 'react-router-hash-link'
import HeaderLink from './components/HeaderLink'

export default function App() {
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
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import samNeisewanderHeadshot from './assets/headshot.webp';

function App() {
  return (
    <div className='bg-stone-100 dark:bg-stone-950 w-lvw min-h-lvh h-fit flex flex-col items-center'>
      <div className='min-w-2xl w-1/2 h-full p-5 flex flex-col rounded-lg'>
        <div className='h-30'></div>
        <ContactCard headshot={samNeisewanderHeadshot}></ContactCard>
        {/* <h1 className='text-stone-800 dark:text-stone-300'>Heading 1</h1>
        <h2 className='text-stone-800 dark:text-stone-300'>Heading 2</h2>
        <h3 className='text-stone-800 dark:text-stone-300'>Heading 3</h3>
        <h4 className='text-stone-800 dark:text-stone-300'>Heading 4</h4>
        <p className='text-stone-800 dark:text-stone-300'>Paragraph</p> */}
      </div>
    </div>
  )
}

function ContactCard({ headshot }: { headshot: string }){
  return (
    <>
      <div className="flex flex-col gap-3 items-center">
        <img src={headshot} className="size-40 rounded-4xl" alt="Headshot of Sam Neisewander" />
        <h3 className='text-stone-800 dark:text-stone-300'>Sam Neisewander</h3>
        <div className='flex flex-row gap-3'>
          <a href="https://www.linkedin.com/in/samuelneisewander" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className='text-2xl text-stone-800 dark:text-stone-100'></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/samneisewander" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className='text-2xl text-stone-800 dark:text-stone-100'></FontAwesomeIcon>
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faSpotify} className='text-2xl text-stone-800 dark:text-stone-100'></FontAwesomeIcon>
          </a>

        </div>
      </div>
    </>
  )
}