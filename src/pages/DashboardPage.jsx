import { CheckCircle, ClipboardList, Clock, PlusCircle } from "lucide-react"

const DashboardPage = () => {

    const stats = [
        { label: 'Todo', value: 6, icon: <ClipboardList className="w-14 h-14 text-blue-500" /> },
        { label: 'In Progress', value: 5, icon: <Clock className="w-14 h-14 text-yellow-500" /> },
        { label: 'Completed', value: 12, icon: <CheckCircle className="w-14 h-14 text-green-500" /> },
        { label: 'Total Tasks', value: 23, icon: <PlusCircle className="w-14 h-14 text-purple-500" /> },
    ]

    const tasks = [
        { id: 1, title: 'Design Landing Page', status: 'In Progress', due: 'Oct 10, 2025' },
        { id: 2, title: 'Fix Chat Socket Bug', status: 'Completed', due: 'Oct 4, 2025' },
        { id: 3, title: 'Setup Database Index', status: 'Todo', due: 'Oct 8, 2025' },
        { id: 4, title: 'Setup Database Index', status: 'Todo', due: 'Oct 8, 2025' },
        { id: 5, title: 'Setup Database Index', status: 'Todo', due: 'Oct 8, 2025' },
    ]

  return (
    <div className="w-full h-screen p-8 bg-gray-50">
      <header className="mb-5">
        <h1 className="text-3xl font-bold text-gray-800">Hello, Maudina Apriliani</h1>
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
        <div className="w-full border border-gray-200 shadow-sm rounded-lg py-4 px-5">
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
                        <th className="py-3 px-6">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
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
                                {task.due}
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
