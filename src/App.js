import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Blog, Contact, Home, ProductDetails } from './screens';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route Component={About} path="/about">
            <Route Component={ProductDetails} path="productDetails">
              <Route Component={Blog} path="blogs/:postId" />
            </Route>
          </Route>
          <Route Component={Contact} path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
