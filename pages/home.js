import Head from "next/head";
import { Post } from "components/Post";
import { Header } from "components/Header";

export default function Home() {
    return (
        <div className="dark:bg-gray-800 flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>social-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex flex-col items-center mt-6 w-full flex-1 px-10 text-center">
                    <Post />
                    <Post />
            </main>
        </div>
    );
}
