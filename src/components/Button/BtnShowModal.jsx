import css from "./BtnShowModal.module.css"

const BtnShowModal = ({children,isOpen }) => {
    return <button className={css.button}  type="button" onClick={isOpen}>{children}</button>
}

export default BtnShowModal