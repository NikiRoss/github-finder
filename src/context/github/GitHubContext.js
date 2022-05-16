import { createContext, useState } from "react";

const GitHubContext = createContext()

const GITHUB_URL = 'https://api.github.com/users'

export const GitHubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(GITHUB_URL, {mode:'cors'})
        const data = await response.json()  
        setUsers(data)
        setLoading(false)
      }

    return <GitHubContext.Provider value={{users, loading, fetchUsers}}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext

 