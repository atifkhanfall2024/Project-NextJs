import Image from "next/image"
const About = ()=>{

    return(
        <div className="text-black">
            This is my about page
            <Image src={'/next.svg'} alt="window" width={40} height={40}  />
        </div>
    )
}

export default About