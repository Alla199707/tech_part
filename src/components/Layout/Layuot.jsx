import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header, Link } from './Layuot.styled';
import Loader from 'components/Loader/Loader';

function Layout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
}

export default Layout;
