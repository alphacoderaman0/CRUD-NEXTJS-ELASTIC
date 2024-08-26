"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function employee() {

    // const [name , setName] = useState('');
    // const [mobno , setMobno] = useState('');

    // const handleAddUser = async()=>{

    //     try {
    //        const res = await fetch('http://localhost:3000/api/index',{
    //         method:'POST',
    //         headers:{"Content-Type":"application/json"},
    //         body: JSON.stringify({
    //         name,mobno
    //         })
    //        }) 
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
//   add user function starts
  const router = useRouter();
  const [message , setMessage] = useState('');
  const [saveUser,setSaveUser] = useState({
    name: "",
    mobno: ""
  })
  const handleSaveChanges = ({target :{name,value}})=>{
    setSaveUser({...saveUser , [name] : value});
  }
  const handleAddSubmit= async (e)=>{
    e.preventDefault();

    const reqOption = {
      method : "POST",
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify(saveUser)
    }
    const response = await fetch("http://localhost:3000/api/index",reqOption);
    const newUser = await response.json();

    setMessage(` Details added Successfully`);
        setTimeout(navigate, 3000);
        function navigate() {
          window.location.href = '/';
        }
  }
  //add user function ends
  return (
    <div className=" px-96 flex  justify-center items-center h-[100vh]">
      <div className="w-full bg-white px-6 py-6 border rounded-xl shadow-lg hover:shadow-xl">
          <h1 className="text-3xl text-center font-bold uppercase">Add New Contact</h1>
          {message && (
              <div className="flex justify-center bg-green-500 text-white text-md py-1 px-3 rounded-md mt-2">
                {message}
              </div>)}
          {/* form starts */}
          <form onSubmit={handleAddSubmit} className="my-2 space-y-5 ">
          {/* input starts */}
            <div>
              <label htmlFor="name"className="block mb-2 text-lg font-medium text-gray-900 ">Name</label>
              <input onChange={handleSaveChanges} value={saveUser.name} name="name" type="text" id="name" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Name" required=""/>
            </div>
            
            <div>
              <label htmlFor="mobno"className="block mb-2 text-lg font-medium text-gray-900 ">Phone Number</label>
              <input onChange={handleSaveChanges} value={saveUser.mobno} name="mobno" type="number" id="mobno" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Phone Number (only 10 digits)" required=""/>
            </div>
            {/* input ends */}

            {/* buttons starts */}
            <div className="flex justify-between">
              <Link
              href="/"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase"
              >
              back
              </Link>
              <input
              type="submit"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase addCancel" value="add"/>
            </div>
           {/* buttons ends */}
          </form>
          {/* form ends */}
      </div>
    </div>
  );
}
