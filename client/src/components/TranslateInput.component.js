import React from 'react';

export default ({ translationInputText, updateTranslationInputText }) => (
  <div className="translate_input">
    <p>
      translate-dash
    </p>
    <div>
      <input
        className="translate_input__input--standard"
        type="text"
        name="translate_input"
        value={translationInputText}
        onChange={(t) => updateTranslationInputText(t.target.value)}
      />
      <button
        onClick={() => {console.log("Click.")}}
      >
        Translate
      </button>
    </div>
  </div>
);
