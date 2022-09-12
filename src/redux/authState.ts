
//1. what variables we need to handle
export class AuthState{
    userName:string = "";
    userType:string = ""; //customer,admin,....
    userToken:string= ""; //oauth2, jwt(oauth0)
}


//2. what actions we need to handle
export enum authActionType{
    UserLogin = "UserLogin",
    UserLogout = "UserLogout",
    UpdateToken = "UpdateToken",
}

//3. what will be the structure of the action
export interface authAction{
    type: authActionType,
    payload?:any,
}

//4. which functions we will expose to user....
export function userLogin(userData:AuthState):authAction{
    return {type:authActionType.UserLogin, payload: userData}
}

export function userLogout():authAction{
    return {type:authActionType.UserLogout}
}

export function updateToken(userToken:string):authAction{
    return {type:authActionType.UpdateToken, payload: userToken}
}

//5. our beloved reducer :)
//redux function(state,action)
export function authReducer(currentState: AuthState = new AuthState, action:authAction):AuthState{
    const newState = {...currentState};

    switch(action.type) {
        case authActionType.UserLogin:
            newState.userName = action.payload.userName;
            newState.userType = action.payload.userType;
            newState.userToken = action.payload.userToken;
            break;
        
        case authActionType.UserLogout:
            newState.userName = "";
            newState.userType = "";
            newState.userToken = "";
            break;

        case authActionType.UpdateToken:
            newState.userToken = action.payload.userToken;
            break;
    }

    return newState;
}