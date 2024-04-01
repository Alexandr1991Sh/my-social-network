

export type UserLocation = {
    city: string;
    country: string;
};

export type UserType = {
    id: number;
    photoUrl: string;
    followed: boolean;
    fullName: string;
    status: string;
    location: UserLocation;
};

type InitialStateType = {
    users: UserType[];
};


type ActionsUsersType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>



const initialState: any = {
    users: [
        // { id: 1, photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg", followed: true, fullName: 'Yulia', status: "", location: { city: "Minsk", country: "Belarus" } },
        // { id: 2, photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg", followed: false, fullName: 'Yulia', status: "", location: { city: "Moscow", country: "Russia" } },
        // { id: 3, photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg", followed: false, fullName: 'Yulia', status: "", location: { city: "Kiev", country: "Ukraine" } },
    ],
}


export const usersReducer = (state: any = initialState, action: ActionsUsersType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u:UserType ) => u.id === action.userID ? { ...u, followed: true } : u)
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u:any) => u.id === action.userID ? { ...u, followed: false } : u)
            }

        case "SET-USERS":
            return { ...state, users: [...action.users] }

        default: return state
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

export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
