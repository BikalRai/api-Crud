const Footer = () => {
  const footerStyles = {
    padding: "2rem",
    backgroundColor: "rgb(49, 54, 63)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(238, 238, 238)",
    fontWeight: "700",
    position: "sticky",
    width: "100%",
    top: "100%",
    left: "0",
    bottom: "0",
  };

  return (
    <footer style={footerStyles}>
      <p>Copyright ©️ Bikal Rai {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
