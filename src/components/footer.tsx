import InstagramIcon from "@/assets/icons/insta.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import XSocialIcon from "@/assets/icons/x-social.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
          <div className="text-center">
            © 2024 Tathata, Inc. All rights reserved.
          </div>
          <ul className="flex justify-center gap-2.5 mt-3 sm:mt-0">
            <li>
              <XSocialIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
