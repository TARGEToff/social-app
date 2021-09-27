const PostForm = () => (
    <div className="w-full sm:w-4/6 xl:w-11/12 flex flex-col items-center justify-center">
        <div className="shadow-lg text-left rounded-t-2xl w-full h-36 p-6">
            <textarea className="resize-none w-full h-full bg-gray-50" />
        </div>
        <div className="flex flex-row-reverse items-center p-8 shadow-lg rounded-b-2xl w-full h-12 bg-gray-100">
            <button className="text-white bg-blue-500 w-20 h-8 rounded-xl">Send</button>
        </div> 
    </div>
)

export { PostForm };