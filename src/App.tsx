import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './hooks/useDarkMode';
import { DarkModeContext } from './contexts/DarkModeContext';

import Global from './assets/styles/global';
import { darkTheme, defaultTheme } from './assets/styles/theme';

import Home from './pages/Home/Home';


function App(): JSX.Element {
  const [isDarkModeEnabled, setDarkMode] = useDarkMode();

  return (
    <ThemeProvider theme={isDarkModeEnabled ? darkTheme : defaultTheme}>
      <Global />
      <DarkModeContext.Provider value={setDarkMode}>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}


export default App; 