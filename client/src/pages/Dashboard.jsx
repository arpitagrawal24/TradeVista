import { useSelector } from "react-redux";

import { selectUser } from "../slices/userSlice";

const Dashboard = () => {

  const user = useSelector(selectUser);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Dashboard</h1>
      {user ? (
        <div className="bg-slate-200 border border-gray-300 rounded p-6 max-w-md mx-auto">
          <p className="text-xl font-bold mb-1">{user.name}</p>
          <p className="text-gray-600 text-sm mb-4">{user.email}</p>
          <div className="mb-4">
          </div>
          <p className="text-gray-600 text-sm">Joined on: {new Date(user.dateCreated).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;