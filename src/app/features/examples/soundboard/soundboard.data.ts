import { ISoundBoardCell } from './soundboard.types';

export const soundDataFromKey = (key: string): ISoundBoardCell[] => {
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

export const numberSoundBoard = (maxValue?: number): ISoundBoardCell[] => {
    const numbers: number[] = Array.from(Array(100).keys());
    return numbers.map(number => {
        const realNumber = number + 1;
        return { label: `${realNumber}`, sound: `numbers/${realNumber}.wav` };
      });
} 

export const alphabetUpperSoundBoard = (): ISoundBoardCell[] => {
    const alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet.map(letter => {
        return { label: letter.toUpperCase(), sound: `alphabet/${letter.toUpperCase()}.wav` };
    });
} 

export const alphabetLowerSoundBoard = (): ISoundBoardCell[] => {
    const alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet.map(letter => {
        return { label: letter, sound: `alphabet/${letter.toUpperCase()}.wav` };
    });
} 



