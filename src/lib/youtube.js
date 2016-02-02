import axios from 'axios';

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

function searchYoutube({key, q}) {

  if (!key) {
    throw new Error('Youtube Search expected key');
  }

  var params = {
    key,
    part: 'snippet',
    q,
    type: 'video'
  };

  return axios.get(ROOT_URL, { params }).catch(console.log);

};

export default searchYoutube
