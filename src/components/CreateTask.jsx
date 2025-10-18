import { useState } from "react"

import { ChevronDown } from "lucide-react";

const CreateTask = ({ isOpen, onClose, onCreate, onGetTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  console.log("jalan");
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }

    onCreate(title, description, status);
    setTitle("");
    setDescription("");
    setStatus("todo");
    onGetTask()
    onClose();
  };

  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl">
        <h1 className="text-2xl font-bold">Add a New Task</h1>
        <p className="text-gray-600">Effortlessly manage your task</p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-2.5">
            <label
              className="block text-gray-700 font-semibold mb-2.5"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              className="w-full border text-sm rounded-md py-2.5 px-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-2.5 relative">
            <label
              className="block text-gray-700 font-semibold mb-2.5"
              htmlFor=""
            >
              Status
            </label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full block border text-sm border-gray-300 appearance-none py-2.5 px-4 rounded-md">
              <option value="todo">Todo</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <ChevronDown className="absolute right-3 top-11 text-gray-500 pointer-events-none " />
          </div>
          <div className="mb-2.5">
            <label
              className="block text-gray-700 font-semibold mb-2.5"
              htmlFor=""
            >
              Description
            </label>
            <textarea
              className="w-full border rounded-md px-4 py-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => onClose()}
              className="py-2.5 px-4 text-sm font-medium border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 px-4 py-2.5 text-sm font-medium text-white rounded-lg cursor-pointer hover:bg-blue-700">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateTask;
