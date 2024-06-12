export default function Header() {
    return (
        <div className="flex justify-between bg-black">
            <div className="ml-5">
                <h1 className="text-2xl">Khoa Le</h1>
            </div>
            <div className="flex mr-5"> 
                <div>
                    <h1 className="mr-10">About</h1>
                </div>
                <div className="mr-10">
                    <h1>Projects</h1>
                </div>
                <div className="">
                    <h1>Contact</h1>
                </div>
            </div>  
        </div>
    )
}