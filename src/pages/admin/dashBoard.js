import Header from "../../component/admin/header";
import Sidebar from "../../component/admin/sidebar";

const DashBoard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#F5F6FA] w-4/5">
        <Header />
        <div className="">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;