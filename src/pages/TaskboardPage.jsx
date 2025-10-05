import { ClipboardList, PlusCircle, ArrowRight, ArrowLeft, Trash2 } from "lucide-react"

const TaskboardPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-50 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Task Board</h1>
                <p className="text-gray-500">Orgenize and track your tasks easily </p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium">
                <PlusCircle className="w-5 h-5"/>
                New Task
            </button>
        </div>

        {/* Board */}
        <section className="grid grid-cols-3 gap-6 ">
            <div className="rounded-xl p-4 bg-yellow-100 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-yellow-600" />
                        <h2 className="text-lg font-semibold text-gray-800">Todo</h2>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-200 rounded-xl py-1.5 px-2">
                        {2} tasks
                    </span>
                </div>

                <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition">
                        <p className="font-medium text-gray-800 mb-2">Create Data Base</p>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <button className="p-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                                    <ArrowLeft className="w-4 h-4"/>
                                </button>

                                <button className="p-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                                    <ArrowRight className="w-4 h-4"/>
                                </button>
                            </div>
                            <button className="p-1.5 bg-red-100 rounded-md text-red-600 hover:bg-red-200 transition ">
                                <Trash2 className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl p-4 bg-blue-100 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-blue-600" />
                        <h2 className="text-lg font-semibold text-gray-800">In Progress</h2>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-200 rounded-xl py-1.5 px-2">
                        {2} tasks
                    </span>
                </div>

                <div className="space-y-3">
                   <p className="text-sm text-gray-500 italic text-center py-4">No tasks</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TaskboardPage
