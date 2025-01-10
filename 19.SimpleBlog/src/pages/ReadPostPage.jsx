import {Link, useParams} from "react-router-dom";
import posts from "../constants/posts.js";
import {useEffect, useState} from "react";
import {FaArrowLeft} from "react-icons/fa";
import markdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";


export default function ReadPostPage() {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [markdownRes, setMarkdownRes] = useState("");

    const md = markdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return `<pre class="hljs" style="background: #e9e9e9"><code>${hljs.highlight(str, {language: lang}).value}</code></pre>`;
                } catch (__) {}
            }
            return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
        }
    });

    useEffect(() => {
        const foundPost = posts.find(p => p.id === parseInt(postId));
        if (foundPost) {
            setPost(foundPost);
            setMarkdownRes(md.render(foundPost.content));
        }
    }, [postId]);

    return <div>
        <Link to="/posts">
            <div className="flex justify-start items-center gap-4 text-neutral-600 group mb-6">
                <FaArrowLeft size="20" className="group-hover:-translate-x-1 duration-300"/>
                <p>Back</p>
            </div>
        </Link>
        {post != null ? (
            <>
                <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-8 object-cover"/>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <span className="text-neutral-500">{post.createdAt}</span>
                <div className="mt-10 prose mx-auto" dangerouslySetInnerHTML={{__html: markdownRes}}/>
            </>
        ) : (
            <div>
                Loading...
            </div>
    )}
</div>

}