import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className="flex justify-center items-center px-4 pb-4 sm:px-7 sm:pb-4 relative bg-gray-50">
      <div className="w-full max-w-4xl shadow-[0px_3px_6px_3px_rgba(0,_0,_0,_0.1)] p-4">
        <div className="bg-linear-to-br from-[#005F5A] to-[#0F3443] p-6 mb-6 rounded-md shadow-[0px_3px_6px_3px_rgba(0,_0,_0,_0.1)]">
          <h1 className="text-2xl text-white font-bold tracking-wider text-center">Users Management System</h1>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
