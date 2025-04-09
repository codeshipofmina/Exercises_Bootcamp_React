import { Link } from "react-router";
import "../App.css";
function HomePage() {
  return (
    <section className="homepage">
      <h1>Welcome to the ultimative BEER API!!!</h1>
      <Link to="/beers">
        <img
          src={`https://s3-alpha-sig.figma.com/img/1a80/7b0d/4b3d9d897635e6bee2e3d13b091eae75?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tayPkMMx56K8mBvKZRTmm-JEl0F4kTdOoQ-O-iiO2APyab82H1GxQsXgvUIDs4us5Y1Q7kqj18AvoFw~fMFm82KWfDQ0slamWPCtllNdqlWY9aQ2Pi6hjshHhHrZO~HV-5x3f9hp6I8MTwLYbJKfVZVSsWm2oMJ5NkCkaEtQZY0pXhr-se7BiSFD6igNnaoNy-COPlAc3xnVK-HARy5w9GXcsSv8-F9TdDtYvv7EzKrCn5Sl2RW550qHoMD-2-HtUP2GLd3Jgq2jfoRMmAdshoJF3cm-jdyBxTaDHzR7v87uIUuo5IT8RJtrXIEZZ~62~zR-CubXH0T9TGJuXowVIQ__`}
          alt="many beer bottles"
        />
        <h2>All Beers</h2>
      </Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        quaerat nemo ut molestias culpa voluptate officia, unde id sit magni eum
        dolores maxime ducimus omnis explicabo illum, vitae obcaecati
        architecto.
      </p>
      <Link to="/beers/random">
        <img
          src={`https://s3-alpha-sig.figma.com/img/9aca/8045/03186034af98542d2dedf365985e6e66?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XrJNtkVnz~O-saatn6nBPJadzAx7ywqDJJtwllhmct38mj6aI5LdBIgaZzM2-PVCGWjFXao1BgrYdYBm0WPC-RWr3DpXS1OtpvXm-LZ0wvpiIli79DvfN~sgb0evgEWLCzhoSPgmuxPsLeuMSeXfy2Sl7nC1DR90q-D-vZ56rYYB3rFMaa~wk0CMGUp~HRKA0MOOb5tt9rhyklkwDOvXWempI71xh73nhBvbWMNvebWvu5A~g~Lcp6GrsQ83QlicqZxwOGV96dSTT6MONsM1OK19isLb4oWpy~fzDFPK71l73z5Lj75Ws~DqZepFy3h24QDALEdKGxukxpndiNvBQQ__`}
          alt="some beers in glasses"
        />
        <h2>Random Beer</h2>
      </Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        quaerat nemo ut molestias culpa voluptate officia, unde id sit magni eum
        dolores maxime ducimus omnis explicabo illum, vitae obcaecati
        architecto.
      </p>
    </section>
  );
}

export default HomePage;
