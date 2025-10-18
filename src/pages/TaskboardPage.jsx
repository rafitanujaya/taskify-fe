import { ClipboardList, Clock, CheckCircle, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import taskApi from "../lib/api/taskApi"
import Taks from "../components/Taks"
import CreateTask from "../components/CreateTask"

const TaskboardPage = () => {

    const [tasks, setTasks] = useState({
        todo: [],
        inProgress: [],
        completed: []
    })
    const [isOpen, setIsOpen] = useState(false)
    const token = localStorage.getItem('token')

    const getTasks = async () => {
        try {
            const response = await taskApi.getGroupedTask(token);
            const data = await response.json().then(json => json.data);
            setTasks(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    const handleMove = async (taskId, newStatus, title, description) => {
        try {
            await taskApi.update(taskId, title, newStatus, description, token)
            getTasks()
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (taskId) => {
        try {
            await taskApi.deleteTask(taskId, token);
            getTasks()
        } catch (error) {
            console.error(error);
        }
    }

    const handleCreate = async (title, description, status) => {
        try {
            await taskApi.create( title,status, description, token)
        } catch (error) {
            console.error(error);
        }
    }

    const handleClose = () => {
        setIsOpen(false)
    }


  return (
    <div className="w-full h-screen overflow-hidden bg-gray-50 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Task Board</h1>
                <p className="text-gray-500">Orgenize and track your tasks easily </p>
            </div>
            <button onClick={() => setIsOpen(true)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium">
                New Task
                <Plus className="w-4 h-4"/>
            </button>
        </div>

        {/* Board */}
        <section className="grid grid-cols-3 gap-6 ">
            <Taks color={"yellow"} title={'Todo'} data={tasks.todo} Icon={ClipboardList} onMove={handleMove} onDelete={handleDelete}/>
            <Taks color={"blue"} title={'In Progress'} data={tasks.inProgress} Icon={Clock} onMove={handleMove} onDelete={handleDelete}/>
            <Taks color={"green"} title={'Completed'} data={tasks.completed} Icon={CheckCircle} onMove={handleMove} onDelete={handleDelete} />
        </section>

        <CreateTask isOpen={isOpen} onClose={handleClose} onCreate={handleCreate} onGetTask={getTasks}/>
    </div>
  )
}

export default TaskboardPage
