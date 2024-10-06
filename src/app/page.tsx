import Image from "next/image";
import TeamSpirit from '../assets/Team spirit.svg'
import aboutus from '../assets/about us.svg'
import vector1 from '../assets/home page vector.svg'
import temp from '../assets/temp.svg'
import vision from '../assets/vision.svg'
import projectDevelopment from '../assets/project development.svg'
import research from '../assets/Research paper.svg'
import Footer from "@/Components/Footer";

export default function Home() {
  const containerStyle = 'flex px-10 flex-1 gap-2 flex-wrap-reverse justify-center'
  return (
    <div className="flex flex-1 gap-[50px] flex-col mt-10 justify-center items-center">
      {/* heading container */}
      <div
        className={containerStyle}
      >
        <div className="flex flex-1 flex-col justify-center ">
          <h2
            className="font-bold text-[95px] leading-[90px] text-[#333333]"
          >Main heading</h2>
          <h4
            className="font-medium text-[49px] text-[#333333]"
          >Empowering Change, Inspiring Innovation</h4>

          {/* btn */}
          <div
            className="flex mt-4 gap-5"
          >
            <button
              className="rounded-full capitalize-full px-5 p-2 text-white bg-gradient-to-r from-[#C92842] via-[#EF4136] to-[#FE7136]"
            >signup</button>
            <div
              className="rounded-full flex justify-center items-center bg-gradient-to-r from-[#C92842] via-[#EF4136] to-[#FE7136]"
            >
              <button
                className="bg-white capitalize p-2 m-[1.5px] px-5 rounded-full"
              >log in</button>
            </div>
          </div>
        </div>

        <div
          className="flex-1 flex justify-center "
        >
          <Image
            src={TeamSpirit}
            alt="team spirit"
            className="self-center"
          />
        </div>
      </div>

      {/* about us container */}
      <div
        className={containerStyle}
      >
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={aboutus}
            alt="about us"
          />
        </div>

        <div
          className="flex-1 flex flex-col justify-center gap-10 "
        >
          <h2 className="text-[48px] text-[#333333] leading-[48px] font-medium">Get To Know Us.</h2>

          <div
            className="gap-5 flex flex-col"
          >
            <p className="font-medium text-[31px] leading-[31px] text-[#626262]">Introducing the Ignite Society</p>
            <p
              className="font-medium text-[20px] leading-[20px] text-justify"
            >A <strong className="text-[#C92842]">student-led initiative</strong> at Jamia Hamdard, dedicated to cultivating collaboration, innovation, and entrepreneurship among aspiring changemakers. We offer a dynamic platform for students to connect, develop skills, and turn ideas into impactful projects. With a focus on project development, research, learning exposure, startup culture, and networking, we empower students to unleash their potential and drive positive change in their communities. </p>
          </div>
        </div>
      </div>

      {/* see what other say */}
      <div
        className=" flex flex-1 w-[100%] relative py-[auto] gap-4 h-[auto] justify-center items-center flex-col min-h-[600px] "
        style={{
          backgroundImage: `url('${vector1.src}')`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          className="font-medium text-[48px] z-[1] leading-[48px] text-[#E5E5E5]"
        >See what others say.</h2>
      </div>


      {/* vision container */}
      <div
        className={`mt-10 w-[90%] flex flex-1 justify-center items-center flex-col min-h-[400px]`}
        style={{
          backgroundImage: `url('${vision.src}')`
          , backgroundSize: '100%'
          , backgroundRepeat: 'no-repeat'
        }}
      >

      </div>


      {/* events container */}
      <div className="eventsContainer">
        <div className="header">See What We’re Doing Next!</div>
        <div className="box large">Main Event Details</div>
        <div className="box">Upcoming Event 1</div>
        <div className="box">Upcoming Event 2</div>
        <div className="box">Upcoming Event 3</div>
        <div className="box small">Event Image</div>
        <div className="box small">Event Image</div>
      </div>


      {/* domains container */}
      <div
        className="w-[100%] container bg-[#4A51F8] gap-8 flex flex-1 p-5 mx-5 flex-col justify-center items-center rounded"
      >
        <h2
          className="font-medium text-[48px] leading-[48px] text-[#E5E5E5] text-start"
        >Domains</h2>

        <div
          className="flex flex-1 gap-10 w-[100%] flex-col px-10"
        >

          {/* project development */}
          <div
            className="flex-1 flex flex-col gap-3"
          >
            <h4
              className="font-medium text-[31px] leading-[31px] text-[#DBDBDB]"
            >Project Development</h4>
            <div
              className="flex flex-1 gap-2"
            >

              <Image
                src={projectDevelopment}
                alt="project development"
                className="flex-1"
              />
              <p
                className="font-normal flex-1 text-white text-justify text-[20px] leading-[20px] opacity-70"
              >Ignite Society is dedicated to driving impactful projects that address pressing societal needs and foster positive change. With a focus on collaboration, innovation, and sustainability, we empower individuals and communities to develop and implement projects that make a difference.
                Our project development process begins with identifying key areas where our collective efforts can have the greatest impact. Whether it's addressing environmental challenges, promoting social justice, or advancing technological innovation, Ignite Society works closely with stakeholders to define clear goals and objectives for each project.
                Once the project goals are established, Ignite Society provides support in various forms, including funding, mentorship, and access to resources. Our team of experts and advisors offers guidance and expertise to help project teams navigate challenges, develop strategic plans, and achieve their objectives effectively.
                Throughout the project lifecycle, Ignite Society emphasizes collaboration and community engagement. We believe in the power of partnerships and work closely with local organizations, governments, and other stakeholders to leverage collective strengths and resources for maximum impact.
                At Ignite Society, we measure success not just by the completion of projects but by the positive outcomes they generate. Whether it's improving quality of life, driving economic growth, or promoting sustainability, our projects are designed to create lasting change and leave a meaningful legacy in the communities we serve. </p>
            </div>
          </div>

          {/* research and innovation */}
          <div
            className="flex-1 flex flex-col gap-3"
          >
            <h4
              className="font-medium text-[31px] leading-[31px] text-[#DBDBDB] text-end mb-5"
            >Project Development</h4>
            <div
              className="flex flex-1 gap-2"
            >

              <p
                className="font-normal flex-1 text-white text-justify text-[20px] leading-[20px] opacity-70"
              >Ignite Society is dedicated to driving impactful projects that address pressing societal needs and foster positive change. With a focus on collaboration, innovation, and sustainability, we empower individuals and communities to develop and implement projects that make a difference.
                Our project development process begins with identifying key areas where our collective efforts can have the greatest impact. Whether it's addressing environmental challenges, promoting social justice, or advancing technological innovation, Ignite Society works closely with stakeholders to define clear goals and objectives for each project.
                Once the project goals are established, Ignite Society provides support in various forms, including funding, mentorship, and access to resources. Our team of experts and advisors offers guidance and expertise to help project teams navigate challenges, develop strategic plans, and achieve their objectives effectively.
                Throughout the project lifecycle, Ignite Society emphasizes collaboration and community engagement. We believe in the power of partnerships and work closely with local organizations, governments, and other stakeholders to leverage collective strengths and resources for maximum impact.
                At Ignite Society, we measure success not just by the completion of projects but by the positive outcomes they generate. Whether it's improving quality of life, driving economic growth, or promoting sustainability, our projects are designed to create lasting change and leave a meaningful legacy in the communities we serve. </p>
              <Image
                src={research}
                alt="project development"
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />

    </div>
  )
}
