import React from 'react';
import { Container, Title, Text } from './styles';

const About = () => {
  return (
    <Container>
      <Title>About</Title>
      <Text>
        This project aims to help people who are trying to memorize hiragana and
        katakana (soon), using a technique similar to the use of flashcards.
        Basically the system shows a kana and the user has to try to remember
        and type his Romãji.
      </Text>
      <Text>
        Created by <a href="https://luccasavila.dev?lang=en">Luccas Ávila</a> -
        hey@luccasavila.dev
      </Text>
      <Text>
        Distributed under the MIT License. See{' '}
        <a href="https://github.com/LuccasAvila/learn-kana/blob/master/LICENSE">
          LICENSE
        </a>{' '}
        for more information. <br />
        The code for this project is{' '}
        <a href="https://github.com/LuccasAvila/learn-kana">
          available at Github
        </a>
      </Text>
    </Container>
  );
};

export default About;
