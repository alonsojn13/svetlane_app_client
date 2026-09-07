export default function languageCategory(userInfo){

    let levelUser;

    const categories = [
        {level: "A1", name: "Beginner"},
        {level: "A2", name: "Elementary"},
        {level: "B1", name: "Intermediate"},
        {level: "B2", name: "Upper-Intermediate"},
        {level: "C1", name: "Advanced"},
        {level: "C2", name: "Proficient"},
    ]

    for(let i = 0; i < categories.length; i++){
        if(categories[i].level == userInfo.level){
            levelUser = categories[i].name;
        }
    }

    return levelUser;

}