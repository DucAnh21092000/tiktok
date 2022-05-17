import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import HomePages from './pages/homePage/HomePages';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';
import { Fragment } from 'react/cjs/react.production.min';

function App() {

  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if(route.layout){
            Layout = route.layout
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.element />
                </Layout>}>
            </Route>
          )
        })}
      </Routes>
    </div>
  );
}

export default App;
