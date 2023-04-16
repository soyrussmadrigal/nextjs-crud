import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div
      className="bg-gray-700 shadow-md hover:bg-slate-600 rounded-md p-4 mb-4 cursor-pointer"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-white">{task.title}</h1>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm("Are you sure you want to");
            if (accept) {
              toast.success("Task deleted");
            }
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
      <p className="text-gray-300">{task.description}</p>
      <span className="text-gray-400 textxs">{task.id}</span>
    </div>
  );
};
