import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';
import { ThemeProvider } from './contexts/Theme'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  // Upon the loading of component, we are just adding the latest value of 
  // themeMode, which would be basically the class which would hold the value
  // of theme weather it is dark or light.
  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark');
    document.querySelector('html')?.classList.add(themeMode);
  }, [themeMode]); // the callback function should run everytime, there is a change in the themeMode.
  // Thus adding themeMode as a dependency in useEffect hook.

  const lightTheme = () => {
    setThemeMode('light');
  }

  const darkTheme = () => {
    setThemeMode('dark');
  }

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
