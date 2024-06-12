import Image from "next/image";
import cloudLogo from "@/media/cloud.png"
import mlLogo from "@/media/ml_logo2.png"
import sweLogo from "@/media/swe_logo3.png"

export default function About() {
    return (
        <div className="flex justify-around mt-10">
            <div className="flex justify-center">
                <div className="flex flex-col items-center bg-[#132D46] rounded-lg w-80">
                    <div className="">
                        <Image src={cloudLogo} width={150} height={150} alt="cloud_logo"></Image>
                    </div>
                    <div className="mx-4 content-center text-center">
                        <h1 className="text-[#01C38D] text-2xl">Cloud Computing</h1>
                        <p className="text-white">
                            Interested in leveraging cloud technologies to address issues of data storage, scalability, and accessibility.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col items-center bg-[#132D46] rounded-lg w-80">
                    <div className="">
                        <Image src={mlLogo} width={150} height={150} alt="ml_logo"></Image>
                    </div>
                    <div className="mx-4 content-center text-center">
                        <h1 className="text-[#01C38D] text-2xl">AI/ML</h1>
                        <p className="text-white">
                            Research areas include Computer Vision, Machine Learning, and LLMs. Experienced in classic ML algorithms, such as Random Forests, SVM, K-Means Clustering, and more. 
                        </p>
                    </div>
                    
                </div>
            </div>
           <div className="flex justify-center">
            <div className="flex flex-col items-center  bg-[#132D46] rounded-lg w-80">
                    <div>
                        <Image src={sweLogo} width={150} height={150} alt="swe_logo"></Image>
                    </div>
                    <div className="mx-4 content-center text-center">
                        <h1 className="text-[#01C38D] text-2xl">Software Engineering</h1>
                        <p className="text-white">
                        Passionate about building innovative software. Development experience in React, Nextjs, Tailwind, MySQL, and Java Spring. 
                        </p>
                    </div>
                </div>
           </div>
        </div>
    )
}