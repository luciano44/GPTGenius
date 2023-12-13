import Link from "next/link";
import "./home.css";
import { GiBrain } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary flex justify-center">
            <GiBrain className="mr-3 opacity-50 floating" />
            GPTGenius
          </h1>
          <p className="py-6 text-lg leading-loose">
            GPTGenius: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
          </p>
          <Link href="/chat" className="btn btn-primary get-started">
            GET STARTED <FaArrowRight className="btn-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
