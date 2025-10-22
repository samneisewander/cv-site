// Import Images
import samNeisewanderHeadshot from '../assets/headshot.webp'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedin,
	faInstagram,
	faSpotify,
	faGoodreads,
	faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
	faEnvelope
} from '@fortawesome/free-solid-svg-icons'

// Import Components
import { BuiTooltip } from '../components/BaseUI'
import HeaderLink from '../components/HeaderLink'

// Import Functions
import { useBreakpointContext } from '@/components/BreakpointContext'
import { Social } from '../types'
import ThemeMenu from '../components/ThemeMenu'
import { Link } from 'react-router-dom'

export default function Home() {

	const bp = useBreakpointContext()

	switch (bp) {
		case '2xl':
		case 'xl':
		case 'lg':
		case 'md':
			return <DesktopLayout />
		case 'sm':
			return <MobileLayout />
	}

}

function DesktopLayout() {
	return (
		<div className='bg-surface box-border text-on-surface p-5 md:p-10 flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr]'>
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
							icon: faGithub,
							text: 'Check out my Github!',
							link: 'https://github.com/samneisewander',
							key: 3,
						},
						{
							icon: faSpotify,
							text: 'Listen to my work on Spotify!',
							link: 'https://open.spotify.com/artist/5rTV8krDOMdxZtbZqqNfGm',
							key: 4,
						},
						{
							icon: faGoodreads,
							text: 'Friend me on Goodreads!',
							link: 'https://www.goodreads.com/friend/i?invite_token=NzUzMzQzYzQtMjFkMS00OTc3LWFhN2ItNGNiYTEyMWY2NGE5',
							key: 5,
						},
						{
							icon: faEnvelope,
							text: 'Contact me!',
							link: 'mailto:samuelneisewander@gmail.com',
							key: 6,
						}
					]}
				/>

				<iframe src="https://open.spotify.com/embed/album/2w3w1QYLMCQtGCWH5aLdUd?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

				<About />
				{/* <Experience />
				<Classes /> */}

				<br />

			</div>

			<div className='bottom-10 w-[90%] pointer-events-none md:relative md:h-screen md:w-fit flex md:flex-col justify-center md:col-start-3 md:top-0 md:ml-10'>
				<ThemeMenu vertical={true} side='left' className='bg-surface-container-highest fixed'></ThemeMenu>
			</div>
		</div>
	)
}

function MobileLayout() {
	return (
		<>
			<div className='bg-surface p-5 text-on-surface'>
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
							icon: faGithub,
							text: 'Check out my Github!',
							link: 'https://github.com/samneisewander',
							key: 3,
						},
						{
							icon: faSpotify,
							text: 'Listen to my work on Spotify!',
							link: 'https://open.spotify.com/artist/5rTV8krDOMdxZtbZqqNfGm',
							key: 4,
						},
						{
							icon: faGoodreads,
							text: 'Friend me on Goodreads!',
							link: 'https://www.goodreads.com/friend/i?invite_token=NzUzMzQzYzQtMjFkMS00OTc3LWFhN2ItNGNiYTEyMWY2NGE5',
							key: 5,
						},
						{
							icon: faEnvelope,
							text: 'Contact me!',
							link: 'mailto:samuelneisewander@gmail.com',
							key: 6,
						}
					]}
				/>

				<iframe src="https://open.spotify.com/embed/album/2w3w1QYLMCQtGCWH5aLdUd?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

				<About />
				{/* <Experience /> */}
				{/* <Classes /> */}

				<br />
				<br />
				<br />
				<br />

			</div>
			<div className="w-full fixed bottom-5 flex justify-center pointer-events-none">
				<ThemeMenu vertical={false} side='top' className="bg-surface-container-highest"></ThemeMenu>
			</div>	
		</>
	)
}

// function Classes() {
// 	return (
// 		<div className='flex flex-col gap-2'>
// 			<HeaderLink id='coursework' headingType='h1'>Relevant Coursework</HeaderLink>
// 			<div className='bg-surface-container p-5 rounded-md'>
// 				<HeaderLink id='systems' headingType='h4'>Systems Programming</HeaderLink>
// 				<p>
// 					In Systems Programnming, I studied Unix-like CLIs, version control, utilities, files, processes, memory management, system calls, data structures, networking, and concurrency. Class projects included a password cracker that utilises concurrency and parallelism to bruteforce decrypt password hashes, an HTTP client written in C using socket programming, and several C implementations of Linux utilities like tail, seq, time, and tr. I earned an A in this class.
// 				</p>
// 			</div>

// 			<div className='bg-surface-container p-5 rounded-md'>
// 				<HeaderLink id='data-structures' headingType='h4'>Data Structures</HeaderLink>
// 				<p>
// 					In Data Structures, I wrote C implementations of structures and abstract data types such as dynamic arrays, linked lists, hashmaps, and binary search trees. I also wrote Python implementations of several sorting and search algorithms, such as bubblesort, mergesort, and quicksort, and studied their properties, including time and space complexity, stability, and adaptibility.
// 				</p>
// 			</div>

// 			<div className='bg-surface-container p-5 rounded-md'>
// 				<HeaderLink id='logic' headingType='h4'>Logic Design</HeaderLink>
// 				<p>
// 					In Logic Design & Sequential Circuits, I studied boolean algebra, combinational logic, finite & high level state machines, and assembly code.
// 				</p>
// 			</div>

// 			<BuiAccordion header={<span>All Classes</span>} >
// 				<div className='flex flex-col gap-2 pb-5'>
// 					<h4>Junior Fall</h4>
// 					<ul>
// 						<li>Compilers and Language Design</li>
// 						<li>Computer Architecture</li>
// 						<li>Computer Music Programming</li>
// 						<li>Introduction to Artificial Intelligence</li>
// 						<li>Operating System Principles</li>
// 					</ul>
// 					<h4>Sophomore Summer</h4>
// 					<ul>
// 						<li>European History, Politics, and Society</li>
// 						<li>Probability and Statistics</li>
// 					</ul>
// 					<h4>Sophomore Spring</h4>
// 					<ul>
// 						<li>
// 							Intro to Linear Algebra & Differential Equations
// 						</li>
// 						<li>Data Structures</li>
// 						<li>Systems Programming</li>
// 						<li>Logic Design</li>
// 						<li>Music Histories & Cultures II</li>
// 					</ul>
// 					<h4>Sophomore Fall</h4>
// 					<ul>
// 						<li>Calculus III</li>
// 						<li>Engineering Physics II: E&M</li>
// 						<li>Fundamentals of Computing</li>
// 						<li>Discrete Mathematics</li>
// 						<li>Aquinas, Faith, & Wisdom</li>
// 					</ul>
// 					<h4>Freshman Spring</h4>
// 					<ul>
// 						<li>Calculus II</li>
// 						<li>Engineering Physics I: Mechanics</li>
// 						<li>Engineering Programming</li>
// 						<li>Moreau First Year Experience</li>
// 						<li>Theory II: Materials & Techniques of Music</li>
// 						<li>Foundations of Theology</li>
// 					</ul>
// 					<h4>Freshman Fall</h4>
// 					<ul>
// 						<li>Calculus I</li>
// 						<li>Introduction to Chemical Principles</li>
// 						<li>Engineering Design</li>
// 						<li>Moreau First Year Experience</li>
// 						<li>Theory I: Materials & Techniques of Music</li>
// 						<li>How Did I Get Here & Where Am I Going?</li>
// 					</ul>
// 					{/* <h3>Spring</h3>

// 					<h2>Senior</h2>
// 					<h3>Fall</h3>
// 					<h3>Spring</h3> */}
// 				</div>
// 			</BuiAccordion>
// 		</div>

// 	)
// }

function About() {
	return (
		<>
			<HeaderLink id='about' headingType='h1'>About</HeaderLink>
			<p>
				Hello! I'm Sam, a junior at the <a href="https://en.wikipedia.org/wiki/University_of_Notre_Dame" target="_blank" rel="noopener noreferrer">University of Notre Dame</a> majoring in Computer Science and minoring in Music. I'm from <a href="https://en.wikipedia.org/wiki/Dixon,_Illinois#" target="_blank" rel="noopener noreferrer">Dixon, IL</a>, and on campus I'm a resident of <a href="https://en.wikipedia.org/wiki/Sorin_Hall_(University_of_Notre_Dame)" target="_blank" rel="noopener noreferrer">Sorin College</a>.
			</p>
			<br />
			<br />
			<p>
				I'm interested in low-level computing; I'm most proficient in <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">C</a>, and I enjoy studying operating systems, compilers, networking, and security. I've taken an interest in <a href="https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)" target="_blank" rel="noopener noreferrer">Capture The Flag</a> (CTF) challenges, and have been learning software reverse engineering skills to improve at these.
			</p>
			<br />
			<br />
			<p>
				I've also fallen headfirst down the <a href="https://en.wikipedia.org/wiki/Self-hosting_(web_services)" target="_blank" rel="noopener noreferrer">self-hosting</a> rabbit hole. I've spent tons of time reading up on <a href="https://en.wikipedia.org/wiki/TrueNAS" target="_blank" rel="noopener noreferrer">TrueNas</a>, <a href="https://en.wikipedia.org/wiki/Docker_(software)" target="_blank" rel="noopener noreferrer">Docker</a>, and network protocols to set up my NAS. Right now I've got a media server (<a href="https://en.wikipedia.org/wiki/Plex" target="_blank" rel="noopener noreferrer">Plex</a>), image server (<a href="https://immich.app/" target="_blank" rel="noopener noreferrer">Immich</a>), VPN (<a href="https://www.wireguard.com/" target="_blank" rel="noopener noreferrer">WireGuard</a>), reverse proxy (<a href="https://nginxproxymanager.com/" target="_blank" rel="noopener noreferrer">NPM</a>), file backup server (<a href="https://nextcloud.com/" target="_blank" rel="noopener noreferrer">Nextcloud</a>), custom DNS (<a href="https://pi-hole.net/" target="_blank" rel="noopener noreferrer">Pihole</a>), and container manager (<a href="v" target="_blank" rel="noopener noreferrer">Portainer</a>) running on my box.
			</p>
			<br />
			<br />
			<p>
				Besides computing, I also love music. I've worked as a producer on a couple of projects for <a href="https://gorillatuesdayband.com/" target="_blank" rel="noopener noreferrer">Gorilla Tuesday</a>, I'm currently in post-production on an EP I wrote with <a href='https://www.linkedin.com/in/zachary-nuss-059036261/' target="_blank" rel="noopener noreferrer">Zach Nuss</a> which is coming out December 2025, and I've engineered live sound at a couple events on and off campus. I'm an amateur guitarist and pianist, and I'm a music director for <a href='https://notredameday.nd.edu/organizations/unchained-melodies' target="_blank" rel="noopener noreferrer">The Melodies of Notre Dame</a>.
			</p>
			<br />
			<br />
			<p>
				{/* To me, music production is cool because of how grounded it is in math and signaling. It's so fascinating to me to see math and computing be applied to music. Melodyne, for example, using fourier transforms to detect polyphony in raw audio and allows you to target specific notes to modulate or apply forment to them. Convolution reverbs use linear algebra to virtually perfectly simulate the characteristics of any real-world room on a raw audio signal. Saturators add harmonic content to signals to change their timbre. The software implementations of these tools are super interesting to me. I would love to    */}
				I've also had some experience with web development (this website, plus a couple of other event sites), low-code workflow development (<a href="https://learn.microsoft.com/en-us/power-apps/powerapps-overview" target="_blank" rel="noopener noreferrer">Microsoft Power Apps</a>), and Python (various personal projects and classes). I like tinkering and I learn pretty quick, and I like projects which force me to get a little smarter to get the job done.
			</p><br />
			<br />
			<p>
				I like reading (follow me on Goodreads!), running, <a href="https://en.wikipedia.org/wiki/Naruto" target="_blank" rel="noopener noreferrer">Naruto</a>, Naruto running (just kidding), coffee, Chess, Pickleball, Pokemon TCGP, and cooking. My favorite Youtuber is <a href="https://www.youtube.com/veritasium" target="_blank" rel="noopener noreferrer">Veritasium</a>, favorite video game is <a href="https://en.wikipedia.org/wiki/Frostpunk" target="_blank" rel="noopener noreferrer">Frostpunk</a> (<a href="https://en.wikipedia.org/wiki/Tekken" target="_blank" rel="noopener noreferrer">Tekken</a> runner-up), favorite manga is Naruto (duh), favorite superhero is Batman (like, just because he can probably do more pullups than any other superhero), favorite band is <a href="https://open.spotify.com/artist/5ictveRyhWRs8Gt8Dvt1hS?si=drqHba9UReyl5zC-a6NSKw" target="_blank" rel="noopener noreferrer">The Front Bottoms</a> (<a href="https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP?si=3JkL6VwvR5SzHj87Jeo93g" target="_blank" rel="noopener noreferrer">Blink</a> runner-up). If you know what all of those things are, congratulations: we are now best friends. If you don't know what any of those things are, you're on the wrong website, pal. Maybe check out <a href='https://www.youtube.com/watch?v=PLOPygVcaVE' target="_blank" rel="noopener noreferrer">this</a> instead.
			</p>
			<br />
			<br />
			<p>
				I have extensive lawn-mowing experience (thanks, dad).
			</p>
			<br />
			<br />
			<p>
				Please get in touch if you'd like to work with me, or if you just wanna grab coffee and chat about nerd stuff!
			</p>

		</>
	)
}

function ContactCard({
	headshot,
	socials,
}: {
	headshot: string
	socials: Social[]
}) {
	return (
		<>
			<div className='flex flex-col gap-3 items-center justify-center w-full h-fit pt-10 mb-10'>
				<img
					src={headshot}
					className='size-40 rounded-full'
					alt='Headshot of Sam Neisewander'
				/>
				<span className='text-[1.5rem] text-on-surface m-0'>
					Sam Neisewander
				</span>
				<div className='flex flex-row gap-3'>
					{/* ICON BUTTONS */}
					{socials.map(social => (
						<BuiTooltip tabstop={false} key={social.key} text={social.text} color='on-primary' background='primary'>
							<a href={social.link} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon
									icon={social.icon}
									className='text-2xl text-on-surface'>
								</FontAwesomeIcon>
							</a>
						</BuiTooltip>
					))}
				</div>
				<Link to="/blog">Read my blog →</Link>
			</div>
		</>
	)
}

// function Experience() {
// 	return (
// 		<>
// 			<div className='flex flex-col gap-2'>
// 				<HeaderLink headingType='h1' id='experience'>Professional Experience</HeaderLink>

// 				<div className='bg-surface-container p-5 rounded-md flex flex-col gap-2'>
// 					<HeaderLink headingType='h4' id='id-tech'>iD Tech Camps</HeaderLink>
// 					<p><i>Jul 2025 | Lake Forest, IL</i></p>
// 					<p>
// 						As a Course Instructor at iD Tech, I worked with a team of 6-7 instructors and director to teach middle/high school students fundamental STEM concepts in programming, AI, robotics, and design in several week-long summer courses.
// 					</p>

// 					<p>
// 						I taught the class "Python Camp: Intro to Coding & AI", teaching students ages 13-17 the fundamentals of programming and AI in Python, involving projects like designing an RPG battle game using object-oriented programming and creating custom chatbots using the OpenAI API.
// 					</p>
// 					<p>
// 						I also taught "3D Printing Camp with Blender", teaching students ages 10-13 3D printing and Blender modeling basics, culminating in a final design project that the students got to print and take home.
// 					</p>
// 				</div>

// 				<div className='bg-surface-container p-5 rounded-md flex flex-col gap-2'>
// 					<HeaderLink headingType='h4' id='raynor'>Raynor Garage Doors</HeaderLink>
// 					<HeaderLink headingType='h5' id='raynor-is'>Information Systems Intern</HeaderLink>
// 					<p><i>Jul 2023 - Aug 2023 | Dixon IL</i></p>
// 					<p>
// 						As an Information Systems Intern, I worked closely with IS and Marketing leadership on several projects. I designed, developed, and deployed a registration website for the 2025 shareholder convention. I improved maintenance workflow efficiency and visibility by researching and implementing MS Power Apps in collaboration with Maintenance leadership. I collaborated with IS coworkers to execute an org-wide initiative to port user machine backups from an on-premises storage server to the cloud. I wrote and presented an assessment of generative AI tools to the executive team, highlighting their key strengths and weaknesses.
// 					</p>
// 					<HeaderLink headingType='h5' id='raynor-marketing'>Marketing Intern</HeaderLink>
// 					<p><i>Jun 2021 - Jul 2022 | Dixon, IL</i></p>
// 				</div>
// 				<div className='bg-surface-container p-5 rounded-md flex flex-col gap-2'>
// 					<HeaderLink headingType='h4' id='notre-dame'>University of Notre Dame</HeaderLink>
// 					<HeaderLink headingType='h5' id='conversations'>Conversations of Purpose Mentor</HeaderLink>
// 					<p><i>Aug 2024 - Dec 2024 | Notre Dame, IN</i></p>
// 					<p>
// 						As a Conversations of Purpose Mentor, I led weekly group discussions with Freshmen students taking Fr. Keven Grove's Foundations of Theology class. My objective was to challenge the group to deepen their understanding of Scripture and other theological texts through intellectual, personal conversation with their peers.
// 					</p>
// 					<HeaderLink headingType='h5' id='conversations'>Data Structures TA</HeaderLink>
// 					<p><i>Aug 2025 - Dec 2025 | Notre Dame, IN</i></p>
// 					<p>
// 						As a Data Structures TA, I will hold office hours for Prof. Jay Brockman's students.
// 					</p>
// 				</div>
// 			</div>
// 		</>
// 	)
// }
