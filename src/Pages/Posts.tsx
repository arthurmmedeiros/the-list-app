import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../Stores/StoreConfig";
import Header from "../Components/Header";
import PostCard from '../Components/PostCard';
import PostModel from "../Models/PostModel";
import CustomSpinner  from "../Components/CustomSpinner";

const Posts = () => {
  const { postsStore } = useStores();
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [resetList, setResetList] = useState(false);

  useEffect(() => {
    postsStore.loadPosts();
  }, [postsStore]);

  useEffect(() => {
    setPosts(postsStore.postList);
    setResetList(false);
  }, [postsStore.postList, resetList]);


  const handleBrowserSearch = useCallback(
    (searchValue: string) => {
      let filteredPostList = new Array<PostModel>();

      // filter list based on string
      if (posts !== undefined) {
        filteredPostList = posts?.filter(
          (item) =>
            item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
      }
      // set filtered list
      setPosts(filteredPostList);

      // if search field is empty, map whole list again
      if (searchValue === "") {
        setResetList(true);
      }
    },[posts]);

  return (
    <>
      <Header
        title="Posts"
        subtitle="Here is a list of the latest and coolest posts"
      />
      <div className="list-container">
        <input
          type="search"
          className="form-control form-control-lg mb-4 mx-auto"
          placeholder="Type to search"
          onChange={(e) => handleBrowserSearch(e.target.value)}
        />
        {postsStore.isLoading ? (
          <CustomSpinner/>
        ) : (
          <div className="row">
            {posts.length > 0 &&
              posts.map((l) => (
                <div key={l.id} className="col-md-12 mb-4">
                  <PostCard 
                    title={l.title} 
                    body={l.body}/>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default observer(Posts);
