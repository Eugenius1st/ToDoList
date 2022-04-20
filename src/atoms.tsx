import { atom, selector } from "recoil";
//selector 는 atom의 output을 변형시키는 도구이다.

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE"; //string;
    //위 문자열만 받도록 제한한다.
}

export const toDoState = atom<IToDo[]>({
    //atom 타입이 toDo의 배열임을 알려준다. interface와 함께 있어야 한다.
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    //selector를 이용해 각각의 카테고리고 state를 분리하고 싶다.
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        return [toDos.filter((toDo) => toDo.category === "TO_DO"), toDos.filter((toDo) => toDo.category === "DOING"), toDos.filter((toDo) => toDo.category === "DONE")];
    },
});
