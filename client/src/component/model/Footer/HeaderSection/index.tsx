import { Link } from "react-router-dom";

import "./HeaderSection.scss";

const HeaderSection = () => {
	return (
		<div className="footer__header">
			<div className="footer__header-top">
				<Link to={"/"} className="footer__logo">
					<div className="footer__img">
						<img src="/path/header/header-logo.png" alt="logo" />
					</div>
					<p className="footer__text">
						cinema tv
					</p>
				</Link>
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
						<svg className="footer__social-spotify-ico" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_72_287)">
								<path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.66 0 12 0ZM17.521 17.34C17.281 17.699 16.861 17.82 16.5 17.58C13.68 15.84 10.14 15.479 5.939 16.439C5.521 16.561 5.16 16.26 5.04 15.9C4.92 15.479 5.22 15.12 5.58 15C10.14 13.979 14.1 14.4 17.22 16.32C17.64 16.5 17.699 16.979 17.521 17.34ZM18.961 14.04C18.66 14.46 18.12 14.64 17.699 14.34C14.46 12.36 9.54 11.76 5.76 12.96C5.281 13.08 4.74 12.84 4.62 12.36C4.5 11.88 4.74 11.339 5.22 11.219C9.6 9.9 15 10.561 18.72 12.84C19.081 13.021 19.26 13.62 18.961 14.04ZM19.081 10.68C15.24 8.4 8.82 8.16 5.16 9.301C4.56 9.48 3.96 9.12 3.78 8.58C3.6 7.979 3.96 7.38 4.5 7.199C8.76 5.939 15.78 6.179 20.221 8.82C20.76 9.12 20.94 9.84 20.64 10.38C20.341 10.801 19.62 10.979 19.081 10.68Z" fill="#101011" />
							</g>
						</svg>
					</Link>
					<Link
						to={"https://www.youtube.com/"}
						className="footer__social-youtube"
						target="_blank"
					>
						<svg className="footer__social-youtube-ico" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_72_292)">
								<path d="M23.499 6.20281C23.3599 5.70431 23.0945 5.25013 22.7286 4.88418C22.3626 4.51823 21.9084 4.25289 21.41 4.11381C19.5399 3.61281 12.01 3.61281 12.01 3.61281C12.01 3.61281 4.50095 3.60281 2.61095 4.11381C2.11252 4.25312 1.65847 4.51868 1.29269 4.88481C0.926916 5.25094 0.661791 5.70525 0.522951 6.20381C0.168161 8.11862 -0.0069334 10.0624 -4.87813e-05 12.0098C-0.00562731 13.9502 0.169462 15.8869 0.522951 17.7948C0.661941 18.2932 0.927132 18.7473 1.2929 19.1132C1.65867 19.4792 2.11264 19.7446 2.61095 19.8838C4.47995 20.3858 12.011 20.3858 12.011 20.3858C12.011 20.3858 19.5189 20.3858 21.41 19.8838C21.9086 19.7446 22.3628 19.4791 22.7288 19.113C23.0947 18.7469 23.36 18.2925 23.499 17.7938C23.8447 15.8855 24.0121 13.9491 23.999 12.0098C24.0135 10.0625 23.8462 8.11801 23.499 6.20181V6.20281ZM9.60795 15.6028V8.40681L15.874 12.0108L9.60795 15.6028Z" fill="#101011" />
							</g>
						</svg>
					</Link>
					<Link
						to={"https://twitter.com/?lang=ru"}
						className="footer__social-twitter"
						target="_blank"
					>
						<svg className="footer__social-twitter-ico" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_72_297)">
								<path d="M23.954 4.56909C23.069 4.95809 22.124 5.22309 21.129 5.34409C22.143 4.73309 22.923 3.77009 23.292 2.62109C22.341 3.17609 21.287 3.58009 20.165 3.80509C19.269 2.84609 17.992 2.24609 16.574 2.24609C13.857 2.24609 11.654 4.44909 11.654 7.16309C11.654 7.55309 11.699 7.92809 11.781 8.28709C7.691 8.09409 4.066 6.13009 1.64 3.16109C1.213 3.88309 0.974 4.72209 0.974 5.63609C0.974 7.34609 1.844 8.84909 3.162 9.73209C2.355 9.70609 1.596 9.48409 0.934 9.11609V9.17709C0.934 11.5621 2.627 13.5511 4.88 14.0041C4.467 14.1151 4.031 14.1751 3.584 14.1751C3.27 14.1751 2.969 14.1451 2.668 14.0891C3.299 16.0421 5.113 17.4661 7.272 17.5061C5.592 18.8251 3.463 19.6111 1.17 19.6111C0.78 19.6111 0.391 19.5881 0 19.5441C2.189 20.9381 4.768 21.7531 7.557 21.7531C16.611 21.7531 21.556 14.2571 21.556 7.76709C21.556 7.55809 21.556 7.34709 21.541 7.13709C22.502 6.44809 23.341 5.57709 24.001 4.58909L23.954 4.56909Z" fill="#101011" />
							</g>
						</svg>
					</Link>
					<Link
						to={"https://uk-ua.facebook.com/"}
						className="footer__social-facebook"
						target="_blank"
					>
						<svg className="footer__social-facebook-ico" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_72_302)">
								<path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" fill="#101011" />
							</g>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeaderSection;