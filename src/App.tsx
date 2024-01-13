import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home';
import { Posts } from './Pages/Posts';
import { Register } from './Pages/Auth/Register';
import { Login } from './Pages/Auth/Login';

const App = () => {
  // ideas
  // https://flowbite.com/blocks/publisher/comments/
  // https://flowbite.com/blocks/marketing/portfolio/
  // https://flowbite.com/blocks/marketing/blog/
  // https://flowbite.com/blocks/marketing/500/
  return (
    <>
      <main className="min-h-screen bg-white font-inter dark:bg-gray-900">
        <BrowserRouter>
          <Header />
          <section className="mx-auto max-w-screen-2xl">
            <div>
              <Routes>
                <Route path="/posts" Component={Posts} />
                <Route path="/about" Component={Home} />
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
              </Routes>
            </div>
          </section>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
