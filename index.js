//generate a random number
const generateRandomNumber=n=> Math.floor(Math.random()*n);
//sentence storage array
const sentenceStorage = [];
//options to create sentences with
const options={
    luck: ['lucky','unlucky','very lucky','deathly unlucky'],
    game: ['Minecraft','Counter Strike', 'Destiny','DOTA 2','League of Legends','Diablo','Warcraft'],
    mood: ['happy','sad','angry','excited','depressed']
};
//for loop to create sentences
for(let o in options){
    let optionID = generateRandomNumber(options[o].length);
    //options object property sentence creation
    switch(o){
        case 'luck':
            sentenceStorage.push(`Right now you are ${options[o][optionID]}`);
            break
        case 'game':
            sentenceStorage.push(`Recommended game is: ${options[o][optionID]}`);
            break
        case 'mood':
            sentenceStorage.push(`We predict you will feel ${options[o][optionID]} after playing this game...`);
            break
        default:
            sentenceStorage.push('Something went wrong!');
    }
}
//formatting the sentences
const formatSentences=arr=>{
    const formattedSentences = arr.join('\n');
    console.log(formattedSentences);
}
formatSentences(sentenceStorage);