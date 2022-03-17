
import { useEffect } from 'react';
import { getAticles } from "../../Store/articles/actions"
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectArt, selectArtLoad, selectError } from '../../Store/articles/selector';
export const Articles = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const isLoad = useSelector(selectArtLoad);
    const articles = useSelector(selectArt);
    console.log(articles);
    //  const apiURL = "https://api.waifu.im/random/";

    // const message= [];
    // const fetchData = async () => {
    //     const response = await axios.get(apiURL)

    //     setBooks(response.data) 
    //     console.log(books);
    // }

    const getDate =  async () => {
        dispatch(getAticles());
    }
    useEffect (()=>{
        getDate();
     },[]);
//     useEffect (()=>{
//         setLoad(true);
//         setError(false);
//      fetch(apiURL)
//       .then((response) => {
//         if (!response.ok){
//           throw new Error(response.status);
//         }
//       return response.json();
//   })
//       .then((result) => {
//           setBooks(result);
//           console.log(result);
          
//     })
//       .catch((err) => {
//         console.warn(err);
//         setError(true);
//        }
//        ).finally(()=> {setLoad(false);})
//     },[]);

return ( 
/* <div className="App">
<h2>Fetch a list from an API and display it</h2>

<div>
  <button className="fetch-button" onClick={fetchData}>
    Fetch Data
  </button>
</div>

<div className="books">
  // Данные из API будут тут
      </div>
</div> */
 <>
<h3>Articles</h3>
<button  onClick={getDate}>
    Refresh
  </button>
{error && <h5> ERROR</h5>}
{isLoad ?(<CircularProgress />) : (<ul>{articles.map((art)=>
 (
    <li key={art.id}>{art.title}</li>
))}
</ul>) }
</> 
);

};