type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photo:string
    username: string
    followed:boolean
    status: string
    location: LocationType
}
export type UsersType = {
    users: UserType[]
}

export type ActionType = unfollowACType | FollowACType | setUsersACType
const initialState: UsersType = {
    users: [
        {
            id: 1,
            photo: 'https://cdn-icons-png.flaticon.com/512/847/847969.png ',
            username: 'Denis',
            followed:false,
            status: 'Looking for a job',
            location: {
                city: 'Tuymen',
                country: 'Russia'
            }
        },
        {
            id: 2,
            photo: '',
            username: 'Asya',
            followed:true,
            status: 'Working in Garden Coffee',
            location: {
                city: 'Tuymen',
                country: 'Russia'
            }
        },
        {
            id: 3,
            photo: '',
            username: 'Mixyul',
            followed:false,
            status: 'Тестировщик энергетических напитков',
            location: {
                city: 'Tuymen',
                country: 'Russia'
            }
        }
    ]
}


export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state,users:state.users.map(u => u.id === action.payload.id?{...u,followed:true}:u)}
        }
        case 'UNFOLLOW': {
            return {...state,users:state.users.map(u => u.id === action.payload.id?{...u,followed:false}:u)}
        }
        case 'SET-USERS':{
            return {...state,users:[...state.users,...action.payload.users]}
        }
        default: return state
    }
}


export type unfollowACType = ReturnType <typeof unfollowAC>
export type FollowACType = ReturnType <typeof followAC>
export type setUsersACType = ReturnType <typeof setUsersAC>


export const followAC = (id:number) => {
    return{
        type:'FOLLOW',
        payload:{
            id
        }
    } as const
}

export const unfollowAC = (id:number) => {
    return{
        type:'UNFOLLOW',
        payload:{
            id
        } 
    }as const
}

export const setUsersAC = (users:UserType[]) => {
    return {
        type:'SET-USERS',
        payload:{
            users
        }
    } as const
}
 