type HankMessage = {
    id: string;
    text: string;
    source: 'cameo'|'breakingBad'|'betterCallSaul';
    date?: Date;
};

// jsdocs
/**
 * Hank Schrader's most iconic and sussy baka quotes. More to come.
 * @type {HankMessage}
 * @constant
*/
export const messages: HankMessage[] = [
    {
        id: 'sussyBaka',
        text: "Walt, I don't know man, you've been seeming sus lately. "
            + "It's almost like we have an impostor among us. "
            + "I saw that you wanted, don't lie to me Walt! You... sussy baka!",
        source: 'cameo',
        date: new Date('May 12 2021')
    },
    {
        id: 'kraccBaccShorts',
        text: "Hey attention all sussy bakas, Hank Schrader here with the DEA. "
            + "This is your first warning to check out the new official KRACC BACC meme channel. "
            + "Kracc Bacc. Shorts. Alright? On YouTube, for the funniest goofy ahhhhhhhh "
            + "Breaking Bad memes and the most videos of all time. "
            + "So stop playing Overwatch, get off Apex Legends "
            + "(I know it's hard, I'm a bit of a sus gamer myself, not gonna lie). "
            + "Stop watching Anime for sure, take off the fur suit, yeah, "
            + "and check out Kracc Bacc Shorts, alright? "
            + "If you don't, the DEA will catch you and turn you "
            + "into pimento cheese spread. Yeah, pimento cheese spread for kid named finger. "
            + "Sussy, sussy, SUSSY BAKA!",
        source: 'cameo',
        date: new Date('Jan 29 2022')
    }
];

export const message = () => messages[Math.floor(Math.random() * messages.length)];