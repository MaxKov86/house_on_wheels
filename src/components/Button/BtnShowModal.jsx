import css from "./BtnShowModal.module.css"

const BtnShowModal = ({children}) => {
    return <button className={css.button} type="button">{children}</button>
}

export default BtnShowModal