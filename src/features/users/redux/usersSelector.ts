import { RootState } from "../../../store/store";

export const selectIsLoading=(state:RootState)=>state.users?.isLoading??false;
export const selectUserList=(state:RootState)=>state.users?.userList??[];
export const selectError=(state:RootState)=>state.users.error??null;