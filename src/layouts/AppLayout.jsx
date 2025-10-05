import { Home, ListTodo, LogOut, MessageSquare, Settings } from "lucide-react"
import { Link, NavLink, Outlet, useLocation } from "react-router"

const AppLayout = () => {

  const location = useLocation();

  const menus = [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, link: '/app' },
    { name: 'Tasks', icon: <ListTodo className="w-5 h-5" />, link: '/app/taskboard' },
    { name: 'Chat', icon: <MessageSquare className="w-5 h-5" />, link: '/app/chatbot' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, link: 'app/settings' },
  ]


  return (
    <div className="h-screen overflow-hidden flex">
      <aside className="h-screen w-64 bg-white border-r border-gray-300 flex flex-col justify-between">
        <div>
          <div className="border-b border-gray-200 py-5">
            <h1 className="text-2xl text-center font-bold text-blue-600">Taskify</h1>
          </div>

          <nav className="mt-6 px-4 space-y-2">
          { menus.map((menu, i) => {
            const isActive = location.pathname == menu.link
            return (
            <Link key={i} to={menu.link} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition duration-200 border
                  ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-blue-300 shadow-sm'
                      : 'text-gray-600 border-transparent hover:bg-blue-50 hover:text-blue-600'
                  }
                `}>
            {menu.icon}
            <span className="font-medium">{menu.name}</span>
            </Link>
          )})}
          </nav>
        </div>

        <div className="border-t border-gray-200 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=36" alt="" className="h-10 w-10 rounded-full object-cover border-2 border-blue-500" />
            <span className="font-medium text-gray-700 ">Maudina Apriliani</span>
          </div>
          <NavLink to={"/login"} className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-3 py-2.5 rounded-lg transition">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </NavLink>
        </div>


      </aside>
      <Outlet/>
    </div>
  )
}

export default AppLayout
