import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layoutpage from './pages/Layoutpage/Layoutpage';
import Errorpage from './pages/Errorpage/Errorpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoutpage></Layoutpage>,
    id: 'root',
    errorElement: <Errorpage></Errorpage>,
  },
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App