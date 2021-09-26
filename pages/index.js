import Head from "next/head";
import { Header } from "components/Header";

export default function LogIn() {
    return (
        <div className="dark:bg-gray-800 flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>social-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex flex-col items-center mt-6 w-full flex-1 px-10 text-center">
                <div className="bg-gray-100 dark:bg-gray-600 rounded-xl h-96 w-96 flex flex-col justify-center items-center">
                    <button className="text-white bg-blue-500 w-48 h-8 rounded-xl">Sign In with google</button>
                </div>
            </main>
        </div>
    );
}
