import React, {useState, useEffect} from 'react';
import {Container, Kana, Text, KanaInput, Answer} from './styles';
import kanaList from '../../utils/kana';

const Main = () => {
    const [kana, setKana] = useState('');
    const [correct, setCorrect] = useState(true);

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

    useEffect(() => {
        _changeKana();
    }, []);

    return(
        <Container>
            <Kana>{kana}</Kana>
            <Text>What is this letter in rõmaji?</Text>
            <KanaInput />
            {
                correct !== null && 
                <Answer correct={correct}><span>Correct!</span> <b>あ</b> is <b>a</b> on hiragana</Answer>
            }
        </Container>
    );
}

export default Main;