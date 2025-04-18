import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function M3IconButton({icon, clickHandler = () => {} }: {icon: IconDefinition, clickHandler?: () => any }) {
    return (
        <div className="flex items-center justify-center rounded-full size-[40px] bg-primary text-[24px] text-on-primary">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <div itemID="state-layer" onClick={clickHandler} className="absolute rounded-full size-[40px] transition-all duration-200 hover:bg-surface/[.08] active:animate-ping active:bg-on-primary active:text-on-primary hover:cursor-pointer">
            </div>
        </div>
    )
}