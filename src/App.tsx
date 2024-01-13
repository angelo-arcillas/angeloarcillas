import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home';
import { Posts } from './Pages/Posts';

const App = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-screen-2xl">
          <BrowserRouter>
            <Header />
            <div>
              <Routes>
                <Route path="/posts" Component={Posts} />
                <Route path="/about" Component={Home} />
                <Route path="/" Component={Home} />
              </Routes>
            </div>
          </BrowserRouter>
        </section>
      </main>
    </>
  );
};

export default App;
