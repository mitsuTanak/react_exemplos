// Importação dos componentes necessarios
import { BroserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

// Componente Funcional principal App
function App() {
    return(
        <div className="App">
            {/* Componente Header */}
            <Router>

                {/* Componente Header */}
                <Header>

                    {/* Definição da rota */}
                    <Routes>

                        {/* Rota para página inicial */}
                        <Route path="/" element={<Home />} />

                        {/* Rota para página inicial */}
                        <Route path="/About" element={<About />} />

                        {/* Rota para página inicial */}
                        <Route path="/Contact" element={<Contact />} />
                        
                    </Routes>

                </Header>

            </Router>
        </div>
    );
}

export default App;