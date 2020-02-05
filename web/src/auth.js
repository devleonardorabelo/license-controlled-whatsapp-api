export const isAuthenticated = () => {
    
    const token = localStorage.getItem('usertoken')

    if(!token)
        return false
    
    return true
    
}