import React from 'react';
import TranslateTableHeader from './TranslateTableHeader';

export default ({ translations }) => (
  <table>
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
);
