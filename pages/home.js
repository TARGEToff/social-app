import Head from "next/head";
import { Header } from "components/Header";
import { Posts } from "components/Posts";
import { supabase } from "client";
import { PostForm } from "components/PostForm";
import { Navbar } from "components/Navbar";

export default function Home() {
    const user = supabase.auth.user();
    console.log(user);
    return (
        <div className="dark:bg-gray-800 flex flex-col items-center min-h-screen py-2">
            <Head>
                <title>social-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            { user &&
                <div className="w-full flex flex-row">
                    <Navbar user={user}/>
                    <main className="flex flex-col items-center w-6/12 flex-1 px-10 text-center">
                        <PostForm />
                        <Posts />
                    </main>
                    <aside className="w-4/12"></aside>
                </div>
            }
        </div>
    );
}
