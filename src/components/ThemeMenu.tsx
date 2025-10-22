import { BuiTooltip, BuiPopover } from "./BaseUI"
import { useTheme } from "m3-palettes"
import { HexColorPicker } from "react-colorful"
import { faPalette, faSun, faMoon, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"
import M3IconButton from "./M3IconButton"
import { Slider } from "@base-ui-components/react"

/**
 * Function responsible for drawing the island that contains color
 * theme controls and accessibility settings such as the level of contrast.
 *  
 * @returns A JSX Element containing the island portion of the page.
 */

export default function ThemeMenu({ vertical, side, className }: { vertical: boolean, side: 'top' | 'left' | 'bottom' | 'right', className?: string }) {
    /* MATERIAL 3 COLOR */
    const { state, actions } = useTheme()
    const { primary, darkMode, contrast, scheme } = state.theme
    const { setThemeState, generateThemeCss } = actions

    const handleChangeComplete = (newColor: string) => {
        let theme = {
            primary: newColor,
            darkMode: darkMode,
            contrast: contrast,
            scheme: scheme
        }
        setThemeState(theme)
        generateThemeCss(theme)
    }

    const handleDarkModeToggle = () => {
        let theme = {
            primary: primary,
            darkMode: !darkMode,
            contrast: contrast,
            scheme: scheme
        }
        setThemeState(theme)
        generateThemeCss(theme)
    }

    const handleContrastChange = (value: number) => {
        let theme = {
            primary: primary,
            darkMode: darkMode,
            contrast: value,
            scheme: scheme
        }
        setThemeState(theme)
        generateThemeCss(theme)
    }

    return (
        <div
            className={`w-fit h-fit pointer-events-auto rounded-full flex ${vertical ? 'flex-col' : 'flex-row'} p-2 items-center justify-center gap-3 ` + className}>
            <BuiTooltip
                color='on-primary'
                background='primary'
                text='Themes'
                side={side}
                tabstop={true}
                offset={20}>
                <BuiPopover icon={faPalette} side={side}>
                    <HexColorPicker onChange={handleChangeComplete} color={primary} />
                </BuiPopover>
            </BuiTooltip>
            <BuiTooltip
                color='on-primary'
                background='primary'
                text='Toggle dark mode'
                side={side}
                tabstop={true}
                offset={20}>
                <M3IconButton
                    clickHandler={handleDarkModeToggle}
                    icon={darkMode ? faSun : faMoon}></M3IconButton>
            </BuiTooltip>
            <BuiTooltip
                color='on-primary'
                background='primary'
                text='Set contrast level'
                side={side}
                tabstop={true}
                offset={20}>
                <BuiPopover icon={faCircleHalfStroke} side={side}>
                    <Slider.Root defaultValue={0} min={-1} max={1} step={.1} onValueChange={handleContrastChange}>
                        <Slider.Control className="flex w-56 touch-none items-center py-3 select-none">
                            <Slider.Track className="h-1 w-full rounded bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200 select-none">
                                <Slider.Indicator className="rounded bg-gray-700 select-none" />
                                <Slider.Thumb className="size-4 rounded-full bg-white outline outline-gray-300 select-none  focus-visible:outline-2 focus-visible:outline-blue-800" />
                            </Slider.Track>
                        </Slider.Control>
                    </Slider.Root>
                </BuiPopover>
            </BuiTooltip>
        </div>
    )
}



