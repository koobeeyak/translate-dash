const Translation = require('../db/models').Translation;
const googleTranslate = require('../process/googleTranslate');

module.exports = {
  create(req, res) {
    Translation
      .findAll({ where: { inputText: req.body.translationInputText } })
      .then(existingtranslation => {
        if (existingtranslation.length) {
          res.status(200).send(existingtranslation[0]);
        } else {
          const englishISO = 'en';
          return googleTranslate(
            req.body.translationInputText,
            englishISO,
          )
          .then(results => (
            Translation
              .create({
                inputText: req.body.translationInputText,
                inputDerivedLanguage: results.detectedSourceLanguage,
                outputText: results.translatedText,
                outputLanguage: englishISO,
              })
              .then(translation => res.status(201).send(translation))
              .catch(error => res.status(400).send(error))
          ))
          .catch(error => res.status(400).send("Error: Google Translate API error translating results."))
        }
      })
  },
  list(req, res) {
    return Translation
      .findAll()
      .then(translations => res.status(200).send(translations))
      .catch(error => res.status(400).send(error));
  },
};
