import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.Loader}>
      <ThreeDots height="65" width="65" />
    </div>
  );
};
