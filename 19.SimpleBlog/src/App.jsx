import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import Footer from "./components/Footer.jsx";
import ReadPostPage from "./pages/ReadPostPage.jsx";


function App() {

  return (
    <Router>
      <div className="max-w-4xl mx-auto flex flex-col">
        <Header />
          <main className="my-5 flex-1">
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/posts" element={<PostsPage />}/>
              <Route path="/posts/:postId" element={<ReadPostPage />}/>
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
