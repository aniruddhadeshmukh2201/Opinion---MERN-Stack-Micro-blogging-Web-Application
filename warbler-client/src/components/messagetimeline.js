import React from 'react';
import MessageList from "../containers/messagelist";
import UserAside from "./useraside";

const MessageTimeLine = props => {
    return (
        <div className="row">
            <UserAside 
            profileImageUrl={props.profileImageUrl} 
            username={props.username}  
            />
            <MessageList />
        </div>
    )
}
export default MessageTimeLine;