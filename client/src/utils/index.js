import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const RandomPrompt = surpriseMePrompts[randomIndex];
    if (RandomPrompt == prompt) return getRandomPrompt(prompt);

    return RandomPrompt;
}