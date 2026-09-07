import frFlag from '@/Assets/icons/frFlag.svg';
import spFlag from '@/Assets/icons/spFlag.svg';
import ukFlag from '@/Assets/icons/ukFlag.svg';


export default function imgFlag(userInfo) {

    let userLanguageLearningFlag;

    const flags = [
        { language: "EN", flag: ukFlag },
        { language: "ES", flag: spFlag },
        { language: "FR", flag: frFlag }
    ];

    for (let i = 0; i < flags.length; i++) {
        if (flags[i].language == userInfo.targetLanguageCode) {
            userLanguageLearningFlag = flags[i].flag
        }
    }

    return userLanguageLearningFlag;
}