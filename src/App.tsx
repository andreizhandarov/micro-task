import { Adidas } from './components/pages/Adidas';
import { Puma } from './components/pages/Puma';
import { Abibas } from './components/pages/Abibas';
import { NavLink, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { S } from './components/pages/_styles';
import { Model } from './components/pages/Model';
import { Prices } from './components/pages/Prices';
import { PATH } from './routes/Router';

// const PATH = {
//     ADIDAS: '/adidas',
//     PUMA: '/puma',
//     ABIBAS: '/abibas',
//     MODEL: '/:model/:id',
//     PRISES: '/prises',
//     ERROR404: '/error404'
// } as const

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
                </S.Nav>
                <S.Content>
                    {/* <Routes>
                        <Route path="/" element={<Navigate to={PATH.ADIDAS}/>}/>

                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>
                        <Route path={PATH.PRISES} element={<Prices/>}/>

                        <Route path={"/*"} element={<Error404/>}/>  */}
                        {/* <Route path="/*" element={<Navigate to={PATH.ERROR404}/>}/> */}
                    {/* </Routes> */}

                    <Outlet/>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;

