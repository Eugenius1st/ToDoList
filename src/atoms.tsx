import { atom, selector } from "recoil";

// type categories = "TO_DO" | "DOING" | "DONE";
//type보다 멋진 것을 써보자! type은 복붙을 안하게 해주는 녀석인데, 이로는 충분하지 않다.
//enum을 사용해보자.

export enum Categories {
    // "TO_DO",
    // "DOING",
    // "DONE",
    //데이터를 원하는 모습으로 주기 위해
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
    // 이런 식으로 입력해도 된다.
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    //categoryState가 이 <"TO_DO" | "DOING" | "DONE"> 세개 중에 하나일 것이라고 말해준다.
    //categories 라는 타입을 만들어서 편하게 주자
    key: "category",
    // default: "TO_DO",
    default: Categories.TO_DO,
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
        return toDos.filter((toDo) => toDo.category === category);
    },
});
