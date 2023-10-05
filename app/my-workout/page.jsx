'use client';
import { useSelector, useDispatch } from "react-redux";
import { addAnswer, updateAnswer } from "../redux/answersSlice";
export default function MyWorkout () {
    const answers = useSelector((state) => state.answers);
    const dispatch = useDispatch();

    return (
        <div>
            {}
        </div>
    )
}