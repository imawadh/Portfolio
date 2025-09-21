import Image from "next/image";
import Link from "next/link";
import SocialConnect from "./SocialConnect";

function Footer() {
  return (<>
    <footer className="bg-[#222831] p-5 text-white flex flex-col md:flex-row md:justify-between items-center">
      <section className="lg:w-[60%] md:w-[45%] w-full text-center md:text-left">
        <h3 className="md:text-xl md:font-semibold font-bold text-2xl  m-2">Reach Out To Me</h3>
        <p className="m-2">
          Discuss The Project or To Say Hi! My Inbox is open to all
        </p>
        <h3 className="font-bold text-xl m-2">
          IIT Madras'28 || CHS'23 || Data Science || Web Development ||
          Competitive Programming
        </h3>
        <p className="m-2">Open for Opportunities : Yes</p>

        <ul className="m-2 mt-3 flex justify-center md:justify-start gap-4">
          {SocialConnect.map((Social, index) => (
            <li
              key={index}
              className="bg-amber-50 rounded flex justify-center items-center hover:bg-amber-300 hover:cursor-pointer"
            >
              <Link href={Social.link} className="p-2">
                <Image
                  src={Social.icon}
                  alt={Social.platform}
                  height={25}
                  width={25}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 md:mt-0 flex justify-center items-center">
        <div>
          <Image
            src="/myphoto.ico"
            width={250}
            height={250}
            alt="MyPhoto"
            className="rounded-full border-8 border-[#00ADB5]"
          />
        </div>
      </section>
    </footer>
    <blockquote className="text-white bg-[#222831] text-center p-2 font-bold font-alex text-2xl">
      &lt; Awadh Kishor Singh /&gt;
    </blockquote>

  </>
  );
}

export default Footer;
