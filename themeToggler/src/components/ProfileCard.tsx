import useTheme from "@/context/theme";
import { useEffect, useState } from "react";

const githubUrl = "https://api.github.com/users/nikeshad254";

interface IGithubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

function ProfileCard() {
  const [user, setUser] = useState<IGithubUser>();

  const { theme } = useTheme();

  useEffect(() => {
    async function fetchUserData() {
      const data = await fetch(githubUrl);
      const user = await data.json();
      setUser(user);
    }
    fetchUserData();
  }, []);

  return (
    <div className=" bg-blue-300 dark:bg-blue-950 max-w-72 mx-auto mt-4 rounded-md flex flex-col items-center gap-2 p-4 ">
      <img src={user?.avatar_url} alt="" className=" h-52 w-52" />
      <h2 className=" text-xl font-semibold">{user?.name}</h2>
      <h3 className="text-slate-900 dark:text-slate-300">@{user?.login}</h3>
      <div className=" flex  justify-between w-full text-slate-500 dark:text-slate-100">
        <p className=" text-sm">Repos: {user?.public_repos}</p>
        <p className=" text-sm">Followers: {user?.followers}</p>
        <p className=" text-sm">Following: {user?.following}</p>
      </div>

      <a
        href={user?.html_url}
        target="_blank"
        className="bg-blue-700 w-full text-center rounded-md py-2 hover:bg-blue-600 text-white font-semibold"
      >
        Visit Github
      </a>

      <small>theme mode: {theme}</small>
    </div>
  );
}

export default ProfileCard;
