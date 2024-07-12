import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  CircleUser,
  Home,
  Menu,
  Package2,
  Heart
} from "lucide-react";
import { logoutUser } from "../../store/reducers/auth";
import { useAppDispatch } from "../../store/hooks";
import { useAuth } from "../../hook";
import { Link, Outlet, useNavigate } from "react-router-dom";


const DashboardSection = () => {

    const { currentUserInfo } = useAuth();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleMenuButton = () => {
        if(currentUserInfo?.name && currentUserInfo?.email) {
            return ''
        }
        navigate('/auth/login')
    }
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link to="/" className="flex items-center gap-2 font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="">Coder's Book</span>
                </Link>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  <Link
                    to="/"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl  p-3 text-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                      to={"/favorite"}
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl p-3 text-foreground hover:text-foreground"
                    >
                      <Heart className="h-5 w-5" />
                      Favorite
                      {currentUserInfo?.favorite?.length ?
                      <Badge className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                        {currentUserInfo?.favorite?.length}
                      </Badge> : null}
                    </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      to="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Package2 className="h-6 w-6" />
                      <span className="">Coder's Book</span>
                    </Link>
                    <Link
                      to={'/'}
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      to={"/favorite"}
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl  px-3 py-2 text-foreground hover:text-foreground"
                    >
                      <Heart className="h-5 w-5" />
                      Favorite
                      {currentUserInfo?.favorite?.length &&
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {currentUserInfo?.favorite?.length}
                      </Badge>}
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <div className="flex w-full justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button onClick={handleMenuButton} variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                    </DropdownMenuTrigger>
                    {currentUserInfo?.name && currentUserInfo?.email &&
                    <DropdownMenuContent align="end">
                    <Link to="/settings">
                    <DropdownMenuItem className={"flex flex-col items-start space-y-1"}>
                        <p className="text-sm font-medium leading-none">{currentUserInfo?.name}</p>
                        <p className="text-sm text-muted-foreground">{currentUserInfo?.email}</p>
                    </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <Link to="/settings">
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={()=> dispatch(logoutUser())}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>}
                </DropdownMenu>
              </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              <Outlet />
            </main>
          </div>
        </div>
      );
};

export default DashboardSection;
