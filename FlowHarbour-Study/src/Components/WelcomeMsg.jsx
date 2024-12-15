import styles from "./WelcomeMsg.module.css";
function WelcomeMsg() {
  return <h3 className={`${styles["welcome"]}`}>Enjoy your day!!!</h3>;
}
export default WelcomeMsg;
