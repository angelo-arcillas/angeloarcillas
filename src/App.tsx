import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home';
import { Posts } from './Pages/Posts';
import { Register } from './Pages/Auth/Register';
import { Login } from './Pages/Auth/Login';
import { Footer } from './Components/Footer/Footer';

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
          <section className="mx-auto min-h-[70vh] max-w-screen-2xl">
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
        <Footer />
      </main>
    </>
  );
};

export default App;
