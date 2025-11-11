
import { useState } from 'react'
import { Button } from './components/ui/button'
import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from 'lucide-react'
import DevLinkCard from './components/DevLinkCard'

function App() {
  const { theme, setTheme } = useTheme("");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center min-h-screen">
      <div className='absolute top-4 right-4' >
        <Button onClick={toggleTheme}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
      <h1 className='font-bold text-7xl' >DevLinkCard</h1>
      <div className='mt-10' >
        <DevLinkCard />
      </div>
    </div>
  );
}

export default App
