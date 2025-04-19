import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <ClipLoader color="#000" size={50} />
  </div>
);

export default LoadingSpinner;
