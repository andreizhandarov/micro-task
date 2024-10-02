import { Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import { S } from './components/pages/_styles';
import  styles  from './components/Site.module.css';
import { PATH } from './routes/Router';

function App() {

    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper> <NavLink to={PATH.ADIDAS} >Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper> <NavLink to={PATH.PUMA} >Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper> <NavLink to={PATH.ABIBAS} >Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper> <NavLink to={PATH.PRISES} >Prises</NavLink></S.NavWrapper>
                    <S.NavWrapper> <NavLink to={PATH.PROTECTEDPAGE} >Protected Page</NavLink></S.NavWrapper>
                </S.Nav>
                <S.Content>
                    <div className={styles.HorizontalNavigation}>
                        <Link className={styles.LinkLikeButton} to={PATH.ADIDAS}>Home page</Link>
                        <button className={styles.ButtonLikeLink} onClick={navigateHandler}>Back</button>
                    </div>
                    <Outlet/>
                </S.Content>
            </S.Body>
            <S.Footer>sniker 2023</S.Footer>
        </div>
    );
}

export default App;

