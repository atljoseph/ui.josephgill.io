import { ISoundboardCell } from './soundboard2.types';

export const soundDataFromKey = (key: string): ISoundboardCell[] => {
    if (key.toLowerCase() === 'alphabet::upper') {
        return alphabetUpperSoundBoard();
    }
    if (key.toLowerCase() === 'alphabet::lower') {
        return alphabetLowerSoundBoard();
    }
    if (key.toLowerCase() === 'numbers') {
        return numberSoundBoard();
    }
}

export const numberSoundBoard = (maxValue?: number): ISoundboardCell[] => {
    const numbers: number[] = Array.from(Array(100).keys());
    return numbers.map(number => {
        const realNumber = number + 1;
        return { 
            labelFront: `${realNumber}`, 
            labelBack: `${realNumber}`, 
            soundFlip: `numbers/${realNumber}.wav`,
            soundClick: `numbers/${realNumber}.wav`,
            isPlaceholder: false
        };
      });
} 

export const alphabetUpperSoundBoard = (): ISoundboardCell[] => {
    const alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet.map(letter => {
        return { 
            labelFront: letter.toUpperCase(), 
            labelBack: letter.toLowerCase(), 
            soundFlip: `alphabet/${letter.toUpperCase()}.wav`,
            soundClick: `alphabet/${letter.toUpperCase()}.wav`, 
            isPlaceholder: false
        };
    });
} 

export const alphabetLowerSoundBoard = (): ISoundboardCell[] => {
    const alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet.map(letter => {
        return { 
            labelFront: letter.toLowerCase(), 
            labelBack: letter.toUpperCase(), 
            soundFlip: `alphabet/${letter.toUpperCase()}.wav`,
            soundClick: `alphabet/${letter.toUpperCase()}.wav`, 
            isPlaceholder: false
        };
    });
} 



