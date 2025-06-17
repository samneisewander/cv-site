import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import BuiTooltip from "./BaseUI/BUI_Tooltip";

export default function HeaderLink({ text, id }: { text: string, id: string }) {

    const [icon, setIcon] = useState(faHashtag)

    const clickHandler = async () => {
        await navigator.clipboard.writeText(window.location.origin + '/#' + id)
        setIcon(faCheck)
    }

    const mouseLeaveHandler = () => {
        timeout(80).then(() => {setIcon(faHashtag)})
    }

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    return(
        <div className="flex flex-row gap-5 items-center align-baseline group" onMouseLeave={mouseLeaveHandler}>
            <h1 id={id} className="w-fit">{text}</h1>
            <BuiTooltip text='Copy link to section' side='top'>
                <FontAwesomeIcon onClick={clickHandler} icon={icon} className="text-xl \ text-transparent transition group-hover:text-on-surface focus:text-on-surface hover:cursor-pointer relative top-[2px]"></FontAwesomeIcon>
            </BuiTooltip>
        </div>
    )
}