'use client'
import { useState, useEffect} from 'react'
import { device } from '@/constants/devices'

const useMediaQuery = (query:string):boolean => {
    const [matches, setMatches] = useState<boolean>(false)
    
    useEffect(()=>{
        const device = window.matchMedia(query)
        if (device.matches !== matches) {
            setMatches(device.matches)
        }
        const listener = () => {
            setMatches(device.matches)
        }
        window.addEventListener('resize', listener)
        return () => window.removeEventListener('resize',listener)
    },[matches,query])

    return matches
}

export const useDevice = ():string => {
    const isDesktop:boolean = useMediaQuery(device.desktop);
    const isTablet = useMediaQuery(device.tablet);
    const isFullHD = useMediaQuery(device.fullHD);
    const isSmallDesktop = useMediaQuery(device.smallDesktop);
    const isMobile = useMediaQuery(device.mobile);
    if (isFullHD) return "fullHD";
    if (isDesktop) return "desktop";
    if (isSmallDesktop) return "smallDesktop";
    if (isTablet) return "tablet";
    if (isMobile) return "mobile";
    return "mobile";
}