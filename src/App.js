import { Toaster } from 'sonner';
import './App.css';
import GameCanvas from './Components/GameCanvas';
import GlobalLoading from './Components/GlobalLoading/GlobalLoading';
function App() {
  return (
    <>
      <GlobalLoading />
      <Toaster />
      <div className="w-full h-screen flex justify-center items-center bg-green-800">
        <GameCanvas />
      </div>
      {/* <Containers /> */}
    </>
  );
}

export default App;
