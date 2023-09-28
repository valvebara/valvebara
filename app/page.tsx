import { Figtree } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/home/header";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

function Bakcgounrd() {
  return (
    <img
      className="w-[70%] h-full fixed top-0 left-0 right-0 bottom-0 rotate-[4deg] translate-x-[50%] pointer-events-none"
      src="/images/arc-blur.svg"
      alt="Blur Arc Background"
    />
  );
}

function Badge() {
  return (
    <Link
      href="https://www.producthunt.com/@valvebara"
      className="text-white text-sm rounded-full border border-[#353947] py-1 px-1 inline-flex items-center"
    >
      <span className="rounded-full bg-[#32343d] py-1 px-2 mr-2">🎉 New</span>
      We are live on Product Hunt!
      <ArrowRight strokeWidth={1} size="1.5em" className="mx-2" />
    </Link>
  );
}

export default function Home() {
  const toggleMenu = () => {};
  return (
    <div
      className={clsx(
        figtree.className,
        "relative dark:bg-[#020202] min-h-screen overflow-hidden "
      )}
    >
      <Bakcgounrd />
      <div className="block mx-16 z-1">
        <Header />
        <div className="mid_section">
          <div className="mt-16">
            <Badge />
            <h1 className="text-8xl not-italic font-bold mt-4 w-[8em] dark:text-white break-words leading-[96px]">
              Manage your Subscription based billing
            </h1>
            <p className="text-xl not-italic font-normal mt-4 dark:text-[#fdfdfda3] w-[26em]">
              Valvebara is a free and open-source project that helps you manage
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
                  <div className="item active">What is Valvebara?</div>
                  <div className="item">Why Valvebara?</div>
                  <div className="item">Get Started</div>
                  <div className="active-bar"></div>
                </div>

                <div className="menu_mobile">
                  <div className="item active">What is Valvebara?</div>
                  <div className="item">Why Valvebara?</div>
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
                  Introducing Valvebara{" "}
                  <span>
                    <img
                      className="btn_icon_item"
                      src="/Assets/Sparkle.svg"
                      alt=""
                    />
                  </span>
                </h3>
                <p className="hero_b_text">
                  Valvebara is a free and open-source project that helps you
                  manage subscription-based billing to save on costs.
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
