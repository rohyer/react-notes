import style from './Header.module.css';
import { TextField } from '@mui/material';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <div className={style.hamburgerButton}>
          <span></span>
        </div>

        <div>
          Logo
        </div>
      </div>

      <TextField className={style.textField} id="standard-basic" label="Pesquisar" variant="standard" sx={{ width: '100%', maxWidth: 500}} />
    </header>
  )
}

export default Header;