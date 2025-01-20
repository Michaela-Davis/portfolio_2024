function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="section">
      <div className="container textAlignLeft">
        <p>© 2024-{currentYear} Michaela Davis</p>
      </div>
    </footer>
  );
}

export default Footer;