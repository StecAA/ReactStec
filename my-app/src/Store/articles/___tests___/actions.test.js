import { getAticlesSusccess, GET_ARTICLES_SUCCESS } from "../actions";

describe ("getArticlesSuccess tests", () => {
    it ("returns obj with type and payload", () => {
const payload = [];
const expected = {
    type: GET_ARTICLES_SUCCESS,
    payload,
};
const received = getAticlesSusccess(payload);
expect(expected).toEqual(received);
    })
})