import { StoreType } from "../Redux/redux-store";
import s from './Users.module.css'

type UsersPropsType = {
    state:StoreType
    onFollow: (id:number) => void
};
export const Users = ({state,onFollow}:UsersPropsType) => {

    return (
        
        <div>
            Users
            <div>
                <div style={{display:'flex',flexDirection:'column',gap:'10px',marginTop:'30px',marginLeft:'10px'}} >
                    <img style={{width:'60px'}}  src={state.usersPage.users[0].photo} alt="" />
                    <button style={{width:'50px',marginLeft:'3px'}}>s</button>
                </div>
                div
            </div>
        </div>
    );
};
