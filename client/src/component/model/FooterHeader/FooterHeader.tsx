import { Link } from "react-router-dom";

import FacebookIcon from "../../Icon/Social/Facebook/FacebookIcon";
import SpotifyIcon from "../../Icon/Social/Spotify/SpotifyIcon";
import TwitterIcon from "../../Icon/Social/Twitter/TwitterIcon";
import YouTubeIcon from "../../Icon/Social/YouTube/YouTubeIcon";
import Logo from "../Logo/Logo";
import "./FooterHeader.scss";

const FooterHeader = () => {
	return (
		<div className="footer__header">
			<div className="footer__header-top">
				<Logo
					path="/"
					wrapperClassName="footer__logo"
				/>
			</div>
			<div className="footer__header-bottom">
				<div className="footer__contact">
					<p className="footer__contact-title">
						Contact
					</p>
					<div className="footer__contact-phone">
						<p className="footer__contact-phone-title">Phone:</p>
						<Link className="footer__contact-phone-text" to={""}>+380575675</Link>
					</div>
					<div className="footer__contact-email">
						<p className="footer__contact-email-title">Email:</p>
						<Link className="footer__contact-email-text" to={""}>user@gmail.com</Link>
					</div>
				</div>
				<div className="footer__social">
					<Link
						to={"https://open.spotify.com/?"}
						className="footer__social-spotify"
						target="_blank"
					>
						<SpotifyIcon
							wrapperClass={"footer__social-spotify-ico"}
						/>
					</Link>
					<Link
						to={"https://www.youtube.com/"}
						className="footer__social-youtube"
						target="_blank"
					>
						<YouTubeIcon
							wrapperClass={"footer__social-youtube-ico"}
						/>
					</Link>
					<Link
						to={"https://twitter.com/?lang=ru"}
						className="footer__social-twitter"
						target="_blank"
					>
						<TwitterIcon
							wrapperClass={"footer__social-twitter-ico"}
						/>
					</Link>
					<Link
						to={"https://uk-ua.facebook.com/"}
						className="footer__social-facebook"
						target="_blank"
					>
						<FacebookIcon
							wrapperClass={"footer__social-facebook-ico"}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FooterHeader;