import { Routes, Route } from 'react-router-dom'
import './App.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';

function App() {

  return (
    <>
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
    </>
  );
}

export default App;
