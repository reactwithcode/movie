import React, {useState, useEffect, useReducer, useContext} from 'react';
import {Row, Col, CardColumns, Card, Button} from 'react-bootstrap';
import Pagination from './Pagination';
import CategoryContext from '../context/CategoryContext';


const MovieList = () => {

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)

  const {
    pics,
    reducerCategoryAnime,
    reducerCategoryAction,
    reducerCategoryAdventure,
    reducerCategoryScienceFiction,
    reducerCategoryComedy,
  } = useContext(CategoryContext);

// useEffect(() => {
//   const fetchPosts = async () => {
//   setLoading(true);
//   setPostsPerPage(pics);
//   setLoading(false);
//   }
//   fetchPosts(); 
// }, []);
//


// GET current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
console.log(pics);
const currentPosts = pics.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <div className="container">

      <div className="container">
        <div className="category">
          <h1>Browse by category</h1>
          <div className="homecategory-list d-flex flex-wrap">
            <a className="active">All</a>
            <a onClick={reducerCategoryAnime}>anime</a>
            <a onClick={reducerCategoryAction}>action</a>
            <a onClick={reducerCategoryAdventure}>adventure</a>
            <a onClick={reducerCategoryScienceFiction}>science fiction</a>
            <a onClick={reducerCategoryComedy}>comedy</a>
          </div>
        </div>
      </div>
      

      <div className="container">
        <div className="movie-list-pic">
          {/* <Row> */}
          <CardColumns>
          {
           currentPosts.map((item, i) => {
              return(
                // <div className="movie-card">
                //   <Col key={i} className="home-col" sm={1} md={2} lg={4}>
                //   <a href="/DetailOverview">  <img src={item.picture} alt={item.title}></img></a>
                //     <p><strong>{item.title}</strong></p>
                //     <p>{item.category}></p>
                //   </Col>
                // </div>

<a href="/DetailOverview" key={i}>
  <Card className="home-col" sm={1} md={2} lg={4}>
    <Card.Img variant="top" src={item.picture}/>
    <Card.Body>
      <Card.Title><strong>{item.title}</strong></Card.Title>
      <Card.Text>
      {item.category}
      </Card.Text>
    </Card.Body>
  </Card>
</a>





              
                );         
            })
          }
          {/* </Row> */}
          </CardColumns>
        </div>
      </div>
      
      <div className="container pagination">
      <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={pics.length}
      paginate={paginate}
      />
      </div>

    </div>
  );
}

export default MovieList;