import { Posts } from './Posts/Posts'
import s from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={s.content}>Hello
      <img src="https://siabit.ru/wp-content/uploads/2023/10/5.jpg" alt="" />
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=43ceb99d45f9d9a4d78cd04d9329f9c18c2f687dde0f975c-4860157-images-thumbs&n=13" alt="" />
      </div>
      <Posts />

    </div>
  )
}