import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
//사용자들이 버튼을 이용해서 toDo의 카테고리를 바꿀 수 있게 하는 기능

export default function ToDoList() {
    const [toDo, doing, done] = useRecoilValue(toDoSelector);
    //배열 안에 세개의 배열을 담은 상태이다.
    // const toDos = useRecoilValue(toDoState);
    // const selectorOutput = useRecoilValue(toDoSelector);
    return (
        // atom 에서 값을 받아오지 않고 selector로 부터 값을 받아온다.
        // output을 변형한다.
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
