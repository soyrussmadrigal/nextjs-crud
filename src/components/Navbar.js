"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";

export function Navbar() {
  const router = useRouter();
  const { tasks } = useTasks();
  return (
    <header className="flex justify-between items-center bg-gray-800 px-20 py-3">
      <Link href="/">
        <h1 className="font-bold text-2xl text-white">
          Tasks App |{" "}
          <span className="text-slate-100 text-sm ml-1">
            {tasks.length} tasks
          </span>
        </h1>
      </Link>
      <div>
        <button
          onClick={() => router.push("/new")}
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          Add new task
        </button>
      </div>
    </header>
  );
}
