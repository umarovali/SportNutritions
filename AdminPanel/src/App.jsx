import Nutritions from './modules/Nutritions';
import PrivatePage from './layout/PrivatePage';
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <Toaster position='top-center' />
      <PrivatePage />
    </>
  )
}
