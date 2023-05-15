import { useContext } from 'react';
import classes from './SidebarItem.module.css';
import { tabContext } from '../../../services/tab-context';

const SidebarItem = ({ icon, tabNumber }) => {
    const { activeTab, changeActiveTab } = useContext(tabContext);

    return (
        <li className={classes.item}>
            <button className={(activeTab === tabNumber) && classes.active} onClick={() => changeActiveTab(tabNumber)}>
                <p className={classes["top-curve"]}></p>
                <span>{icon}</span>
                <p className={classes["bottom-curve"]}></p>
            </button>
        </li>
    )
}

export default SidebarItem;