import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full  bg-green-50">
      <div className="w-full bg-black h-20 pt-6">
        {" "}
        <h1 className="text-3xl font-bold text-center mb-6">
          <span className="text-white opacity-40">WELCOME TO</span> 
          <span className="text-green-600 shadow-2xl opacity-90" > CAMEROON URBAN TRAVEL</span>
        </h1>
      </div>
      <div className="flex  h-auto w-full pt-7">
        <a href="#">
          <span className="hover:text-blue-700">
            <u>liste des agence</u>
          </span>
        </a>
        <div className="space-x-4 w-2/3">
          <input id="serach"
            type="search"
            placeholder="rechercher une agence"
            className="w-2/3 bg-black text-white ml-7 relative left-10 rounded-md h-8 text-center"
          />
          <button  className="relative left-10 rounded-md bg-blue-800 text-white hover:bg-red-500 p-1 opacity-70">rechercher</button>
        </div>
        <div className="flex space-x-1 h-auto ">
          <a
          href="/components/login"
          className=" bg-blue-600 text-white  hover:bg-blue-700 h-8 p-1 rounded-md relative left-9"
        >
          connexion
        </a>
        <a href="/components/register">
          <button className=" bg-green-600 text-white rounded-md hover:bg-green-700 h-8 p-1 relative left-10">
            Inscription
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}
