import { FiLock } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import styles from './Form.module.css'


 
function Form() {
      return (

        
          <>
            <form action="#" method="post">
                <label htmlFor="email">
                    <p>E-mail</p>
                    <FiUser className={styles.icon} size="16px"/>
                </label>
                    <input type="email" className="email" placeholder="Digite seu e-mail"/>
                
                <label htmlFor="password">
                    <p>Senha</p>
                    <FiLock className={styles.icon} size="16px"/>
                </label>
                    <input type="password" className="password" placeholder="Digite sua senha" />

                <label htmlFor="check">
                    <input type="checkbox" className={styles.checkbox}/>Lembrar meu Login
                </label>

                <input type="submit" value="Entrar" className={styles.btn_entrar} />
            </form>
          </>
      )
}

export default Form