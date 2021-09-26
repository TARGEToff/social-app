import Head from "next/head";
import { Switch } from "@headlessui/react";
import { useDarkMode } from "hooks/useDarkMode";
import { Post } from "components/Post";

export default function Home() {
    const [theme, setTheme] = useDarkMode();
    return (
        <div className="dark:bg-gray-800 flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>social-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="m-6">
                <h1 className="text-4xl font-bold dark:text-white">
                    social-app
                </h1>
                <Switch
                    checked={() => setTheme("dark")}
                    onChange={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                    className={`${
                        theme === "light" ? "bg-blue-600" : "bg-black"
                    } absolute top-12 right-12 inline-flex items-center h-7 rounded-full w-14`}
                >
                    <span
                        className={`${
                            theme === "dark" ? "translate-x-8" : "translate-x-1"
                        } w-5 h-5 transform bg-white rounded-full`}
                    />
                </Switch>
            </header>
            <main className="flex flex-col items-center mt-6 w-full flex-1 px-10 text-center">
                    <Post />
                    <Post />
            </main>
        </div>
    );
}
