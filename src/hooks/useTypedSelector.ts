import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../redux/reducers/rootReducer";

export const useTypedSelector:TypedUseSelectorHook<rootState> = useSelector