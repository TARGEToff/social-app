const PostForm = () => (
    <div className="w-full sm:w-4/6 xl:w-4/12 flex flex-col items-center justify-center">
        <div className="shadow-lg text-left rounded-t-2xl mt-6 w-full h-40 p-6">
            <textarea className="w-full h-5/6 bg-gray-50" />
        </div>
        <div className="flex flex-row-reverse items-center p-8 shadow-lg rounded-b-2xl w-full h-12 bg-gray-100">
            <button className="text-white bg-blue-500 w-20 h-8 rounded-xl">Send</button>
        </div> 
    </div>
)

export { PostForm };