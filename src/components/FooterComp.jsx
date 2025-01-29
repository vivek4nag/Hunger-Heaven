import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const FooterComp = () => {
  return (
    <div className="flex flex-col bg-slate-800 justify-center items-center py-3 md:py-6 gap-y-2 md:gap-y-4 w-full rounded-lg select-none">
      <div>
        <h3>Insert Logo here</h3>
      </div>
      <p className="text-base md:text-lg font-semibold text-amber-100">
        Made with 💗 for 🍕 by{" "}
        <a
          href="https://www.linkedin.com/in/vivek-nag-a125482b2/"
          target="_blank"
          className="text-yellow-400 hover:text-lime-400 underline"
          title="mera Linkedin Profile"
        >
          Vivek Nag
        </a>
      </p>
      <div>
        <ul className="flex gap-5 text-sm md:text-xl font-medium text-green-400  flex-wrap justify-center">
          <li className="hover:text-green-600 cursor-pointer transition-all duration-200">About</li>
          <li className="hover:text-green-600 cursor-pointer transition-all duration-200">Career</li>
          <li className="hover:text-green-600 cursor-pointer transition-all duration-200">History</li>
          <li className="hover:text-green-600 cursor-pointer transition-all duration-200">Services</li>
          <li className="hover:text-green-600 cursor-pointer transition-all duration-200">Projects</li>
          <li className="hover:text-green-600 cursor-pointer transition-all duration-200">Blog</li>
        </ul>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <FontAwesomeIcon
          icon={faGithub}
          size="xl"
          className="text-white hover:text-black transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="xl"
          className="text-white hover:text-pink-600 transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          size="xl"
          className="text-white hover:text-blue-600 transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitch}
          size="xl"
          className="text-white hover:text-purple-600 transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="xl"
          className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FooterComp;
