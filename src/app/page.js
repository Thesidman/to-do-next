import { PrismaClient } from "@prisma/client";
import ABC from '../components/TodoItem.js';
import Link from "next/link"


async function getToDos() {

  const prisma = new PrismaClient()
  return await prisma.todo.findMany()
}

export default async function home() {
  const todos = await getToDos()
  // await prisma.todo.create({ data: { title: "test", completed: false } })

  return (
    <><div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl"> To Do</h1>
        <Link href="./new" className="text-2xl border-2 border-orange-200 rounded-lg px-2 py-1 hover:bg-slate-950 hover:text-yellow-300 ">New</Link>
      </header>
    </div>
      <ul className="pl-4">
        {todos.map(todo => (
          <ABC key={todo.id} todo={todo} />
        ))}
      </ul></>
  )
}