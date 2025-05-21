import "../styles/App.css";
import {useEffect, useState} from "react";
import PostList from "../components/PostList.jsx";
import PostForm from "../components/PostForm.jsx";
import PostFilter from "../components/PostFilter.jsx";
import MyModal from "../components/Ui/MyModal/MyModal.jsx";
import MyButton from "../components/Ui/button/MyButton.jsx";
import {usePosts} from "../hooks/UsePosts.jsx";
import PostService from "../API/PostService.js";
import Louder from "../components/Ui/Louder/Louder.jsx";
import {useFetching} from "../hooks/UseFetching.jsx";
import {getPageCount} from "../utils/pages.js";
import Pagination from "../components/Ui/pagination/Pagination.jsx";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, currentPage);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })


  const changePage = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Get Posts</MyButton>
      <MyButton
        style={{ marginTop: "30px", alignSelf: "flex-start" }}
        onClick={() => setModal(true)}
      >
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>error{postError}</h1>}
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}><Louder/></div>
        :  <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title={"list of posts"}
        />}
      <Pagination changePage={changePage} currentPage={currentPage} totalPages={totalPages}/>

    </div>
  );
}

export default Posts;
