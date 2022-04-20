import { useRecoilValue } from "recoil";
import { toDoSelector } from "../../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
//사용자들이 버튼을 이용해서 toDo의 카테고리를 바꿀 수 있게 하는 기능
export default function ToDoList() {
    const [toDo, doing, done] = useRecoilValue(toDoSelector);
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <h2>To Do</h2>
            <ul>
                {toDo.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>Doing</h2>
            <ul>
                {doing.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>Done</h2>
            <ul>
                {done.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
        </div>
    );
}
