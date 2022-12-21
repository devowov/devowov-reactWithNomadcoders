import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text,click}){
    return <button className={styles.btn} onClick={click}>  {text}  </button>;
}

Button.propTypes={
    text: PropTypes.string.isRequired,
}

export default Button;