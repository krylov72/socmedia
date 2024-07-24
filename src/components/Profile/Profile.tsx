import { StatePropsType } from '../Redux/state'
import { Posts } from './Posts/Posts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  state:StatePropsType
  dispatch: (action:{type:string,newText:string}) => void
}

export const Profile = ({state,dispatch}:ProfilePropsType) => {
  return (
    <div className={s.content}>
      <img src="https://siabit.ru/wp-content/uploads/2023/10/5.jpg" alt="" />
      <ProfileInfo photo={'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'} name='Denis K.' city='Tyumen' dateOfBirth='18.10.1999' education='IT-INCUBATOR' webSite='github.com/krylov72' />
      <Posts posts = {state.postsPage} dispatch = {dispatch} />

    </div>
  )
}