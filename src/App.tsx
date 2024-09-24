import { NavLink, Outlet} from 'react-router-dom';
import { S } from './components/pages/_styles';
import { PATH } from './routes/Router';

function App() {
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
                    <Outlet/>
                </S.Content>
            </S.Body>
            <S.Footer>sniker 2023</S.Footer>
        </div>
    );
}

export default App;

