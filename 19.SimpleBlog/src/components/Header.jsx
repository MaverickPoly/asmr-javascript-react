import {Link} from "react-router-dom";

export default function Header() {
    return <nav className="bg-white bg-opacity-30 flex justify-between backdrop-blur-md p-4 sticky top-0 border-b border-neutral-200 shadow-sm z-10">
        <Link to="/" className="font-bold text-3xl">Bloggy</Link>
        <ul className="flex gap-8 mr-8">
            <li><Link to="/" className="text-lg capitalize text-neutral-700 hover:text-neutral-900">Home</Link></li>
            <li><Link to="/posts" className="text-lg capitalize text-neutral-700 hover:text-neutral-900">Posts</Link></li>
        </ul>
    </nav>
}