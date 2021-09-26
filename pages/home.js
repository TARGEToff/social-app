import Head from "next/head";
import { Header } from "components/Header";
import { Posts } from "components/Posts";
import { supabase } from "client";
import { PostForm } from "components/PostForm";

export default function Home() {
    const user = supabase.auth.user();
    console.log(user);
    return (
        <div className="dark:bg-gray-800 flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>social-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex flex-col items-center mt-6 w-full flex-1 px-10 text-center">
                <PostForm />
                <Posts />
            </main>
        </div>
    );
}
