import { Article } from '../Components/Articles/Article';

export const Articles = () => {
  return (
    <section className="max-w-screen-lg mx-auto dark:text-white section">
      <h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Articles
      </h1>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <Article
          title="Converting a string to Base64 manually Converting a to Base64"
          date="Jan 01, 2024"
          likes={4897}
        />

        <Article
          title="Converting a string to Base64 manually Converting a to Base64"
          date="Jan 01, 2024"
          likes={3}
        />
        <Article
          title="Converting a string to Base64 manually Converting a to Base64"
          date="Jan 01, 2024"
          likes={47}
        />
        <Article
          title="Converting a string to Base64 manually Converting a to Base64"
          date="Jan 01, 2024"
          likes={47}
        />
        <Article
          title="Converting a string to Base64 manually Converting a to Base64"
          date="Jan 01, 2024"
          likes={47}
        />
        <Article
          title="Converting a string to Base64 manually Converting a to Base64"
          date="Jan 01, 2024"
          likes={47}
        />

        <Article
          title="Converting a string to Base64 manually Converting a to Base64"
          date="Jan 01, 2024"
          likes={47}
        />
      </div>
    </section>
  );
};
