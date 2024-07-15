import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <p>INCUBATOR</p>
            <img src="https://www.svgrepo.com/show/322594/incubator.svg" alt="" color="white" />
        </header>
    )
}