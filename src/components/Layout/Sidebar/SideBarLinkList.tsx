import { routes as routesRaw } from '@src/routes';
import SideBarLinkItem from './SideBarLinkItem';
import DarkModeToggle from '@src/components/DarkModeToggle';

export default function SideBarLinkList() {
  //const { pathname } = useLocation();

 
  return (
    <div className='flex animate-appear flex-col items-start justify-start text-sm font-thin'>
      {routesRaw.map((route) => (
        <SideBarLinkItem route={route} />
      ))}

      <DarkModeToggle size={20} />
    </div>
  );
}
