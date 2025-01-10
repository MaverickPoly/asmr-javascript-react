import {Link} from "react-router-dom";

export default function Post({post}) {
    return <Link to={`/posts/${post.id}`}>
        <div className="w-[350px] bg-neutral-50 rounded-md shadow-sm overflow-hidden group">
            <img src={post.image} alt={post.title}
                 className="object-cover w-full h-56 group-hover:grayscale duration-300"/>
            <div className="p-4">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-neutral-500">{post.content.slice(0, 100)}</p>
            </div>
        </div>
    </Link>
}