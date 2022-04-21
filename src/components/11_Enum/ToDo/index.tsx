import React from "react";
import { useSetRecoilState } from "recoil";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { Categories, IToDo, toDoState } from "../../../atoms";

export default function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };

    // console.log();
    //모두가 같은 enum값을 참조한다. 코드상에서 TO_DO는 0 , DOING은 1, DONE은 2이다.
    return (
        <li>
            <span>{text}</span>
            {/* enum 으로 인해 string과 비교했던 것을 바꿔주자 */}
            {category !== Categories.DOING && (
                // <button name={Categories.DOING + ""} onClick={onClick}>
                /* enum은 프로그래머를 돕기위해 일련의 숫자를 문자로 표현해준다 그래서
                    버튼의 name이 숫자여선 안된다 string이어야 한다 */
                <button name={Categories.DOING} onClick={onClick}>
                    {/* enum에서 categories의 값을 string으로 주어서 +"" 는 사용하지 않아도 된다. */}
                    Doing
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
}
