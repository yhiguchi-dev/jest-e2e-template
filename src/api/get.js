import env from "#src/env";

const get = async () => {
  const { githubUrl } = env;
  const response = await fetch(`${githubUrl}/users/defunkt`);
  return await response.json();
};

export default get;
