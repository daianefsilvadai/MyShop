// estado que guarda as informações do usuario
interface User {
  name: string;
  email: string;
}
// userState um objeto tem user poder ser user ou null, pode ter a informação do usuario ou pode ser nulo
interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

//Reducer: guarda o estado que desejamos compartilhar na aplicação
//manipula/altera o estado
interface UserAction {
  type: string;
  payload?: User;
}

//Todo reducer precisa retornar o nosso estado atualizado
export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as User,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }
  return state;
}
