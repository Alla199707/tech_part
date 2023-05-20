import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layuot';
import { lazy } from 'react';
// import { TweetPage } from 'pages/TweetsPage/TweetsPage';
// import { HomePage } from 'pages/HomePage/HomePage';

const TweetPage = lazy(() => import('pages/TweetsPage/TweetsPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes> */}
    </div>
  );
};
