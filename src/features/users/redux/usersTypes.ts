export interface User{
  id: string;
  name: string;
  city: string;
  email: string;
  phone: string;
  image: string;
}

export interface UsersState{
  isLoading:boolean,
  userList:Array<User>,
  error:string|null;
}
