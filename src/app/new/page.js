"use client";
import { useEffect } from "react";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Page({ params }) {
  const { tasks, updateTask, createTask } = useTasks();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("Task updated");
    } else {
      createTask(data.title, data.description);
      toast.success("Task created");
    }

    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 p-10">
        <h2 className="text-2xl font-bold text-white mb-5 text-center">
          New Task
        </h2>
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none focus:outline w-full"
          placeholder="Write a title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500">This field is required</span>
        )}

        <textarea
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none focus:outline w-full"
          placeholder="Write a description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500">This field is required</span>
        )}
        <button className="bg-green-500 py-3 px-4 mb-2 block focus:outline-none focus:outline w-full">
          Save
        </button>
      </form>
    </div>
  );
}

export default Page;
