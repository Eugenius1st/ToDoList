import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../../../atoms";

export default function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;

        setToDos((oldToDos) => {
            //수정하고자 하는 ToDo의 주소를 찾기 위함
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            //배열의 todo의 조건을 만족하는 인덱스 번호를 찾는다. id와 props에서 오는 값이 같은지 확인. target의 경로를 찾았다.
            const newToDo = { text, id, category: name as any };
            // 새로운 todo를 만들어서 카테고리를 업데이트 한다.
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
            // 배열을 타겟 ~ idx까지 자르고, 그 뒤는 idx+1 ~ 끝 까지 붙여준다
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && (
                <button name="DOING" onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== "TO_DO" && (
                <button name="TO_DO" onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== "DONE" && (
                <button name="DONE" onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
}
