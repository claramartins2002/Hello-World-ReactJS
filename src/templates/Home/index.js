/* eslint-disable no-extra-boolean-cast */
import './styles.css';
import React from 'react';
 import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  }

  timeoutUpdate = null;

  componentDidMount(){
this.loadPosts();
}

loadPosts = async () => {
  const { page, postsPerPage } = this.state;

const postsAndPhotos = await loadPosts();

this.setState({ posts: postsAndPhotos.slice(page, postsPerPage), allPosts: postsAndPhotos})

}


loadMorePosts = () => {
const { page, postsPerPage, allPosts, posts } = this.state;

const nextPage = page + postsPerPage;
const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

posts.push(...nextPosts);

this.setState({ posts, page: nextPage})
}



handleChange = (e) => {
const { value } = e.target;
this.setState({searchValue: value});

}
render() {
  const { posts, page, postsPerPage, allPosts, searchValue} = this.state;
  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
  }) : posts;

  return (

    <section className="container">

      <div className="search-container">
      {!!searchValue && (
        <>
              <h3>Search value: {searchValue}</h3>

        </>
      )}
           <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
      </div>

            {filteredPosts.length > 0 && (
                 <Posts posts={filteredPosts}></Posts>

            )}

            {filteredPosts.length === 0 && (
              <>
              <h1>Post not found =/</h1>
              </>
              )}

   <div className="button-container">
    {!searchValue && (
 <Button text="load more posts..."
 onClick={this.loadMorePosts}
  disabled={noMorePosts}
 />
    )}

   </div>
    </section>

  );
}
}

export default Home;
