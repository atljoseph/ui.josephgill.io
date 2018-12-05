
import { ICodeArticle } from '../code.types';

export const shellDirectoryOfAScriptFileData: ICodeArticle[] = [
    {
        title: 'Directory of a script file',
        description: `Ever written a script that needs to know what directory it\'s located within?`,
        routeKey: 'directory-of-a-script-file',
        tags: ['linux', 'unix', 'shell', 'bash'],
        coverCodeBlock: 'THIS_DIR="$(dirname ${BASH_SOURCE[0]})"',
        // coverPhotoSrc: 'dirname-bashsource-0.jpg',
        contentGroups: [
            {
                title: `Here\'s how to do it!`,
                notes: ['This will work on Unix (Mac) and Linux.'],
            },
            {
                title: '1. Create a new script file (using "vi"):',
                codeBlocks: [
                    {
                        code: 'vi ~/test-script.sh',
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
                        code: 'THIS_DIR="\$(dirname \${BASH_SOURCE[0]}) \ncd "$THIS_DIR" \npwd'
                    }
                ]
            },
            {
                title: '3. Save the script (using "vi"):',
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
                title: '4. Run the script:',
                codeBlocks: [
                    {
                        description: 'Move to a some other folder (to prove the point):',
                        code: 'cd /'
                    },
                    { code: 'sh ~/test-script.sh' },
                ],
            },
            {
                title: '5. See the result:',
                description: 'The directory name of the script file is printed in the terminal window!',
                photos: [{
                    src: 'dirname-bashsource-0.jpg',
                    notes: [
                        'Normally "pwd" would print the executing directory ("/" in our case).'
                    ]
                }],
                
            }
        ],
    }
    // sudo -i / sudo -iu centos
    // how to use 'vi'

    // shell / bash functions

];
