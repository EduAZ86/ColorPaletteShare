export const size = {
    mobileMax: '600px',
    tablet: '769px',
    smallDesktop: '769px',
    desktop: '993px',
    fullHD: '1201px',
}

export const device = {
    mobile: `(max-width: ${size.mobileMax})`,
    tablet: `(min-width: ${size.tablet}) `,
    smallDesktop: `(min-width: ${size.smallDesktop})`,
    desktop: `(min-width: ${size.desktop})`,
    fullHD: `(min-width: ${size.fullHD})`,
}