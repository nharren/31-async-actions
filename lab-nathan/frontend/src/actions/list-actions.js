import superagent from 'superagent';

export const listSet = (lists) => ({
  type: 'LIST_SET',
  payload: lists
})

export const listCreate = (list) => ({
  type: 'LIST_CREATE',
  payload: list
})

export const listUpdate = (list) => ({
  type: 'LIST_UPDATE',
  payload: list
})

export const listDelete = (list) => ({
  type: 'LIST_DELETE',
  payload: list
})

export const listsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/lists`)
  .then(res => {
    dispatch(listSet(res.body));
    return res;
  });
}

export const listCreateRequest = (list) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/lists`)
  .send(list)
  .then(res => {
    dispatch(listCreate(res.body));
    return res;
  })
  .catch(console.error);
}

export const listUpdateRequest = (list) => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/lists`)
  .send(list)
  .then( res => {
    dispatch(listUpdate(res.body));
    return res;
  })
  .catch(console.error);
}

export const listDeleteRequest = (list) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/lists/${list._id}`)
  .then(res => {
    dispatch(listDelete(list))
    return res;
  })
  .catch(console.error);
}