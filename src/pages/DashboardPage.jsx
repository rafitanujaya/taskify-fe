import { CheckCircle, ClipboardList, Clock, PlusCircle } from "lucide-react"
import { useEffect, useState } from "react"
import userApi from "../lib/api/userApi"
import taskApi from "../lib/api/taskApi"
import { useUser } from "../hooks/useUser"

const DashboardPage = () => {

    const [stats, setStats] = useState([])
    const [latestTasks, setLatestTasks] = useState([])
    const {user} = useUser()
    

    useEffect(() => {
        const token = localStorage.getItem('token')
        const getStats = async () => {
            
            try {
                const result = await userApi.stats(token)
                const data = await result.json().then(json => json.data);
                
                const formattedStats = [
                    { 
                        label: 'Todo', 
                        value: data.todoCount, 
                        icon: <ClipboardList className="w-14 h-14 text-blue-500" /> 
                    },
                    { 
                        label: 'In Progress', 
                        value: data.inProgressCount, 
                        icon: <Clock className="w-14 h-14 text-yellow-500" /> 
                    },
                    { 
                        label: 'Completed', 
                        value: data.completedCount, 
                        icon: <CheckCircle className="w-14 h-14 text-green-500" /> 
                    },
                    { 
                        label: 'Total Tasks', 
                        value: data.totalTask, 
                        icon: <PlusCircle className="w-14 h-14 text-purple-500" /> 
                    },
                ]
                setStats(formattedStats)
            } catch (error) {
                console.log(error);
            }
        }
        const getLatestTask = async () => {
            try {
                
                const response = await taskApi.latest(token);
                const data = await response.json().then(json => json.data);
                const formattedTasks = data.map(task => {
                    if(task.status == 'todo') {
                        task.status = 'Todo'
                    } else if(task.status == 'in_progress') {
                        task.status = 'In Progress'
                    } else if(task.status == 'completed') {
                        task.status = 'Completed'
                    }
    
                    return task
                })
                setLatestTasks(formattedTasks);
            } catch (error) {
                console.log(error);
            }
        }

        getStats()
        getLatestTask()
    }, [])

    // const stats = [
    //     { label: 'Todo', value: 6, icon: <ClipboardList className="w-14 h-14 text-blue-500" /> },
    //     { label: 'In Progress', value: 5, icon: <Clock className="w-14 h-14 text-yellow-500" /> },
    //     { label: 'Completed', value: 12, icon: <CheckCircle className="w-14 h-14 text-green-500" /> },
    //     { label: 'Total Tasks', value: 23, icon: <PlusCircle className="w-14 h-14 text-purple-500" /> },
    // ]

    // const tasks = [
    //     { id: 1, title: 'Design Landing Page', status: 'In Progress', due: 'Oct 10, 2025' },
    //     { id: 2, title: 'Fix Chat Socket Bug', status: 'Completed', due: 'Oct 4, 2025' },
    //     { id: 3, title: 'Setup Database Index', status: 'Todo', due: 'Oct 8, 2025' },
    //     { id: 4, title: 'Setup Database Index', status: 'Todo', due: 'Oct 8, 2025' },
    //     { id: 5, title: 'Setup Database Index', status: 'Todo', due: 'Oct 8, 2025' },
    // ]

  return (
    <div className="w-full h-screen p-8 bg-gray-50">
      <header className="mb-5">
        <h1 className="text-3xl font-bold text-gray-800">Hello, {user?.username}</h1>
        <p className="text-gray-500">Here's your task summary at a glance</p>
      </header>

      <section className="grid grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => {
            return (
                <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center gap-4">
                        {stat.icon}
                    <div className="">
                        <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
                        <p className="text-2xl font-bold text-gray-900 text-center">{stat.value}</p>
                    </div>
                </div>
            )
        })}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Productivity Tips</h2>
        <div className="w-full border border-gray-200 bg-white shadow-sm rounded-lg py-4 px-5">
            <p className="font-medium text-gray-500">"Break big task into smaller steps and set achieveble goals for the day"</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Tasks</h2>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-gray-700">
                <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                    <tr>
                        <th className="py-3 px-6">Task</th>
                        <th className="py-3 px-6">status</th>
                        <th className="py-3 px-6">Create Date</th>
                    </tr>
                </thead>
                <tbody>
                    {latestTasks.map((task) => (
                        <tr>
                            <td className="py-3 px-6 font-medium">
                                {task.title}
                            </td>

                            <td className="py-3 px-6 font-medium">
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                                    task.status === "Completed" ?
                                    'bg-green-100 text-green-700' : task.status === "In Progress" ?
                                    'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {task.status}
                                </span>
                            </td>

                            <td className="py-3 px-6 text-gray-500">
                                {task.createdAt}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
      </section>
    </div>
  )
}

export default DashboardPage
