
import { IAboutGroup } from './about.types';

export const aboutGroups: IAboutGroup[] = [
    {
        title: 'Family:',
        description: 'Family is one of the most important things in life! Meet mine!',
    },
    {
        title: 'Candler:',
        photos: [
            { 
                src: 'sam-shortline-candler-aisle-1.jpg',
                description: 'On the SAM Shortline, which runs from Cordele to Plains.'
            },
        ]
    },
    {
        title: 'Grandy & Papa:',
        photos: [
            { 
                src: 'thanksgiving-2018-candler-grandy-papa-2.jpg',
                description: 'Thanksgiving 2018, with Candler'
            },
        ]
    },
    {
        title: 'Amy:',
        photos: [
            { 
                src: 'amy-xinh-dep-1.jpg',
                description: 'My sweet Taro Root :)'
            },
        ]
    },
    {
        title: 'Daddy (Me):',
        photos: [
            { 
                src: 'thanksgiving-2018-joseph-alex-1.jpg',
                description: 'Thanksgiving 2018, with Alex (Dan and Brandy\'s daughter)'
            },
        ]
    },
    {
        description: 'There\'s more ... need pictures please :)',
        links: [
            {
                label: 'email me',
                href: 'mailto:joseph.gill.atlanta@gmail.com'
            },
            {
                label: 'photo gallery',
                href: '/photos',
                isRouterLink: true
            }
        ]
    }
];