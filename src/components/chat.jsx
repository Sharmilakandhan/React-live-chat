import { useEffect, useState } from "react";
import Chatmessage from './chatmessage'
import { addDoc, collection, doc, onSnapshot, QuerySnapshot, serverTimestamp } from "firebase/firestore";
import { db, auth } from '../config/firebase'


function chat(user) {
    const [message, setMessage] = useState([]);
    const [text, setText] = useState("");
    const messagesRef = collection(db, "messages")

  

    const handlesubmit = async () => {
        const date = new Date();
        await addDoc(messagesRef, {
            text,
            email: auth.currentUser.email,
            logo: auth.currentUser.photoURL ,
            name: auth.currentUser.displayName || "sharmila default",
            date,
            createdAt: serverTimestamp(),
        })
        setText("")
        console.log(user)
         setTimeout(() => {
            const el = document.querySelector('#copyright');

               if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 0.5);

    }

    useEffect(() => {
        const unsubscribe = onSnapshot(messagesRef, (QuerySnapshot) => {
            const newmessages = QuerySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .sort((a, b) => a.date?.toMillis() - b.date?.toMillis());
            setMessage(newmessages);
            console.log(newmessages)
            setTimeout(() => {
                document
                    .querySelector('#copyright')
                    .scrollIntoView({ behavior: 'smooth' })
            }, 0.5);
        });
        return () => unsubscribe();
    }, [])

    return (
        <>
            <div className="container">
                <div className=" head">
                    <h1 className="text-head">Realtime Chat</h1>
                </div>
                <div className="row ">
                    <div className="text">
                        <div className="col">
                            <div className="chat">
                                <div className="welcomechat"> 
                                <h1> Welcome to  live chat </h1>
                                <p>This is the beginning of this chat.
                                    <br/>
                                    ______________________________________________________________________________
                                </p>
                                </div>
                                <span className="scroll">
                                    {
                                        message.map(message => (
                                            <Chatmessage {...message} user={user} />)
                                        )
                                    }
                                </span>

                            </div>

                            <div className="footer">
                                <div className="d-flex mt-1">
                                    <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
                                    <button className="ms-2 btn btn-primary" onClick={handlesubmit}>Send</button>
                                </div>
                                <div id="copyright" className="mt-2">
                                    copyright resolve
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}

export default chat;