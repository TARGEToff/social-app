import { Post } from "./Post"

const Posts = () => (
    <div className="w-full sm:w-4/6 xl:w-4/12 flex flex-col items-center justify-center">
        <Post />
        <Post />
    </div>
)

export { Posts }