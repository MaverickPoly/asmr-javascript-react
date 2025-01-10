import posts from "../constants/posts.js";
import Post from "./Post.jsx";

export default function RecentPosts() {
    return <div>
        <h1 className="text-2xl underline font-bold mb-8">Recent Posts</h1>
        <div className="flex flex-wrap gap-5 mx-auto justify-center">
            {posts.map((post, index) => (
                <Post key={index} post={post}/>
            ))}
        </div>
    </div>
}