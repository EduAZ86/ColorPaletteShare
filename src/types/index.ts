import { ReactNode } from "react"

export type ColorPalette = {
    primary_color:string
    secondary_color:string    
    highlight_color:string    
    font_color:string
    rgbPrimary:string
    rgbSecondary:string
    rgbHighlight:string
    rgbFontColor:string
}


export type ThemeContextType = {
    theme: string
    toggleTheme: () => void
    currentTheme: ColorPalette

}
  
export interface ThemeProviderProps {
  children: ReactNode
}

  
