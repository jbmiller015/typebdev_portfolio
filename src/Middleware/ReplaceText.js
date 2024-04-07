import skills from '../Info/skills.json';
import reactStringReplace from 'react-string-replace';
import TextPopup from "../components/popups/TextPopup";

export default function replaceText() {
    const wordMap = {};

    const extract = () => {
        Object.entries(skills).forEach((skill, i) => {
            const langs = skill[1].languages;
            const skills = skill[1].frameworks;
            if (skills) {
                Object.entries(skills).forEach((framework) => {
                    wordMap[framework[0]] = framework[1];
                })
            }
            if (langs) {
                Object.entries(langs).forEach((lang) => {
                    wordMap[lang[0]] = lang[1];
                })
            }
        })
    }

    const replace = (text) => {
        if (Array.isArray(text)) {
            text = text.map((desc) => {
                for (let st in wordMap) {
                    desc = reactStringReplace(desc, st, (match, i) => {
                        if (match && wordMap[st].description)
                            return <TextPopup word={st} data={wordMap[st]} key={match + i}/>
                    })
                }
                return desc;
            })
        } else {
            console.log(wordMap[text])
            if (wordMap[text]) {
                text = reactStringReplace(text, text, (match, i) => {
                    if (match && wordMap[text].description)
                        return <TextPopup word={text} data={wordMap[text]} key={match + i}/>
                })
            }
        }

        return text;
    }

    return {extract, replace};
};
