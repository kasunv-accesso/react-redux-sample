import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Items } from '../pages';
import routes from './routes';
import styled from "styled-components";

export const AppRouter = () => {
    return (
        <Router >
            <AppContainer>
                <Routes>
                    <Route path={routes.home()} element={<Home />} />
                    <Route path={routes.items()} element={<Items />} />
                </Routes>
            </AppContainer>
        </Router>
    )
}

const AppContainer = styled.div`
display: flex;
max-width : 800px;
margin: 0 auto;
padding: 10px;
`