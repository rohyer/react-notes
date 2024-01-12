import style from './Nav.module.css';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CategoryIcon from '@mui/icons-material/Category';
import DeleteIcon from '@mui/icons-material/Delete';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li><a href=""><StickyNote2Icon /> Notas</a></li>
        <li><a href=""><CategoryIcon /> Categorias</a></li>
        <li><a href=""><DeleteIcon /> Lixeira</a></li>
      </ul>
    </nav>
  )
}

export default Nav;