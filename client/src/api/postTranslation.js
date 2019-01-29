import Axios from 'axios/index';

const postTranslation = translationInputText => Axios({
  method: 'post',
  url: 'api/translations',
  data: { translationInputText },
}).then(response => (response.status === 201
	? response.data
	: {}
));

export default postTranslation;
