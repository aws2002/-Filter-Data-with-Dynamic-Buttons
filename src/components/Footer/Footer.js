import Logo from "../../images/Logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      category: "About",
      links: [
        { nameLink: "About", href: "#", id: 1 },
        { nameLink: "Terms", href: "#", id: 2 },
        { nameLink: "Legal", href: "#", id: 3 },
      ],
    },
    {
      id: 2,
      category: "NET",
      links: [
        { nameLink: "OpenSea", href: "#", id: 4 },
        { nameLink: "Maker", href: "#", id: 5 },
        { nameLink: "Learn", href: "#", id: 6 },
      ],
    },
    {
      id: 3,
      category: "Contact",
      links: [
        { nameLink: "Press", href: "#", id: 7 },
        { nameLink: "Support", href: "#", id: 8 },
      ],
    },
    {
      id: 4,
      category: "Social",
      links: [
        { nameLink: "Twitter", href: "#", id: 9 },
        { nameLink: "Instagram", href: "#", id: 10 },
      ],
    },
  ];
  const itemIcon = [
    { icon: <FaFacebook />, id: 1, href: "" },
    { icon: <FaTwitter />, id: 2, href: "" },
    { icon: <FaInstagram />, id: 3, href: "" },
    { icon: <FaTiktok />, id: 4, href: "" },
  ];
  return (
    <footer className=" pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className=" grid md:grid-cols-12 mt-24 md:gap-x-28 gap-x-0">
          <div className="md:col-span-6 mb-10">
            <ul>
              <li className=" text-4xl font-bold">
                <img className="inline" src={Logo} alt="" /> nftlanding
              </li>
              <li className=" mt-7 mb-2">
                Exclusive NFT Collection
              </li>
              {itemIcon.map((item) => (
                <div className=" inline" key={item.id}>
                  <a
                    href={item.href}
                    className=" text-2xl text-text_color mr-3"
                  >
                    {item.icon}
                  </a>
                </div>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <div className=" grid grid-cols-12">
              {footerLinks.map((item) => (
                <div className="md:col-span-3 col-span-6 mb-10" key={item.id}>
                  <ul>
                    <li className="font-bold text-xl mb-3 uppercase">
                      {item.category}
                    </li>

                    {item.links.map((link) => (
                      <li
                        className=" text-[14px] mb-4 font-semibold"
                        key={link.id}
                      >
                        <a href={link.href}>{link.nameLink}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12">
          <div className="col-span-6">
            <p className=" text-text_color font-semibold">
              © Copyright 2022 OsamaCOde
            </p>
          </div>
          <div className="col-span-6 text-right">
            <p className=" text-text_color font-semibold">
            Launching August 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
