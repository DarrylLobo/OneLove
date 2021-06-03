import React from 'react';
//import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Emma Stone"
                message="YO whats up hot stuff!"
                timestamp="40 Seconds ago"
                profilePic="https://media.vanityfair.com/photos/55a674affff2c16856a6bd85/16:9/w_1280,c_limit/emma-stone-aloha-miscast.jpg"
            />
            <Chat
                name="Bill Gates"
                message="Help a nigerian prince has captured me!"
                timestamp="55 Seconds ago"
                profilePic="https://image.cnbcfm.com/api/v1/image/106635601-1595938600994SG-Gates-072820-04-jpg?v=1605891431"
            />
            <Chat
                name="Jeff Bezos"
                message="Want a millie?!"
                timestamp="20 Minutes ago"
                profilePic="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
            />
        </div>
    );
}

export default Chats;
