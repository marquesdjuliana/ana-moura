import styles from './style.module.css'
const WhatsAppIcon: React.FC = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=556282660770" target="_blank">
      <img
        src="https://img.icons8.com/ios/452/whatsapp.png"
        alt="Ícone do WhatsApp"
        className={styles.iconImage}
      />
    </a>
  );
};

export default WhatsAppIcon;
