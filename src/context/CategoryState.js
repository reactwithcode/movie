import React, {useState, useReducer} from 'react';
import CategoryContext from './CategoryContext';
import movieListPic from '../components/Assets/movielist-pic.png';

const CategoryState = (props) => {

    const initialState = [{
        picture: movieListPic,
        title: 'Slum Dunk',
        category: 'Anime'
      },
      {
        picture: movieListPic,
        title: 'Shaman King',
        category: 'Action'
      },
      {
        picture: movieListPic,
        title: 'Tintin',
        category: 'Adventure'
      },
      {
        picture: movieListPic,
        title: 'Doraemon',
        category: 'Science Fiction',
      },
      {
        picture: movieListPic,
        title: 'One Piece',
        category: 'Adventure'
      },
      {
        picture: movieListPic,
        title: 'Naruto',
        category: 'Anime'
      },
      {
        picture: movieListPic,
        title: 'Fire Force',
        category: 'Action'
      },
      {
        picture: movieListPic,
        title: 'AOT',
        category: 'Anime'
      },
      {
        picture: movieListPic,
        title: 'Bleach',
        category: 'Action'
      },
      {
        picture: movieListPic,
        title: 'Shincan',
        category: 'Anime'
      },
      {
        picture: movieListPic,
        title: 'Slime Data Tensei',
        category: 'Anime'
      }
    ];


    function reducer(pics, action) {
        switch(action.type) {
            default:
                return pics;
            case "anime":
                return {
                    ...pics.filter((pic) => pic.category === 'Anime')                 
    
                };
            case "action":
                return {
                    ...pics.filter((pic) => pic.category === 'Action')                    
                };
            case "adventure":
                return {
                    ...pics.filter((pic) => pic.category === 'Adenture')                     
                };
            case "science fiction":
                return {
                    ...pics.filter((pic) => pic.category === 'Science Fiction')                      
                };
            case "comedy":
                return {
                    ...pics.filter((pic) => pic.category === 'Comedy')                    
                };
        }
    }

    const [pics, dispatch] = useReducer(reducer, initialState);

    const reducerCategoryAnime = () => {
        return () => dispatch({type: 'anime', payload: pics})
    }

    const reducerCategoryAction = () => {
        return () => dispatch({type: 'action', payload: pics})
    }

    const reducerCategoryAdventure = () => {
        return () => dispatch({type: 'adventure', payload: pics})
    }

    const reducerCategoryScienceFiction = () => {
        return () => dispatch({type: 'science fiction', payload: pics})
    }

    const reducerCategoryComedy = () => {
        return () => dispatch({type: 'comedy', payload: pics})
    }
    
    return (
        <CategoryContext.Provider value={{
            pics,
            reducerCategoryAnime,
            reducerCategoryAction,
            reducerCategoryAdventure,
            reducerCategoryScienceFiction,
            reducerCategoryComedy
        }}>
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryState
