"use client";
import { AddNewItemSheet } from "@/components/add-item-sheet";
import { useEffect } from "react";
export default function Home() {
  let storedTodoItems = JSON.parse(localStorage.getItem("todoItems") as string);
  console.log(typeof storedTodoItems);
  console.log(storedTodoItems);
  return (
    <main className="flex min-h-screen container flex-col items-center justify-between py-24 px-8">
      
      <AddNewItemSheet />
      
    </main>
  )
}
