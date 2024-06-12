import Image from "next/image";
import cloudLogo from "@/media/cloud_logo3.png"
import mlLogo from "@/media/ml_logo2.png"
import sweLogo from "@/media/swe_logo3.png"

export default function About() {
    return (
        <div>
            <div className="flex justify-between content-center">
                <div>
                    <Image src={cloudLogo} width={200} height={200} alt="cloud_logo"></Image>
                </div>
                <div className="w-1/2 content-center bg-teal-100">
                    <h1 className="text-black text-2xl">Cloud Coumputing</h1>
                    <p>
                        I am interested in Cloud Computing because it offers so many innovative solutions for data storage, scalability, and availability.
                        My interest lies in leveraging cloud technologies to optimize business processes and enhance their IT infrastructure.
                        I am taking the AWS Certified Cloud Practitioner Exam this upcoming August!
                    </p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-1/2 content-center bg-teal-100">
                    <h1 className="text-black text-2xl">Machine Learning</h1>
                    <p>
                        I am interested in Cloud Computing because it offers so many innovative solutions for data storage, scalability, and availability.
                        My interest lies in leveraging cloud technologies to optimize business processes and enhance their IT infrastructure.
                        I am taking the AWS Certified Cloud Practitioner Exam this upcoming August!
                    </p>
                </div>
                <div className="">
                    <Image src={mlLogo} width={200} height={200} alt="ml_logo"></Image>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <Image src={sweLogo} width={200} height={200} alt="swe_logo"></Image>
                </div>
                <div className="w-1/2 content-center bg-teal-100">
                    <h1 className="text-black text-2xl">Software Engineering</h1>
                    <p>
                        I am interested in Cloud Computing because it offers so many innovative solutions for data storage, scalability, and availability.
                        My interest lies in leveraging cloud technologies to optimize business processes and enhance their IT infrastructure.
                        I am taking the AWS Certified Cloud Practitioner Exam this upcoming August!
                    </p>
                </div>
            
            </div>
        </div>
    )
}