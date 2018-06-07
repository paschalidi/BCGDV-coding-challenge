import axios from 'axios';


export const getEveryQuestion = () => axios.get('https://polls.apiblueprint.org/questions');
export const getSingleQuestion = questionId => axios.get(`https://polls.apiblueprint.org${questionId}`);
export const postSingleQuestion = body => axios.post('https://polls.apiblueprint.org/questions', body);
export const vote = voteId => axios.post(`https://polls.apiblueprint.org${voteId}`);