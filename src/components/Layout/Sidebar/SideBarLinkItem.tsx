import { Link, useLocation } from 'react-router-dom';
// Import your module styles
import styles from './Sidebar.module.scss';
import { SidebarItemProps } from './SideBarLinkList';

export default function SidebarItem(props: SidebarItemProps) {
  const { route, children } = props;

  const location = useLocation();
  const isActive = route.activeNames.includes(location.pathname);

  return (
    <div className={`${styles.sidebaritem} ${isActive ? styles.active : ''}`}>
      <Link to={route.to}>{route.text}</Link>

      {/* Recursively render children if available */}
      {children && children.length > 0 && (
        <div className={styles.sidebarsubmenu}>
          {children.map((child, index) => (
            <SidebarItem key={index} route={child} />
          ))}
        </div>
      )}
    </div>
  );
}
