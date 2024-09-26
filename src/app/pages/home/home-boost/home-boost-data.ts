import { HomeBoostItem } from "./home-boost.model"

const homeBoostItems:HomeBoostItem[] = 
[
    {
        id: 'full_energy',
        title: 'Full Energy',
        subtitle: '6/6',
        iconPath: 'assets/home/full-energy.png',
        imgSrc: 'assets/home/full-energy-img.png',
        subtitlePopup: 'Refill your energy instantly and keep collecting points swiftly.',
        cost: 'Free',
        
    },
    {
        id: 'turbo',
        title: 'Turbo',
        subtitle: '50,000',
        iconPath: 'assets/home/turbo.png',
        imgSrc: 'assets/home/turbo-img.png',
        subtitlePopup: 'Refill your energy 2x times faster for next 10 minutes.',
        cost: '50,000',
        logoPath:'assets/logo/logo.png',
    },
    {
        id: 'multi_tap',
        title: 'Multi-tap',
        subtitle: '50,000',
        iconPath: 'assets/home/multi-tap.png',
        imgSrc: 'assets/home/multi-tap-img.png',
        subtitlePopup: 'Increase the amount of love points you receive per tap.',
        subtitle2Val: '1',
        subtitle2: 'for tap',
        cost: '50,000',
        lvl: 'lvl. 1',
        logoPath:'assets/logo/logo.png',
    },
    {
        id: 'energy_capacity',
        title: 'Energy Capacity',
        subtitle: '100,000',
        iconPath: 'assets/home/energy-capacity.png',
        imgSrc: 'assets/home/energy-capacity-img.png',
        subtitlePopup: 'Increase the capacity of energy to store.',
        subtitle2Val: '+00',
        subtitle2: 'energy capacity',
        cost: '1,000,000',
        lvl: 'lvl. 1',
        logoPath:'assets/logo/logo.png',
    }
]

export default homeBoostItems