import "../footer/footer.scss";

function Footer({ data }) {
  const dataNetworks = data.find((element) => (element.type = "networks"));
  return (
    <footer>
      <nav className="footerNav">
        {dataNetworks?.items.map((item, id) => (
          <a key={id} href={item.url} target="blank">
            <img src={item.logo} alt="" />
          </a>
        ))}
      </nav>
      <p>Clément Brossier © 2024</p>
    </footer>
  );
}
export default Footer;
