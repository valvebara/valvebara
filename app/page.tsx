import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

function Header() {
  return (
    <div className="top_header">
      <img className="logo" src="/Assets/Valve Logo.svg" alt="" />
      <div className="buttons">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
        <button className="getstarted">Get Started</button>
      </div>
    </div>
  );
}

export default function CardWithForm() {
  const toggleMenu = () => {};
  return (
    <div className={figtree.className}>
      <img className="blur" src="/Assets/Arc_blur.svg" alt="" />

      <div className="main_wrapper">
        <Header />

        <img className="divider" src="/Assets/Divider.svg" alt="" />

        <div className="mid_section">
          <div className="hero_a">
            <img className="info_badge" src="/Assets/Info badge.svg" alt="" />
            <h1 className="Hero_text">
              Manage your Subscription based billing
            </h1>
            <p className="body_text">
              Valve is a free and open-source project that helps you manage
              subscription-based billing to save on costs.
            </p>
            <div className="hero_buttons">
              <button className="docs_button">Read Docs</button>
              <button className="deploy_button">
                <span className="btn_icon">
                  <img
                    className="btn_icon_item"
                    src="/Assets/btn_icon.svg"
                    alt=""
                  />
                </span>
                Deploy to Vercel
              </button>
            </div>
          </div>
          <div className="hero_b">
            <div className="hero_b_container">
              <div className="hero_b_container_top">
                <div className="menu">
                  <div className="item active">What is Valve?</div>
                  <div className="item">Why Valve?</div>
                  <div className="item">Get Started</div>
                  <div className="active-bar"></div>
                </div>

                <div className="menu_mobile">
                  <div className="item active">What is Valve?</div>
                  <div className="item">Why Valve?</div>
                  <div className="active-bar"></div>
                </div>
              </div>

              <img
                className="divider_short"
                src="/Assets/short_divider.svg"
                alt=""
              />

              <div className="hero_b_container_body">
                <h3 className="hero_b_header">
                  Introducing Valve{" "}
                  <span>
                    <img
                      className="btn_icon_item"
                      src="/Assets/Sparkle.svg"
                      alt=""
                    />
                  </span>
                </h3>
                <p className="hero_b_text">
                  Valve is a free and open-source project that helps you manage
                  subscription-based billing to save on costs.
                </p>
              </div>

              <div className="breakdown_container">
                <div className="breakdown">
                  <span className="breakdown_icon">
                    <img src="/Assets/description_icon_cost.svg" alt="" />
                  </span>{" "}
                  <p className="breakdown_text">
                    Cut down AI Inference costs in minutes
                  </p>
                </div>
                <div className="breakdown">
                  <span className="breakdown_icon">
                    <img src="/Assets/description_icon_control.svg" alt="" />
                  </span>{" "}
                  <p className="breakdown_text">
                    Control center for all your subscriptions
                  </p>
                </div>
              </div>
            </div>

            <div className="compatible_projects">
              <img
                className="compatible_projects_img"
                src="/Assets/Compatible_projects.svg"
                alt=""
              />
            </div>

            <div className="compatible_projects_mobile">
              <img
                className="compatible_projects_mobile_img"
                src="/Assets/projects_mobile.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="bottom_section">
          <img className="bottom_logo" src="/Assets/Valve Logo.svg" alt="" />
          <ul className="bottom_menu">
            <li className="bottom_menu_item">
              <a className="link_item" href="url">
                Documentation
              </a>
            </li>
            <li className="bottom_menu_item">
              <a className="link_item" href="url">
                Contribution
              </a>
            </li>
            <li className="bottom_menu_item">
              <a className="link_item" href="url">
                Terms of Service
              </a>
            </li>
          </ul>

          <div className="social_links">
            <img
              className="social_links_item"
              src="/Assets/github.svg"
              alt=""
            />
            <img
              className="social_links_item"
              src="/Assets/discord.svg"
              alt=""
            />
            <img
              className="social_links_item"
              src="/Assets/twitter.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
