import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <p>Not found!</p>,
  },
  {
    path: '/movie/:id',
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
