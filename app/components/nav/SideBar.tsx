"use client"
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { MdDashboard } from 'react-icons/md';
import NavLink from './NavLink';
import Logo from '../defaults/Logo';
import { useGetUser } from '@/lib/queryFunctions';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { logout } from '@/app/actions/auth';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';




const SideBar = () => {
    const {user, isLoading} = useGetUser();
    const queryClient = useQueryClient();
    const NAV_LINKS = [
        {
            label: "Home",
            link: "/",
            icon: <GoHomeFill/>
        },
        
        {
            link: "/games",
            label: "Games",
            icon: <MdDashboard />,
        },
        {
            link: "/wishlist",
            label: "WIshlist",
            icon: <FaHeart />,
        },
       
       
    ]


    return (
        <div className=' col-span-2'>
            <div className="h-screen sticky inset-2 text-gray-50 gap-3 py-5 px-10 flex flex-col bg-black/30">
                <Logo/>
                {NAV_LINKS.map((navLink) => <NavLink navLink={navLink} key={navLink.label}/>
            )}
            {isLoading ?  (
                <div className="mt-auto ">
                    <Skeleton className="h-4 w-[130px]" />
                    <Skeleton className="h-4 w-[100px]" />
                </div>
                ) : user?.data ? (
                <div className=' mt-auto'>
                    <NavLink navLink={
                        {
                            link: "/settings",
                            label: "Settings",
                            icon: <Settings />,
                        }
                    }/>
                    <Button onClick={ async () => {
                        const res = await logout();
                        if (res.success) {
                            toast.success(res.success);
                            queryClient.invalidateQueries({ queryKey: ["user"] });
                        }
                        else toast.error(res.error);
                    }} 
                    className='cursor-pointer' variant={'destructive'}>Logout</Button>
                </div>
            ) : null}
            </div>
        </div>
    )
}

export default SideBar;