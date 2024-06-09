import Image from "next/image"
import profilePic from "../media/profile_pic.jpeg"

export default function MainBody() {
    return (
        <div>
            <div className="">
                <h1 className="text-xl">Hello World, this is Khoa</h1>
            </div>
            <div className="rounded justify-center flex h-72">
                <div className="flex justify-center border bg-black w-1/5 rounded-lg">
                    <Image src={profilePic} width={250} height={250} alt="profile_pic" className="self-center rounded-lg"/>
                </div>
            </div>
        </div>
        
    )
}