"use client";
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { MdDashboard } from 'react-icons/md';
import { Settings } from 'lucide-react';
import { useState } from 'react';
import NavLink from './NavLink';
import Logo from '../defaults/Logo';
import { useGetUser } from '@/lib/queryFunctions';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { logout } from '@/app/actions/auth';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { RxHamburgerMenu } from 'react-icons/rx';

const SideBar = () => {
    const { user, isLoading } = useGetUser();
    const queryClient = useQueryClient();
    const [isOpen, setIsOpen] = useState(false);

    const NAV_LINKS = [
        { label: "Home", link: "/", icon: <GoHomeFill /> },
        { link: "/games", label: "Games", icon: <MdDashboard /> },
        { link: "/wishlist", label: "Wishlist", icon: <FaHeart /> },
    ];

    return (
        <>
            {/* Hamburger button - only on mobile */}
            <div className="md:hidden p-4">
                <button onClick={() => setIsOpen(true)}>
                    <RxHamburgerMenu className="text-white text-2xl" />
                </button>
            </div>

            {/* Sidebar for mobile (overlay) */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-black/90 text-gray-50 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="flex flex-col h-full p-6 gap-3">
                    <div className="flex justify-between items-center">
                        <Logo />
                        <button onClick={() => setIsOpen(false)} className="text-white text-2xl">×</button>
                    </div>
                    {NAV_LINKS.map((navLink) => (
                        <NavLink navLink={navLink} key={navLink.label} />
                    ))}
                    {isLoading ? (
                        <div className="mt-auto">
                            <Skeleton className="h-4 w-[130px]" />
                            <Skeleton className="h-4 w-[100px]" />
                        </div>
                    ) : user?.data ? (
                        <div className="mt-auto">
                            <NavLink navLink={{
                                link: "/settings",
                                label: "Settings",
                                icon: <Settings />,
                            }} />
                            <Button onClick={async () => {
                                const res = await logout();
                                if (res.success) {
                                    toast.success(res.success);
                                    queryClient.invalidateQueries({ queryKey: ["user"] });
                                } else toast.error(res.error);
                            }} variant="destructive">Logout</Button>
                        </div>
                    ) : null}
                </div>
            </div>

            {/* Sidebar for desktop */}
            <div className="col-span-2 hidden md:flex h-screen sticky top-0 text-gray-50 gap-3 py-5 px-10 flex-col bg-black/30">
                <Logo />
                {NAV_LINKS.map((navLink) => (
                    <NavLink navLink={navLink} key={navLink.label} />
                ))}
                {isLoading ? (
                    <div className="mt-auto">
                        <Skeleton className="h-4 w-[130px]" />
                        <Skeleton className="h-4 w-[100px]" />
                    </div>
                ) : user?.data ? (
                    <div className="mt-auto">
                        <NavLink navLink={{
                            link: "/settings",
                            label: "Settings",
                            icon: <Settings />,
                        }} />
                        <Button onClick={async () => {
                            const res = await logout();
                            if (res.success) {
                                toast.success(res.success);
                                queryClient.invalidateQueries({ queryKey: ["user"] });
                            } else toast.error(res.error);
                        }} variant="destructive">Logout</Button>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default SideBar;
