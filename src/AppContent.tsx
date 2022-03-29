import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Mint from './containers/Mint';
import Screen from './components/Screen';

const AppContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />}>
          <Route index element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/mint/:state" element={<Mint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppContent;
