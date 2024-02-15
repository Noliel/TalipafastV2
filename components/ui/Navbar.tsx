import Link from "next/link"
import { Icons } from "./Icons"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button, buttonVariants } from "./button"
import { LoginButton } from "../auth/login-button"

const Navbar = () => {
    return (
        <div className="bg-white z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                <div className="bordder-b border-gray-200">
                    <div className="flex h-16 items center">
                        <div className="ml-4 flex lg:ml-0">
                            <Link href='/'>
                                <Icons.logo className="h-10 w-10" />
                            </Link>
                        </div>

                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items.center lg:justify-end lg:space-x-6">
                                <LoginButton>
                                    <Button variant='ghost'> Sign In</Button>
                                </LoginButton>
                                <Link href='/sign-in' className={buttonVariants({variant: 'ghost'})}> Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar