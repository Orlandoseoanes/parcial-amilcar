import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: '/dashboard/localizacion',
        element: <Analytics />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;