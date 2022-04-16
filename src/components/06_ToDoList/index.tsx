import { useForm } from "react-hook-form";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

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
    // 위 함수는 아래 두개 함수 사용한 것과 같다. 이름은 중요하지 않다.
    // const value = useRecoilValue(toDoState);
    // const modFn = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos]);
    };

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
