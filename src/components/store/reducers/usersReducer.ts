import {UserItem} from "../../Users/Users";

type InitialStateType = {
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPade: number
};

type ActionsUsersType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPade: 1
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionsUsersType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u: UserItem) => u.id === action.userID ? {...u, followed: true} : u)
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u: UserItem) => u.id === action.userID ? {...u, followed: false} : u)
            }

        case "SET-USERS":
            return {...state, users: [...action.users]}

        case "SET-CURRENT-PAGE":
            return {...state, currentPade: action.currentPage}

        case "SET-USERS-TOTAL-COUNT":
            return {...state, totalUserCount: action.totalUsersCount}

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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        totalUsersCount
    } as const
}