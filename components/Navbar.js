import Link from "next/link";

const Navbar = ({ user }) => {
    return (
        <nav className="w-4/12 pl-10 pr-10 flex flex-col items-end">
            <Link href="/profile/id">
                <div className="cursor-pointer flex flex-row h-16 pl-4 m-2 w-52 items-center bg-gray-100 rounded-md ">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={user.user_metadata.avatar_url}
                    />            
                    <p className="ml-2">{user.user_metadata.full_name}</p>
                </div>
            </Link>
            <Link href="/home">
                <a className="w-52 h-12 rounded-md bg-gray-100 m-2 flex flex-col items-center justify-center">Home</a>
            </Link>
            <Link href="/tags">
                <a className="w-52 h-12 rounded-md bg-gray-100 m-2 flex flex-col items-center justify-center">Tags</a>
            </Link>
        </nav>
    );
};

export { Navbar };
