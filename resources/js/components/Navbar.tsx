import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";

import {
    BsBoxArrowRight,
    BsCircleHalf,
    BsMoonStars,
    BsPersonCircle,
    BsSun,
} from "react-icons/bs";

import ApplicationLogo from "./ApplicationLogo";
import Dropdown from "./Dropdown";

export default function NavBar() {
    const { user } = usePage<PageProps>().props.auth;

    return (
        <header className="fixed top-0 z-20 h-16 w-full p-2 bg-white shadow shadow-slate-500/25">
            <div className="mx-auto flex max-w-7xl justify-between">
                <Link href="/" className="flex shrink-0">
                    <ApplicationLogo className="h-12" />
                </Link>

                <div className="ml-auto flex items-center gap-4">
                    {user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="flex shrink-0 cursor-pointer items-center gap-2 text-sm text-slate-700">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="h-8 w-8 rounded-full"
                                    />

                                    {user.name}
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Content contentClasses="mb-12 sm:mb-10">
                                <Dropdown.Link href={route("profile.edit")}>
                                    <div className="flex items-center gap-2">
                                        <BsPersonCircle />
                                        Profile
                                    </div>
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    as="button"
                                    method="post"
                                >
                                    <div className="flex items-center gap-2">
                                        <BsBoxArrowRight />
                                        Log out
                                    </div>
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <Link
                            href={route("logout")}
                            as="button"
                            method="post"
                            className="btn btn-red flex items-center gap-2 whitespace-nowrap rounded-full bg-red-dark"
                        >
                            <BsBoxArrowRight />
                            Log in
                        </Link>
                    )}

                    <div className="my-auto mr-0.5 h-10 w-0.5 border-l border-white/25" />
                </div>
            </div>
        </header>
    );
}
