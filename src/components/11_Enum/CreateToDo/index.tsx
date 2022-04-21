import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../../../atoms";

//새 toDo를 추가할 때 매번 "TO_DO"카테고리로 들어가게 된다. toDo 카테고리가 categoryState에 따라 정해지도록 하고 싶다.

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    // 값만 얻고 싶다면 useRecoilValue를 사용하라
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category }, ...oldToDos]);
        //category는 세 종류로 제한되는데 (TO_DO/DOING/DONE) 이를 atom의 categoryState에 알려주면 된다.
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("toDo", {
                    required: "Please write a To Do",
                })}
                placeholder="Write a to do"
            />
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;
