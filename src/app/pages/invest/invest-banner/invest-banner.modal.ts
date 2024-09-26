export interface InvestBanner  {
    mainImg: string,
    logo: string,
    description: string,
    media: InvestBannerMedia
}

interface InvestBannerMedia {
    website: string,
    twitter: string,
    facebook: string,
    instagram: string,
    tiktok: string,
    telegram:string,
    youtube: string
}