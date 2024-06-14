import Image from "next/image"
import profilePic from "../media/profile_pic.jpeg"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"
export default function MainBody() {
    return (
        <div className="mt-10">
            <div className="rounded justify-center flex h-72">
                <div className="">
                    <Image src={profilePic} width={250} height={250} alt="profile_pic" className="self-center rounded-lg"/>
                </div>
                <div className="flex flex-col justify-center ml-10">
                    <h1 className="text-white text-4xl">Hey there, I&apos;m Khoa Le</h1>
                    <h2 className="text-neutral-500">AI/ML Researcher | Software Developer | Cloud Computing</h2>
                </div>
            </div>
            <About />
            <Work />
            <Contact />
        </div>
        
    )
}