import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App(){
    return(
        <BrowserRouter>
       

            {/* Routes */}

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Sobre" element={<About />} />
                <Route path="/Contato" element={<Contact />}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;