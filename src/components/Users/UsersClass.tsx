import axios from "axios"
import React from "react";
import styles from './usersStyle.module.css'

type UsersPropsType = {
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUsers: (users: UserItem[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCountAC: (totalUsersCount: number) => void
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPade: number
}
export type UserItem = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}
export type UserResponse = {
    error: null | string
    totalCount: number
    items: Array<UserItem>
}


export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get<UserResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPade}&count=${this.props.pageSize}`)
                .then((res) => {
                    this.props.setUsers(res.data.items)
                    this.props.setTotalUsersCountAC(res.data.totalCount)
                })
        }
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
            axios.get<UserResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then((res) => {
                    this.props.setUsers(res.data.items)
                })
    }

    render(): React.ReactNode {

        let pages: Array<number> = []
        const pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        for (let i = 1; i <= pageCount; i++) {
            if (pages.length < 15) {
                pages.push(i)
            }
        }

        return <>

            {pages.map((p) => {
                return <button onClick={() => {
                    this.onPageChange(p)
                }}
                               className={this.props.currentPade === p ? styles.selectedPage : ' '} key={p}>{p}</button>
            })}

            {this.props.users.map((u) => {
                return <div key={u.id}>
                    <div>

                        <div>
                            <img width="300px"
                                 src={u.photos.small || 'https://trikky.ru/wp-content/blogs.dir/1/files/2019/01/09/D4EA8487-67DB-410C-B38B-5A33F3190862.jpeg'}
                                 alt="photoProfile"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>

                    </div>

                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>
            })}
        </>
    }
}
