import { useEffect } from "react";
import { UserType, UsersType } from "../Redux/usersReducer";
import s from './Users.module.css'

type UsersPropsType = {
    state: UsersType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
};
export let Users = ({ state, follow, unfollow,setUsers }: UsersPropsType) => {

    useEffect(() => {
        if(state.users.length === 0) 
        setUsers([
            {
                id: 1,
                photo: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
                username: 'Denis',
                followed: false,
                status: 'Looking for a job',
                location: { city: 'Tuymen', country: 'Russia' }
            },
            {
                id: 2,
                photo: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
                username: 'Asya',
                followed: true,
                status: 'Working in Garden Coffee',
                location: { city: 'Tuymen', country: 'Russia' }
            },
            {
                id: 3,
                photo: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
                username: 'Mixyul',
                followed: false,
                status: 'Тестировщик энергетических напитков',
                location: { city: 'Tuymen', country: 'Russia' }
            }
        ])
    },[state.users.length,setUsers])
        
        

    return (
        <div className={s.users}>
            <h3>Users</h3>
            {state.users.map(u =>
                <div className={s.usersContainer} key={u.id}>
                    <div className={s.user}>
                        <div className={s.userImage} >
                            <img src={state.users[0].photo} alt="" />
                            {u.followed
                            ?<button onClick={() => {unfollow(u.id)}}>unfollow</button>
                            :<button onClick={() => {follow(u.id)}}>follow</button>
                            }
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userStatus}>
                                <h4>{u.username}</h4>
                                <p>{u.status}</p>
                            </div>
                            <div className={s.userLocation}>
                                <p>{u.location.city}, <br /> {u.location.country}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};
