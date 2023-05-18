import classes from './index.module.css';

const Toggle = ({ children, active }) => {
  return (
    <div className={`${classes.toggle} ${active ? classes.active : ''}`}>
        {children}
    </div>
  )
}

export default Toggle;