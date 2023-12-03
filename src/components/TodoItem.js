"use client"


export default function TodoItem({ todo }) {
    return <li className="flex gap-1 items-center">
        <input id={todo.id} type="checkbox" className="cursor-pointer peer" />
        <label htmlFor={todo.id} className="peer-checked:line-through">{todo.title}</label>
    </li>
}