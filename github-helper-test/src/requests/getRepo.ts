import { GetRepoResponse } from './../types/types';

const getRepo = async (userName: string, page: number): Promise<GetRepoResponse> => {
  const response: Response = await fetch(
    `https://api.github.com/users/${userName}/repos?page=${page}&per_page=4`
  );
  if (response.ok) {
    return await response.json();
  } else {
    return [];
  }
};

export default getRepo;
