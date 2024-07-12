import { useAppSelector } from "@/store/hooks"

const useAuth = () => {
    const {user, currentUser} = useAppSelector((state)=> state.auth)
    const userInfo:any = user?.find((item:any) => item?.email === currentUser?.email)
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