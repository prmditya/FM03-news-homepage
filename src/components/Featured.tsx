import Retro from "../assets/images/image-retro-pcs.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";
import Laptop from "../assets/images/image-top-laptops.jpg";

function Featured() {
  return (
    <div className="featured">
      <div className="featured-card">
        <picture>
          <img src={Retro} alt="" />
        </picture>
        <div className="featured-content">
          <h4>01</h4>
          <strong>Reviving Retro PCs</strong>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="featured-card">
        <picture>
          <img src={Laptop} alt="" />
        </picture>
        <div className="featured-content">
          <h4>02</h4>
          <strong>Top 10 Laptops of 2022</strong>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="featured-card">
        <picture>
          <img src={Gaming} alt="" />
        </picture>
        <div className="featured-content">
          <h4>03</h4>
          <strong>The Growth of Gaming</strong>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
