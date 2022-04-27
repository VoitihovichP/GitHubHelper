import { GetUserResponse } from "../types/types";

const getUser = async (userName: string): Promise<GetUserResponse> => {
  const response: Response = await fetch(`https://api.github.com/users/${userName}`);
  return await response.json();
}

export default getUser;