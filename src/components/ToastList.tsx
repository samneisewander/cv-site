import { Toast } from "@base-ui-components/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * Handles the template DOM elements and styling for Toast notifications.
 */
export default function ToastList() {
    const { toasts } = Toast.useToastManager();
    return toasts.map((toast) => (
        <Toast.Root
            key={toast.id}
            toast={toast}
            className="hover:cursor-grab absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(var(--toast-index)*-15px)))_scale(calc(1-(var(--toast-index)*0.1)))] rounded-lg  bg-primary bg-clip-padding p-4 shadow-lg transition-all [transition-property:opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))] data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]"
            style={{
                ['--gap' as string]: '1rem',
                ['--offset-y' as string]:
                    'calc(var(--toast-offset-y) * -1 + (var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y))',
            }}
        >
            <Toast.Title className="text-sm m-0 text-on-primary leading-5 font-medium" />
            <Toast.Description className="text-sm leading-5 text-on-primary" />
            <Toast.Close
                className="absolute top-2 right-2 flex h-5 w-5 text-sm items-center justify-center rounded border-none bg-transparent text-on-primary hover:opacity-90 hover:cursor-pointer "
                aria-label="Close"
            >
                <FontAwesomeIcon icon={faCircleXmark} />
            </Toast.Close>
        </Toast.Root>
    ));
}