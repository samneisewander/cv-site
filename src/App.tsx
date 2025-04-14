import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import samNeisewanderHeadshot from './assets/headshot.webp';

function App() {
  return (
    <div className='bg-stone-100 dark:bg-stone-950 w-lvw min-h-lvh h-fit flex flex-col items-center'>
      <div className='min-w-2xl w-1/2 h-full p-5 flex flex-col rounded-lg'>
        <div className='h-30'></div>
        <ContactCard headshot={samNeisewanderHeadshot}></ContactCard>
        {/* <h1 className='text-stone-600 dark:text-stone-300'>Heading 1</h1>
        <h2 className='text-stone-600 dark:text-stone-300'>Heading 2</h2>
        <h3 className='text-stone-600 dark:text-stone-300'>Heading 3</h3>
        <h4 className='text-stone-600 dark:text-stone-300'>Heading 4</h4>
        <p className='text-stone-600 dark:text-stone-300'>Paragraph</p> */}
      </div>
    </div>
  )
}

function ContactCard({ headshot }: { headshot: string }){
  return (
    <>
      <div className="flex flex-col gap-3 items-center">
        <img src={headshot} className="size-40 rounded-4xl" alt="Headshot of Sam Neisewander" />
        <h3 className='text-stone-600 dark:text-stone-300'>Sam Neisewander</h3>
        <div className='flex flex-row gap-3'>
          <a href="https://www.linkedin.com/in/samuelneisewander" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className='text-stone-100 text-2xl'></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/samneisewander" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className='text-stone-100 text-2xl'></FontAwesomeIcon>
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faSpotify} className='text-stone-100 text-2xl'></FontAwesomeIcon>
          </a>

        </div>
      </div>
    </>
  )
}

export default App
