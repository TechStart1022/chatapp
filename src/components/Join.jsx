import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { default as socket } from "./ws"
const Join = () =>{
    const [nickname, setNickname] = useState();
    const navigate = useNavigate();
    const handleOnClick = () => history.push(`/chat/${nickname}`);

    useEffect(() =>{
        localStorage.setItem("chatConnected",true);
    },[]);
    const submitNickname = () =>{
        socket.emit("user nickname", nickname);
    };

    return(
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center my-auto">
                <h1 className="font-bold text-4xl pb-10 text-gray-900 antialiased">
                    Chat App🦜
                </h1>
                <form className="flex w-full max-w-sm space-x-3 justify-center">
                    <div className="relative">
                        <input
                            type="text"
                            onChange={(e)=>setNickname(e.target.value)}
                            className="rounded-lg border-transparent flex-1 appearance-none focus:ring-gray-200 focus:border-transparent"
                            placeholder="Nickname"
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Join