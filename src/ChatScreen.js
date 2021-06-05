import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";



function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Emma',
            image: 'https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg',
            message: 'Whats up <3'
        },

        {
            name: 'Emma',
            image: 'https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg',
            message: 'Heres my numba, 911'
        },
        {
            message: 'Heres my numba, 911'
        },
    ]);
    
    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    };

    
    return (

        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH EMMA on 10/08/20
            </p>
            {messages.map((message) => (
                message.name ? (

                    <div className ="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>
                    
                ) : (
                    <div className ="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )
            
            )}
           
            <form className="chatScreen__input">
                <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." 
                    type="text"/>
                <button onClick ={handleSend} type="Submit" className="chatScreen__inputButton">SEND</button>
            </form>
            
        </div>       
        )
}





export default ChatScreen;
