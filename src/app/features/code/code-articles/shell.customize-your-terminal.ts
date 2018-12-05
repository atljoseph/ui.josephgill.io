
import { ICodeArticle } from '../code.types';

export const shellCustomizeYourTerminalData: ICodeArticle[] = [
    {
        title: 'Customize your terminal',
        description: 'Need something a little more friendly when you open your terminal?',
        routeKey: 'customize-your-terminal',
        tags: ['linux', 'unix', 'shell', 'bash'],
        coverPhotoSrc: 'custom-terminal-earthing.jpg',
        contentGroups: [
            {
                title: `Here\'s how to do it!`,
                notes: ['This will work on Unix (Mac) and Linux.'],
            },
            {
                title: '1. Open your ".bash_profile" file (using "vi"):',
                codeBlocks: [
                    {
                        code: 'vi ~/.bash_profile',
                        notes: [
                            'Hit "i" to ENTER edit mode.',
                            'Use the arrows to navigate.',
                            'Type in your code just like any other text editor.',
                        ]
                    },
                ]
            },
            {
                title: '2. Copy this code into the file:',
                codeBlocks: [
                    {
                        code: 'export PS1="EARTHING \\u @ \w $ "'
                    }
                ]
            },
            {
                title: '3. Save the file (using "vi"):',
                codeBlocks: [
                    {
                        notes: [
                            'Hit "esc" to EXIT edit mode.',
                            'Type ":wq" to save and close ("write quit").',
                            'Type ":q" to close without saving ("quit").'
                        ]
                    },
                ],
            },
            {
                title: '4. See the result:',
                description: 'Close & Reopen your Terminal (or Restart if no GUI).',
                photos: [{
                    src: 'custom-terminal-earthing.jpg',
                }],
            },
        ],
    }
];
