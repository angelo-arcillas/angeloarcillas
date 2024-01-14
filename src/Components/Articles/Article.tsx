import { ClockIcon } from '../Includes/Icons/ClockIcon';
import { CommentIcon } from '../Includes/Icons/CommentIcon';
import { ShareIcon } from '../Includes/Icons/ShareIcon';
import { UpVoteIcon } from '../Includes/Icons/UpVoteIcon';

import DefaultArticleBanner from './../../assets/default-article-banner.webp';

type ArticleProp = {
  title: string;
  image?: string;
  date: string;
  likes: number;
};

export const Article = ({ title, date, likes }: ArticleProp) => {
  return (
    <a
      href="#"
      className="hover:border-gray-400 w-[20rem] lg:w-full p-4 border dark:border-gray-700 cursor-pointer dark:bg-gray-800 rounded-2xl dark:hover:border-gray-600 bg-gray-200 shadow hover:shadow-gray-500"
    >
      <h3 className="mb-4 text-xl font-extrabold dark:text-slate-50 max-h-[7rem] overflow-y-auto custom-scrollbar">
        {title}
      </h3>
      <p className="flex items-center mb-2 ml-2 font-sans text-xs font-medium text-gray-500">
        <span className="mr-2">{date}</span>
        <ClockIcon />
        <span className="ml-1">2m read time</span>
      </p>

      <img
        src={DefaultArticleBanner}
        alt="article image"
        className="object-cover w-full h-[10rem] rounded-lg mb-4"
      />

      <div className="flex items-center justify-between px-4 dark:text-gray-400 ">
        <div className="flex items-center gap-2 dark:hover:text-white hover:text-indigo-700">
          <UpVoteIcon />
          <span>{likes}</span>
        </div>

        <div className="flex items-center gap-4">
          <CommentIcon className="w-5 h-5 hover:text-indigo-700 dark:hover:text-white" />
          <ShareIcon className="w-5 h-5 hover:text-indigo-700 dark:hover:text-white" />
        </div>
      </div>
    </a>
  );
};
