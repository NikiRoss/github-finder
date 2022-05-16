import { createContext, useReducer } from "react";
import githubReducer from './GitHubReducer'

const GitHubContext = createContext()

const GITHUB_URL = 'https://api.github.com/users'

export const GitHubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const fetchUsers = async () => {
        const response = await fetch(GITHUB_URL, {mode:'cors'})
        const data = await response.json()  
        
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
      }

    return <GitHubContext.Provider value={{
        users: state.users, 
        loading: state.loading, 
        fetchUsers}}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext

 