import {Dispatch} from "redux";
import {AppRootStateType} from "../store/reduxStore/storeRedux";
import {UserItem} from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../store/reducers/usersReducer";
import {Users} from "./UsersClass";

type mapStateToPropsType = {
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPade: number
}
type mapDispatchToPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserItem[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCountAC:(totalUsersCount: number)=>void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPade: state.usersPage.currentPade
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: UserItem[]) => dispatch(setUsersAC(users)),
        setCurrentPage:(currentPage:number)=>dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCountAC:(totalUsersCount: number)=>dispatch(setTotalUsersCountAC(totalUsersCount)),
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
