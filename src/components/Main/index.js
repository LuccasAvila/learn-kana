import React, {useState, useEffect} from 'react';
import {Container, Kana, Text, KanaInput, Answer} from './styles';
import kanaList from '../../utils/kana';

const Main = () => {
    const [kana, setKana] = useState('');
    const [kanaInput, setKanaInput] = useState('');
    const [correct, setCorrect] = useState(null);
    const [answer, setAnswer] = useState('');

    const _hiraganaToRomaji = (word) => {
        let translated = "";
        const { hiragana } = kanaList;
        for(let i = 0; i < word.length; i++) {
            let syllabe = hiragana.find((item) => {
                let y = item[word[i]];
                return y;
            });
            translated += syllabe[word[i]];
        }

        return translated;
    }

    // Return a random kana
    const _randomKana = () => {
        const { hiragana } = kanaList;

        const syllabary = hiragana[Math.floor(Math.random() * hiragana.length)];
        const syllable = Object.keys(syllabary);

        return syllable[Math.floor(Math.random() * syllable.length)];
    }

    // Change the kana
    const _changeKana = () => {
        const newKana = _randomKana();

        // Don't repeat the previous kana
        if(newKana === kana) {
            _changeKana();
            return;
        }

        setKana(newKana);
    }

    const _verifyKana = (e) => {
        e.preventDefault();
        const currentKana = _hiraganaToRomaji(kana);
        setCorrect(kanaInput.toLowerCase() === currentKana);
        setAnswer(`${kana} is ${currentKana} on hiragana`);
        setKanaInput('');
        _changeKana();
    }

    useEffect(() => {
        _changeKana();
    }, []);

    return(
        <Container onSubmit={_verifyKana}>
            <Kana>{kana}</Kana>
            <Text>What is this letter in rõmaji?</Text>
            <KanaInput value={kanaInput} onChange={e => setKanaInput(e.target.value)}/>
            {
                correct !== null && 
                <Answer correct={correct}><span>{correct ? 'Correct' : 'Wrong'}!</span> {answer}</Answer>
            }
        </Container>
    );
}

export default Main;