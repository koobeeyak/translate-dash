import React from 'react';

import TranslateTableHeader from './TranslateTableHeader';
import ClickNav from './ClickNav';

export default ({ translations, changeInterface }) => (
  <div>
    <ClickNav
      text="<< Back to Input"
      orientation="left"
      onClick={() => changeInterface('translateInput')}
    />
    <div>
      <table className="translate_table">
        <TranslateTableHeader />
        {translations.map(translation => (
          <tbody key={translation.id}>
            <tr>
              <td>{translation.inputText}</td>
              <td>{translation.inputDerivedLanguage}</td>
              <td>{translation.outputText}</td>
              <td>{translation.outputLanguage}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  </div>
);
