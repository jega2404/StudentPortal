import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider ,CSSReset } from '@chakra-ui/react';
// import store from'./features/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <ChakraProvider>
    <CSSReset/>
  <App />
</ChakraProvider>

)
