import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
 <Home></Home>
 </ChakraProvider>

  );
}

export default App;
