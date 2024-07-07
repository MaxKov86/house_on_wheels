import css from './CardLayout.module.css'

const CardLayout = ({children}) => {
    return <div className={css.cardLayout}>
        {children}
    </div>
}

export default CardLayout