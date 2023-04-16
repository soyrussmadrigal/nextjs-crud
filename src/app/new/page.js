"use client";
import { useState, useEffect } from "react";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useForm, handleSubmit } from "react-hook-form";

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
    } else {
      createTask(data.title, data.description);
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
    <form onSubmit={onSubmit}>
      <input
        placeholder="Write a title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}

      <textarea
        placeholder="Write a description"
        {...register("description", { required: true })}
      />
      {errors.description && <span>This field is required</span>}
      <button>Save</button>
    </form>
  );
}

export default Page;
