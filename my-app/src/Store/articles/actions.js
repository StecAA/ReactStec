export const GET_ARTICLES_REQUEST = "ARTICLES::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCES";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export  const getAticlesRequest = () => ({
 type : GET_ARTICLES_REQUEST,

});


export  const getAticlesSusccess = (articles) => ({
    type : GET_ARTICLES_SUCCESS,
    payload: articles,
   });

   export  const getAticlesFailure = (error) => ({
    type : GET_ARTICLES_FAILURE,
    payload: error,
   });

   export  const getAticles = () => async (dispatch) => {
    const apiURL = "https://api.spaceflightnewsapi.net/v3/articles"
    dispatch(getAticlesRequest());
    try{  
        const response = await fetch(apiURL);
        if (!response.ok){
            throw new Error(response.status);
          }
        const result = await response.json();
        dispatch(getAticlesSusccess(result));

    }
  catch (err)  {
    console.warn(err);
   dispatch(getAticlesFailure(err));
   }
   }