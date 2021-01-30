import React from 'react';
import Home from './pages/Home'
import { ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="*" element={<h1> NOT FOUND 404!</h1>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
