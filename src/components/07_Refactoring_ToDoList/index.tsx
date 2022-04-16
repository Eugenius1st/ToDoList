import { useRecoilValue } from "recoil";
import { toDoState } from "../../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export default function ToDoList() {
    const toDos = useRecoilValue(toDoState);
    // 위 함수는 아래 두개 함수 사용한 것과 같다. 이름은 중요하지 않다.
    // const value = useRecoilValue(toDoState);
    // const modFn = useSetRecoilState(toDoState);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                    //  text={toDo.text} category={toDo.category} id={toDo.id}
                ))}
            </ul>
        </div>
    );
}
