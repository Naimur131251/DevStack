import { BiBookmarkAlt } from "react-icons/bi";
import { Bounce, toast } from "react-toastify";

const App = () => {
  const handleToast = () => {
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }
  return (
    <div className="font-bold flex justify-center items-center h-lvh text-7xl text-purple-500">
      <BiBookmarkAlt /> DevStake <BiBookmarkAlt />
      <div className="ml-7">
        <button 
          className="btn btn-success"
          onClick={handleToast}
        >Success</button>
      </div>     
    </div>
  );
};

export default App;