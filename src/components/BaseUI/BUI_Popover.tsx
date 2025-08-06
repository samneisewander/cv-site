import M3IconButton from "../M3IconButton"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { Popover } from '@base-ui-components/react'
import { ReactNode } from "react"

export default function BuiPopver({ children, icon, side = 'top' }: { children: ReactNode, icon: IconDefinition, side?: 'top' | 'bottom' | 'left' | 'right', }) {
  return (
    <Popover.Root>
      <Popover.Trigger render={<div></div>} nativeButton={false}>
        <M3IconButton icon={icon}></M3IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={20} side={side}>
          <Popover.Popup className="origin-[var(--transform-origin)] rounded-lg bg-primary p-1 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
            <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              <ArrowSvg />
            </Popover.Arrow>
            {children}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-primary"
      />
    </svg>
  );
}
