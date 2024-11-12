import axios from "axios";
import landingPhoto from "../images/landing.jpg"
import VibingLogo from '../images/vibing.png'


function Homepage() {

  axios.defaults.withCredentials = true; // maintain user sessions

  return (
    <section className="flex-grow py-10 bg-purple-200">
      <div className="px-8 py-10 pt-8 pb-8">
  <div className="flex flex-wrap">
    <div className="w-full px-4 lg:w-1/2">
      <div className="pt-8 lg:max-w-lg">
        
        <img
          className="block object-cover w-full max-w-xs lg:max-w-lg h-auto pt-6 pb-10"
          src={VibingLogo}
          alt="logo"
        />
        <span className="pt-6 text-xl font-extrabold text-indigo-500 md:text-2xl">
          Join Us!
        </span>
        <h1 className="mt-1 mb-6 text-3xl font-extrabold text-black-800 sm:text-3xl lg:text-5xl font-poppins">
          A dating app is only the first step.
        </h1>
        <p className="mb-10 text-xl font-extrabold text-indigo-500 md:text-2xl">
          Welcome to Vibing, where finding your soulmate is as easy as swiping right!
        </p>
      </div>
    </div>

    
    <div className="w-full px-4 lg:w-1/2">
      <img
        className="h-auto w-full rounded-2xl border-[3px] border-indigo-900 object-cover shadow-lg"
        src={landingPhoto}
        alt="landphoto"
      />
    </div>
  </div>
</div>

    </section>
  );
}

export default Homepage;
