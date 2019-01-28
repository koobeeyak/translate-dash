import Axios from 'axios/index';

const postTranslation = translationInputText => Axios({
  method: 'post',
  url: 'api/translations',
  data: {
    translationInputText,
  },
}).then(response => response.data);

export default postTranslation;
