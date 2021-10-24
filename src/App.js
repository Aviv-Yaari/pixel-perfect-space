import { Navbar } from './cmps/Navbar';
import { DestPage } from './pages/DestPage';
import { HomePage } from './pages/HomePage';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CrewPage } from './pages/CrewPage';
import data from './data.json';

export function App() {
  const { crew } = data;
  const location = useLocation();
  let pageClass = '';
  if (location.pathname.startsWith('/destination')) pageClass = 'curr-destination';
  else if (location.pathname.startsWith('/')) pageClass = 'curr-home';
  return (
    <main className={`main-app main-layout ${pageClass}`}>
      <Navbar />
      <Switch>
        <Route path="/crew">
          <CrewPage crew={crew} />
        </Route>
        <Route path="/destination/:name?" component={DestPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </main>
  );
}
