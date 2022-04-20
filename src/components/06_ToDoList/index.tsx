import { useForm } from "react-hook-form";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
//학습목표: Recoil의 많은 함수와 기능을 배우자 !

interface IForm {
    toDo: string;
}

interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE"; //string;
    //위 문자열만 받도록 제한한다.
}
const toDoState = atom<IToDo[]>({
    //atom 타입이 toDo의 배열임을 알려준다.
    key: "toDo",
    default: [],
});

export default function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    // 위 함수는 아래 두개 함수 사용한 것과 같다. 이름은 중요하지 않다. 이는 const[x, setX] = useState()와 비슷하다.
    // const value = useRecoilValue(toDoState); useRecoilState를 이용하면 배열이 된다. 그 안에 atom을 넣어준다.
    // const modFn = useSetRecoilState(toDoState); atom값을 바꿀 수 있는 함수이다.

    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos]); // ...은 요소들이 들어가 있는 배열을 반환한다.
    }; //setToDos() 에서는 값을 직접 바꿀 수도 있고, 함수를 안에 사용할 수도 있다. 원하는 return형식은 객체에 담았다.

    console.log("toDo", "");

    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("toDo", {
                        required: "Please write a To Do",
                    })}
                    placeholder="Write a to do"
                />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <li key={toDo.id}>{toDo.text}</li>
                ))}
            </ul>
        </div>
    );
}
