import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import BuiTooltip from "./BaseUI/BUI_Tooltip";
import { Toast } from "@base-ui-components/react";
import ToastList from "./ToastList";

/**
 * A section header that includes a button that copies the link to that section
 * to the user's clipboard. Sends a notification to the app's toast provider on click.
 * 
 * @param id - The classId to assign to header HTML element. Also used in the URL string.
 */
export default function HeaderLink(
    {
        children, 
        id, 
        headingType 
    }: 
    { 
        children: string, 
        id: string, 
        headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) {

    const [icon, setIcon] = useState(faHashtag)
    const toastManager = Toast.useToastManager()
    const navigate = useNavigate()

    const clickHandler = async () => {
        toastManager.add({
            title: `Section link copied!`,
            description: 'Visit this link to jump to this section.',
        });
        await navigator.clipboard.writeText(window.location.origin + '/#' + id)
        navigate('/#' + id, { replace: true });

        setIcon(faCheck)
    }

    const mouseLeaveHandler = () => {
        timeout(80).then(() => { setIcon(faHashtag) })
    }

    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }

    let headingElement

    switch (headingType) {
        case 'h1':
            headingElement = <h1 id={id}>{children}</h1>
            break;
        case 'h2':
            headingElement = <h2 id={id}>{children}</h2>
            break;
        case 'h3':
            headingElement = <h3 id={id}>{children}</h3>
            break;
        case 'h4':
            headingElement = <h4 id={id}>{children}</h4>
            break;
        case 'h5':
            headingElement = <h5 id={id}>{children}</h5>
            break;
        case 'h6':
            headingElement = <h6 id={id}>{children}</h6>
            break;
    }

    return (
        <>
            <div className="flex flex-row gap-5 items-center align-baseline group" onMouseLeave={mouseLeaveHandler}>
                {headingElement}
                <BuiTooltip tabstop={false} text='Copy link to section' side='top'>
                    <FontAwesomeIcon onClick={clickHandler} icon={icon} className="text-xl \ text-transparent transition group-hover:text-on-surface focus:text-on-surface hover:cursor-pointer relative top-[2px]"></FontAwesomeIcon>
                </BuiTooltip>
            </div>
            <Toast.Portal>
                <Toast.Viewport className="fixed top-auto right-[1rem] bottom-[1rem] mx-auto flex w-[250px] sm:right-[2rem] sm:bottom-[2rem] sm:w-[300px]">
                    <ToastList />
                </Toast.Viewport>
            </Toast.Portal>
        </>
    )
}

