import { connect } from "react-redux";
import { UsersType, followAC } from "../Redux/usersReducer";
import { Users } from "./Users";
import { StoreType } from "../Redux/redux-store";


const mapStateToProps = (state:StoreType) => {
    return {
        state:state
    }
}

const mapDispatchToProps = (dispatch:(ActionType:{type:string}) => void) => {
    return {
        onFollow: (id:number) => {
            dispatch(followAC(id))
        }
    }
}


export const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users)