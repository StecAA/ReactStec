import {Fetch_STATUS} from "../../Store/articles/reducer"

export const selectArt = (state) => state.articles.date;
export const selectArtLoad = (state) => state.articles.status === Fetch_STATUS.REQUEST;
export const selectError = (state) => state.articles.error;