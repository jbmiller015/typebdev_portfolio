import skills from '../info/skills.json';


export default function replaceText(){
    const wordMap = {};

    const extract = () => {
        Object.entries(skills).forEach((skill, i) => {
            const langs = skill[1].languages;
            const skills = skill[1].frameworks;
            if(skills) {
                Object.entries(skills).forEach((framework) => {
                    wordMap[framework[0]] = framework[1];
                })
            }
            if(langs) {
                Object.entries(langs).forEach((lang) => {
                    wordMap[lang[0]] = lang[1];
                })
            }
        })
    }

    const replace = (text) => {

    }

    return{extract};
};
