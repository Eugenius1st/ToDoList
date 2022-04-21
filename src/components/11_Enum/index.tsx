import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

//prop을 이리저리 주지 않아도 되고, 필요할 때 수정할 수 있다는 것은 멋지다.
// 필요한 것을 요청하기만 하면 되는 것이다.

export default function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
        //타입 스크립트는 option의 value가 categories 타입과 같다는 것을 알지 못하므로
        // as any로 타입을 지정해준다. 회피하는 것은 좋은 행동이 아니지만, 나중에 카테고리의 타입을 하나로 정해둘 것이고 모두가 그 타입만 사용하게 할 것이다.
    };

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form>
                <select value={category} onInput={onInput}>
                    <option value={Categories.TO_DO}>ToDo</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                    {/* 실수가 염려되기에 string을 쓰는 것을 좋지 않다. Categories.TO_DO 이런 식으로 바꿔주자 */}
                </select>
            </form>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
}
