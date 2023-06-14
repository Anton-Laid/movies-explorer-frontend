import { Link } from 'react-router-dom';

const Links = ({ path, classStyle, title, onClick }) => {
  return (
    <Link to={path} className={classStyle} onClick={() => onClick()}>
      {title}
    </Link>
  );
};

export default Links;
