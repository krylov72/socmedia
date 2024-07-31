import { connect } from "react-redux";
import { UserType,followAC, setUsersAC, unfollowAC } from "../Redux/usersReducer";
import { Users } from "./Users";
import { StoreType } from "../Redux/redux-store";


const mapStateToProps = (state:StoreType) => {
    return {
        state:state.usersPage
    }
}

const mapDispatchToProps = (dispatch:(ActionType:{type:string}) => void) => {
    return {
        follow: (id:number) => {
            dispatch(followAC(id))
        },
        unfollow:(id:number) => {
            dispatch(unfollowAC(id))
        },
        setUsers:(users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users)