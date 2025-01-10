import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";

export default function Footer() {
    return <footer className="flex justify-between p-6">
        <p className="text-neutral-700 text-sm">Copyright &copy; 2025 Bloggy. All rights reserved.</p>
        <div className="flex gap-5">
            <Link to="#"><FaLinkedin size="23" className="text-neutral-700" /></Link>
            <Link to="#"><FaTwitter size="23" className="text-neutral-700" /></Link>
            <Link to="#"><FaGithub size="23" className="text-neutral-700" /></Link>
            <Link to="#"><BsYoutube size="23" className="text-neutral-700" /></Link>
        </div>
    </footer>
}