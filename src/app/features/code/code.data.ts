
import { ICodeArticle } from './code.types';

export const codeArticlesData: ICodeArticle[] = [
    {
        title: 'Directory of a script file',
        routeKey: 'get-shell-script-file-directory-inside-script-file',
        tags: ['shell', 'bash'],
        coverCodeBlock: 'THIS_DIR="$(dirname ${BASH_SOURCE[0]})"',
        coverPhotoSrc: 'dirname-bashsource-0.jpg',
        contentGroups: [
            {
                description: `Ever written a script that needs to know what directory it\'s located within?`,
            },
            {
                title: `Here\'s how to do it!`,
                notes: ['This will work on Unix and Linux (and in Git Bash on Windows).'],
            },
            {
                title: '1. Create a new script file (using "vi"):',
                codeBlocks: [
                    {
                        code: 'vi ~/test-script.sh',
                        notes: [
                            'Hit "i" to enter edit (insert) mode.',
                            'Use the arrows to navigate.',
                        ]
                    },
                ]
            },
            {
                title: '2. Copy this code into the file:',
                codeBlocks: [
                    {
                        code: 'THIS_DIR="\$(dirname \${BASH_SOURCE[0]}) \ncd "$THISDIR" \npwd'
                    }
                ]
            },
            {
                title: '3. Save the script (using "vi"):',
                codeBlocks: [
                    {
                        notes: [
                            'Hit "esc" to exit edit (insert) mode.',
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

    // .bash_profile - customize env
    // shell / bash functions

];
