import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {GitHubProvider} from './context/github/GitHubContext'

function App() {
  return (
    <GitHubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="container mx-auto px-3 pb-12">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/notfound' element={<NotFound />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
        </main>
        
        <Footer />
      </div>     
    </Router>
    </GitHubProvider>
  );
}

export default App;
