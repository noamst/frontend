import { IRoutesModel } from '@src/routes';
import { Link, useLocation } from 'react-router-dom';
// Import your module styles
import styles from './Sidebar.module.scss';
interface SidebarItemProps {
  route: IRoutesModel;
}

export default function SidebarItem({ route }: SidebarItemProps) {
  const location = useLocation();
  const isActive = route.activeNames.includes(location.pathname);

  return (
    <div className={`${styles.sidebaritem} ${isActive ? styles.active : ''}`}>
      <Link to={route.to}>{route.text}</Link>

      {/* Recursively render children if available */}
      {route.children && route.children.length > 0 && (
        <div className={styles.sidebarsubmenu}>
          {route.children.map((child) => (
            <SidebarItem key={child.to} route={child} />
          ))}
        </div>
      )}
    </div>
  );
}