import { useRecoilValue } from "recoil";
import { toDoState } from "../../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
//학습목표: 컴포넌트가 서로를 의존하지 않고, 모두가 atom만 바라보게 하자!

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
                    //...toDo의 prop이름이 달랐다면 작동하지 않았을 것이다.
                ))}
            </ul>
        </div>
    );
}
