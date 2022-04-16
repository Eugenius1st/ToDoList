import { atom } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE"; //string;
    //위 문자열만 받도록 제한한다.
}

export const toDoState = atom<IToDo[]>({
    //atom 타입이 toDo의 배열임을 알려준다.
    key: "toDo",
    default: [],
});
