import Terminal from "./Terminal";

const Home = () => {
    return ( 
        <div className=" flex flex-col overscroll-contain overflow-hidden">
        <div className="bg-[url(./background.gif)] bg-cover w-screen h-screen flex flex-col relative left-0 align-middle justify-center pl-11 ">
          <h1 className="text-9xl left-0 pb-7">Building Starts Here</h1>
          <button  className="text-7xl left-0 rounded-full border w-80 bg-slate-500 bg-opacity-35 "><a href="#second">Generate</a></button>
        </div>
            <div className="relative bg-slate-300 w-screen h-screen flex justify-center items-center">
            <Terminal/> 
    <a className="absolute bottom-0 left-0  text-9xl"  id="second"></a>
    </div>
        </div>
    );
}
 
export default Home;