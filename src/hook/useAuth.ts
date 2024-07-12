import { useAppSelector } from "@/store/hooks"

const useAuth = () => {
    const {user, currentUser} = useAppSelector((state)=> state.auth)
    const userInfo = user?.find((item) => item?.email === currentUser?.email)
    if(userInfo) {
        return {
            success:true,
            currentUserInfo:userInfo
        }
    }
    else {
        return {
            success:false,
            currentUserInfo:null
        }
    }

}

export default useAuth;