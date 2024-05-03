import axios from 'lib/axios';

export const getPeople = async (queryArray) => {
  const stringedQuery = new URLSearchParams(queryArray).toString();
  const url = stringedQuery ? `/people?${stringedQuery}` : '/people';
  const { data } = await axios.get(url);
  return data;
};
