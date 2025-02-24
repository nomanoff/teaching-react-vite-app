import { NavLink } from "react-router";

const About = () => {
  return (
    <div>
      <h1 className="m-px text-red-50">About page</h1>
      <div className="h-16 w-36 bg-sky-400 opacity-20"></div>

      <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
        <div>
          <div class="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p class="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>

      <div className="-mt-8 bg-sky-300 ...">-mt-8</div>
      <NavLink to="/" end>
        Home page
      </NavLink>
    </div>
  );
};

export default About;
