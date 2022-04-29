import { GetRepoResponse } from './../types/types';

const getRepo = async (userName: string): Promise<GetRepoResponse> => {
  const response: Response = await fetch(`https://api.github.com/users/${userName}/repos`);
  if (response.ok) {
    return await response.json();
  } else {
    return [];
  }
};

export default getRepo;
