import {UserItem} from "../../Users/Users";

type InitialStateType = {
    users: UserItem[];
};

type ActionsUsersType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const initialState: any = {
    users: []
}


export const usersReducer = (state: any = initialState, action: ActionsUsersType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u: UserItem) => u.id === action.userID ? {...u, followed: true} : u)
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u: any) => u.id === action.userID ? {...u, followed: false} : u)
            }

        case "SET-USERS":
            return {...state, users: [...action.users]}

        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}


export const unfollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsersAC = (users: UserItem[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
