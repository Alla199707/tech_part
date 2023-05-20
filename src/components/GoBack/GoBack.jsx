import { MdArrowBackIos } from 'react-icons/md';
// import { Link } from 'react-router-dom';

import { Link } from './GoBack.styled';

export const GoBack = () => {
  return (
    <Link to="/">
      <MdArrowBackIos />
      <span>Back</span>
    </Link>
  );
};
