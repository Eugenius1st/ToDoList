import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

//모든 것을 한번에 보여주지 않고 원하는 카테고리만 보여주도록 할 것이다.
export const categoryState = atom({
    key: "category",
    default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        //카테고리에 따라 하나의 배열만을 반환하도록 하자
        return toDos.filter((toDo) => toDo.category === category);
        //코드가 매우 단순해졌다. selector가 toDos랑 category를 받아와서 category에 따라 toDo를 분류해준다.
    },
});
