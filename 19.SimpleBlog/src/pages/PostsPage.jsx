import {useState} from "react";
import posts from "../constants/posts.js";
import Post from "../components/Post.jsx";

export default function PostsPage() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(posts);

    const handleSearch = () => {
        if (query === "") {
            setFiltered(posts);
        } else {
            setFiltered(posts.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase() ||
                post.content.toLowerCase().includes(query.toLowerCase())
            )));
        }
    }


    return <div className="">
        <div className="flex gap-10 w-full mb-10">
            <input
                type="text"
                placeholder="Search..."
                className="p-[9px] rounded-md border border-neutral-500 text-md text-neutral-600 flex-1 "
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="px-5 py-1 rounded-md bg-blue-700 text-white hover:bg-blue-800" onClick={handleSearch}>
                Search
            </button>
        </div>
        <div className="flex flex-wrap gap-5 mx-auto justify-center">
            {filtered.length !== 0 ? filtered.map((post, index) => (
                <Post key={index} post={post}/>
            )) : <h1 className="text-xl text-center">No items match your search...</h1>}
        </div>
    </div>
}