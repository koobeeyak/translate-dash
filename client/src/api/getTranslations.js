import Axios from 'axios/index';

const getTranslations = () => Axios({
  method: 'get',
  url: 'api/translations',
}).then(response => response.data);

export default getTranslations;
