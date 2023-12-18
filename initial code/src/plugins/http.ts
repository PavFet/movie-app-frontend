import { MovieState } from "../features/types/movieType"

const serverUrl = "http://localhost:4000"

export interface IUser {
  username: string,
  password: string,
  movieList: MovieState[],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string) => {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
    const res = await fetch(`${serverUrl}/${url}`, options)
    return await res.json()
  },

  post: async (data: IUser, url: string) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    }

    const res = await fetch(`${serverUrl}/${url}`, options)
    return await res.json()
  }
}