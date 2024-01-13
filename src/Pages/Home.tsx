import Avatar from './../assets/me.png'

export const Home = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">

    <figure className="block mb-6">
      <img src={Avatar} alt="Angelo Arcillas Image" className='w-[10rem] md:w-[20rem] rounded-full mx-auto' />
    </figure>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Angelo Arcillas
        </h1>
        <h4 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-gray-400">
          Software Engineer
        </h4>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          I'm a full stack web developer 💻 from the Philippines 🇵🇭, and I am
          passionate about back-end development 💪. I believe in staying
          up-to-date with industry trends and continuously learning to improve
          my skills. It's great to meet you! 🙇
        </p>
        <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="https://github.com/zerexei"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
          >
            View Projects
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.twitch.tv/zerexei"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch Steam
          </a>
        </div>

        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            FEATURED IN
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-gray-500 sm:justify-between">
            <a href="https://github.com/zerexei" className="text-2xl font-extrabold hover:text-white">Github</a>
            <a href="https://www.linkedin.com/in/angeloarcillas" className="text-2xl font-extrabold hover:text-white">LinkedIn</a>
            <a href="https://laracasts.com/@zerexei" className="text-2xl font-extrabold hover:text-white">Laracast</a>
            <a href="https://medium.com/@angeloarcillas64" className="text-2xl font-extrabold hover:text-white">Medium</a>
            <a href="https://discord.gg/programming" className="text-2xl font-extrabold hover:text-white">Discord</a>
            <a href="https://www.twitch.tv/zerexei" className="text-2xl font-extrabold hover:text-white">Twitch</a>
            <a href="https://www.youtube.com/@daaaave" className="text-2xl font-extrabold hover:text-white">Youtube</a>
            <a href="https://www.instagram.com/angelodaaaave/" className="text-2xl font-extrabold hover:text-white">Instagram</a>

            <a href="https://www.buymeacoffee.com/zerexei" className="text-2xl font-extrabold hover:text-white">BuyMeACoffee</a>
            <a href="https://www.patreon.com/AngeloArcillas" className="text-2xl font-extrabold hover:text-white">Patreon</a>
            <a href="https://paypal.me/zerexei" className="text-2xl font-extrabold hover:text-white">Paypal</a>
          </div>
        </div>
      </div>
    </section>
  );
};
