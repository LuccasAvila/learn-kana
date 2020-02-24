import React from 'react';
import {Container, Kana, Text, KanaInput, Answer} from './styles';

const Main = () => {
    return(
        <Container>
            <Kana>あ</Kana>
            <Text>What is this letter in rõmaji?</Text>
            <KanaInput />
            <Answer correct><span>Correct!</span> <b>あ</b> is <b>a</b> on hiragana</Answer>
        </Container>
    );
}

export default Main;