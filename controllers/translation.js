const Translation = require('../db/models').Translation;

module.exports = {
  create(req, res) {
    return Translation
      .create(req.body)
      .then(translation => res.status(201).send(translation))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Translation
      .findAll()
      .then(translations => res.status(200).send(translations))
      .catch(error => res.status(400).send(error));
  },
};
