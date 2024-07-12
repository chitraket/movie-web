import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useAuth } from "../../hook";
import { useAppDispatch } from "../../store/hooks";
import { loginUser } from "../../store/reducers/auth";

const SettingsPage = () => {
    const { currentUserInfo } = useAuth();
    const dispatch = useAppDispatch()

  return <div className="flex flex-1 rounded-lg">
            <div className="flex flex-1 md:flex-[0.5] flex-col gap-1">
            <Card>
            <CardContent className="flex items-center justify-between space-x-4 p-4">
                <div className="flex items-center space-x-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img className="aspect-square h-full w-full" src="https://ui.shadcn.com/avatars/02.png"/>
                    </span>
                    <div>
                        <p className="text-sm font-medium leading-none">{currentUserInfo?.name || ''}</p>
                        <p className="text-sm text-muted-foreground">{currentUserInfo?.email || ''}</p>
                    </div>
                </div>
                <Button onClick={() => dispatch(loginUser({}))}>
                    Logout
                </Button>
            </CardContent>
            </Card>
            </div>
        </div>
};

export default SettingsPage;
