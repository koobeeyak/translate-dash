import React from 'react';

import ClickNav from './ClickNav';
import TitleHeader from './TitleHeader';
import LoadingGif from './LoadingGif';

export default ({
  translationInputText,
  updateTranslationInputText,
  postTranslationRequest,
  changeInterface,
  areTranslationsLoading
 }) => (
  <div className="translate_input">
    <ClickNav
      text="All Translations >>"
      orientation="right"
      onClick={() => changeInterface('translateTable')}
    />
    <TitleHeader />
    {areTranslationsLoading && <LoadingGif />}
    {
      !areTranslationsLoading &&
      <div>
        <input
          className="translate_input__input--standard"
          type="text"
          name="translate_input"
          value={translationInputText}
          onChange={text => updateTranslationInputText(text.target.value)}
        />
        <button
          onClick={() => postTranslationRequest(translationInputText)}
        >
          Translate
        </button>
      </div>
  }
  </div>
);
