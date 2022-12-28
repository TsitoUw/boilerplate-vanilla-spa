const user = "John Doe";

export default function useUserStore(){
  function setUser(_user){
    user = _user;
  }

  return {user,setUser}
}