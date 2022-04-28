import { GetUserResponse } from '../types/types';

const getUser = async (userName: string): Promise<GetUserResponse | null> => {
  const response: Response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
};

export default getUser;
