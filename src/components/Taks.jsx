import { ArrowLeft, ArrowRight, Trash2 } from "lucide-react";

const Taks = ({ data, title, color, Icon, onMove, onDelete }) => {
  return (
    <div className={`rounded-xl p-4 bg-${color}-100 border border-gray-200 shadow-sm`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 text-${color}-600`} />
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
        <span className="text-sm text-gray-500 bg-gray-200 rounded-xl py-1 px-2">
          {data.length} tasks
        </span>
      </div>

      <div className="space-y-3">
        {data.length === 0 ? (
            <p className="text-sm text-gray-500 italic text-center py-4">No Tasks</p>
        ): (
            data.map(task => (
                <div key={task.id} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition">
                    <p className="font-medium text-gray-800 mb-2">{task.title}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                        {title !== "Todo" && (
                            <button
                            onClick={() => onMove(task.id, title === "In Progress" ? "todo" : "in_progress", task.title, task.description)}
                            className="p-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                        )}

                        {title !== "Completed" && (
                            <button 
                            onClick={() => onMove(task.id, title === "Todo" ? "in_progress" : "completed", task.title, task.description)}
                            className="p-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                        </div>
                        <button onClick={() => onDelete(task.id)} className="p-1.5 bg-red-100 rounded-md text-red-600 hover:bg-red-200 transition ">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Taks;
