import { BrowserRouter } from 'react-router-dom';
import AppInner from './AppInner';

const App = () => {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
};

export default App;
