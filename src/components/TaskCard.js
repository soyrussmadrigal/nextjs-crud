import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div
      style={{ background: "#202020", color: "white" }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1>{task.title}</h1>
      <button
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
      <p>{task.description}</p>
    </div>
  );
};
