import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
//사용자들이 버튼을 이용해서 toDo의 카테고리를 바꿀 수 있게 하는 기능

export default function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    //atom의 값과 그것을 수정하는 modifier 함수를 반환해준다. category, setCategory
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    };

    return (
        // atom 에서 값을 받아오지 않고 selector로 부터 값을 받아온다.
        // output을 변형한다.
        <div>
            <h1>To Dos</h1>
            <hr />
            <form>
                <select value={category} onInput={onInput}>
                    <option value="TO_DO">ToDo</option>
                    <option value="DOING">Doing</option>
                    <option value="DONE">Done</option>
                </select>
            </form>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
            {/* {category === "TO_DO" && toDo.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
            {category === "DOING" && doing.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
            {category === "DONE" && done.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)} */}
            {/* 위의 방법은 구리다 !! selector를 사용하자, 내부에 여러 atom을 가져올 수 있다. */}
        </div>
    );
}
