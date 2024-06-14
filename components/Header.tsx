export default function Header() {
    return (
        <div className="flex justify-between">
            <div className="ml-12 mt-4">
                <h1 className="text-2xl text-[#01C38D] rounded-lg">Khoa Le</h1>
            </div>
            <div className="flex mr-5 mt-4"> 
                <div>
                    <h1 className="mr-10 text-[#01C38D]">About</h1>
                </div>
                <div className="mr-10">
                    <h1 className="text-[#01C38D]">Projects</h1>
                </div>
                <div className="">
                    <h1 className="text-[#01C38D]">Contact</h1>
                </div>
            </div>  
        </div>
    )
}