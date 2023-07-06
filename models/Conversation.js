const mongooose = require('mongoose');
const ConversationSchema = new mongooose.Schema(
    {
        username:{
            type: String,
            default: "test",
        },
        senderId:{
            type: String,
            default: "test",
        },
        receiverId:{
            type: String,
            default: "test",
        },
        members:{
            type: Array,
        },
    },
    {timestamps:true}
);
module.exports = mongooose.model('Conversation', ConversationSchema);


