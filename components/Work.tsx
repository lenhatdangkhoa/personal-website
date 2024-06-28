
import Image from "next/image"
import mlProject1 from "@/media/ml_proj.png"
import mlProject2 from "@/media/ml_proj2.png"
import sweProject from "@/media/cinema.jpg"
import cloudProject1 from "@/media/cloud_proj1.png"
import cloudProject2 from "@/media/cloud_proj2.png"
import myTinerary from "@/media/mytinerary.png"
export default function Work() {
    return (
        <div className="mt-24 flex flex-col items-center">
            <div>
                <h1 className="text-5xl">My Work</h1>
            </div>
            <div className="flex">
                <div>
                    <div className="mt-4 rounded-lg bg-black flex flex-col items-center h-1/2">
                        <h1 className="text-center text-xl text-white mt-2">Credit Card Fraud Detection</h1>
                        <h2 className="text-[#01C38D] mb-2">ML | Data Science</h2>
                        <Image src={mlProject1} width={500} height={300} alt="ml_proj1"></Image>
                        <Image src={mlProject2} width={500} height={300} alt="ml_proj2" className="rounded-b-lg"></Image>
                    </div>
                    <div className="flex text-center flex-col mt-24 rounded-lg bg-black">
                        <h1 className="text-center text-xl text-white mt-2">MyTinerary</h1>
                        <h2 className="text-[#01C38D] mb-2">Software Development</h2>
                        <Image src={myTinerary} width={500} height={500} alt="mytinerary" className="rounded-b-lg"></Image>
                    </div>
                </div>
                <div className="mt-4 flex flex-col ml-24 h-1/2">
                    <div className="bg-black rounded-lg text-center">
                        <h1 className="text-center text-xl text-white mt-2">Cinema E-Booking System</h1>
                        <h2 className="text-[#01C38D]">Software Engineering</h2>
                        <Image src={sweProject} width={500} height={350} alt="ml_proj1" className="rounded-lg"></Image>
                    </div>
                    <div className="bg-black mt-24 rounded-lg text-center">
                        <h1 className="text-center text-xl text-white mt-2">Spot Instances Pricing Analysis</h1>
                        <h2 className="text-[#01C38D] mb-2">Cloud Computing | Big Data Analysis</h2>
                        <Image src={cloudProject1} width={500} height={300} alt="cloud_proj1"></Image>
                        <Image src={cloudProject2} width={500} height={300} alt="cloud_proj2" className="rounded-b-lg"></Image>
                    </div>
                </div>
            </div>
            
        </div>
    )
}