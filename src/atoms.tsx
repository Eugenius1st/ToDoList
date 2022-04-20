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

//atom을 가져다가 output을 받을 수 있다. 그리고 getfunction이 atom을 받을 수 있다.
export const toDoSelector = selector({
    //selector를 이용해 각각의 카테고리고 state를 분리하고 싶다.
    key: "toDoSelector",
    get: ({ get }) => {
        // getfunction이 selector의 내부로 atom을 받을 수 있다.
        //여기서 return 하는 값이 toDoSelector의 value가 될 것이다.
        const toDos = get(toDoState);
        return [toDos.filter((toDo) => toDo.category === "TO_DO"), toDos.filter((toDo) => toDo.category === "DOING"), toDos.filter((toDo) => toDo.category === "DONE")];
    },
}); //filter함수는 배열에서 맞지 않는 원소들을 제거한 배열을 return 한다.
