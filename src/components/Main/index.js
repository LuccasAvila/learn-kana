import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Container, Kana, Text, KanaInput, Answer } from './styles';
import { KanaContext } from '../../context/KanaContext';
import kanaList from '../../utils/kana';

const Main = () => {
  const [kana, setKana] = useState('');
  const [kanaInput, setKanaInput] = useState('');
  const [correct, setCorrect] = useState(null);
  const [answer, setAnswer] = useState('');

  const context = useContext(KanaContext);

  const _kanaToRomaji = (word, type = 'hiragana') => {
    let translated = '';
    const kana = kanaList;
    const kanaSelected = kanaList[type];
    for (let i = 0; i < word.length; i++) {
      let syllabe = kanaSelected.find(item => {
        let y = item[word[i]];
        return y;
      });
      translated += syllabe[word[i]];
    }

    return translated;
  };

  // Return a random kana
  const _randomKana = () => {
    const kana = kanaList;
    const kanaSelected = context.hiraganaSelected
      ? kana['hiragana']
      : kana['katakana'];

    const syllabary =
      kanaSelected[Math.floor(Math.random() * kanaSelected.length)];
    const syllable = Object.keys(syllabary);

    return syllable[Math.floor(Math.random() * syllable.length)];
  };

  // Change the kana
  const _changeKana = useCallback(() => {
    const newKana = _randomKana();

    // Don't repeat the previous kana
    setKana(oldKana => (oldKana !== newKana ? newKana : _changeKana()));
  }, [context]);

  const _verifyKana = e => {
    e.preventDefault();
    const kanaSelected = context.hiraganaSelected ? 'hiragana' : 'katakana';
    const currentKana = _kanaToRomaji(kana, kanaSelected);
    setCorrect(kanaInput.toLowerCase() === currentKana);
    setAnswer(`${kana} is ${currentKana} on ${kanaSelected}`);
    setKanaInput('');
    _changeKana();
  };

  useEffect(() => {
    _changeKana();
  }, [_changeKana]);

  return (
    <Container onSubmit={_verifyKana}>
      <Kana>{kana}</Kana>
      <Text>
        What is this {context.hiraganaSelected ? 'hiragana' : 'katakana'} in
        rõmaji?
      </Text>
      <KanaInput
        value={kanaInput}
        onChange={e => setKanaInput(e.target.value)}
      />
      {correct !== null && (
        <Answer correct={correct}>
          <span>{correct ? 'Correct' : 'Wrong'}!</span> {answer}
        </Answer>
      )}
    </Container>
  );
};

export default Main;
