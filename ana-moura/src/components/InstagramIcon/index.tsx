import styles from "./style.module.css";

const InstagramIcon = () => {
  return (
    <a
      href="https://www.instagram.com/ana.lisart/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/ios/452/instagram-new.png"
        className={styles.iconImage}
      />
    </a>
  );
};

export default InstagramIcon;
