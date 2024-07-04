import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <ChakraProvider>
 <Home></Home>
 </ChakraProvider>

  );
}

export default App;
