import '../index.css'
import {Instagram, Facebook, TwitterX, Linkedin, GeoAlt, Envelope, Telephone} from "react-bootstrap-icons";

const Footer = () => {
    return (
        <div className="container-fluid bg-primary fw-semibold text-light">
            <footer
                className="d-flex flex-wrap justify-content-between text-sm-start py-3"
            >
                <div className="h-25">
                    <p className="mb-sm-4 mb-md-0 text-light border-bottom m-0 copyright">
                        &copy; 2024 E-Shopping
                    </p>
                </div>
                <div
                    className="fs-5 col-md-2 col-sm-3 justify-content-between d-flex flex-column h-25 mb-md-0 s-media"
                >
                    <h6 className="text-uppercase fw-bold mb-3 border-bottom">Follow Us</h6>
                    <div className="d-flex gap-3 justify-content-between">
                        <a href="https://www.instagram.com/" target="_blank"><Instagram className="text-light"/></a>
                        <a href="https://www.facebook.com/" target="_blank"><Facebook className="text-light"/></a>
                        <a href="https://twitter.com/?lang=en" target="_blank"><TwitterX className="text-light"/></a>
                        <a href="https://www.linkedin.com/" target="_blank"><Linkedin className="text-light"/></a>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 contact">
                    <h6 className="text-uppercase fw-bold mb-4 border-bottom">Contact</h6>
                    <p>
                        <GeoAlt className="text-light me-1"/>
                        Prishtine, Rr.Kamer Loshi, KS
                    </p>
                    <p>
                        <Envelope className="text-light me-1"/>
                        e-shop@gmail.com
                    </p>
                    <p>
                        <Telephone className="text-light me-1"/>
                        + 383 44 800 800
                    </p>
                    <p>
                        <Telephone className="text-light me-1"/>
                        + 383 45 800 800
                    </p>
                </div>
            </footer>
        </div>
    )
}
export default Footer