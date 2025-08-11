import { useState, createContext, useContext, ReactNode, useLayoutEffect } from 'react'

type BreakpointState = 'sm' | 'md' | 'lg' | 'xl' | '2xl'


const BreakpointContext = createContext(calcBreakpointState(window.innerWidth));

function BreakpointContextProvider({ children }: { children: ReactNode }) {

    const [breakpointState, setBreakpointState] = useState(calcBreakpointState(window.innerWidth));

    useLayoutEffect(() => {
        const onResize = () => {
            let bp = calcBreakpointState(window.innerWidth)
            setBreakpointState(bp)
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <BreakpointContext.Provider value={breakpointState}>
            {children}
        </BreakpointContext.Provider>
    )
}

function calcBreakpointState(width: number): BreakpointState {
    if (width >= 1536) {
        return '2xl'
    }
    else if (width >= 1280) {
        return 'xl'
        
    }
    else if (width >= 1024) {
        return 'lg'
        
    }
    else if (width >= 768) {
        return 'md'
        
    }
    else return 'sm'
}

const useBreakpointContext = () => {
    return useContext(BreakpointContext)
}

export { BreakpointContextProvider, useBreakpointContext }

