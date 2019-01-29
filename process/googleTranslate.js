const { Translate } = require('@google-cloud/translate');

const translate = new Translate({
  projectId: process.env.GOOGLE_PROJECT_ID,
  credentials: {
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
  },
});

module.exports = (translationInputText, translationOutputLanguage) => (
  translate
    .translate(translationInputText, translationOutputLanguage)
    .then(results => results[1].data.translations[0])
    .catch(err => {
      console.error('ERROR:', err);
    })
);
