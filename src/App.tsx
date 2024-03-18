import { Outlet } from "react-router-dom";
import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';

const App: React.FC = () => (
	<div className="tpl-page">
    <MainHeader />
    <main>
      <Outlet />
    </main>
    <MainFooter />
  </div>
);

export default App;
