import React, {useState, useEffect} from 'react';
import {Container, Kana, Text, KanaInput, Answer} from './styles';
import kanaList from '../../utils/kana';

const Main = () => {

    // Return a random kana
    const _randomKana = () => {
        const { hiragana } = kanaList;

        const syllabary = hiragana[Math.floor(Math.random() * hiragana.length)];
        const syllable = Object.keys(syllabary);

        return syllable[Math.floor(Math.random() * syllable.length)];
    }

    const [kana, setKana] = useState(_randomKana());

    return(
        <Container>
            <Kana>{kana}</Kana>
            <Text>What is this letter in rõmaji?</Text>
            <KanaInput />
            <Answer correct><span>Correct!</span> <b>あ</b> is <b>a</b> on hiragana</Answer>
        </Container>
    );
}

export default Main;