import { Server } from 'socket.io';

const options = {
    options: {
        //debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'support',
    },
};

// create messages
const messages = [
    {
        msgTime: '',
        viewerName: '',
        viewerMsg: '',
    },
];
Server;
// Hook in Socket.io server into Express API
export const socketServer = (httpServer) => {
    const io = new Server(httpServer, { cors: '*' });

    // every browser tab => own socket
    console.log('SocketServer listening to frontend!');

    io.on(
        'connection',
        ('message',
        (tags, message, self) => {
            //io.connect();
            // const chatMessage = {
            //     userID: tags['user-id'],
            //     username: tags.username,
            //     id: tags.id,
            //     message: message,
            //     timestamp: Date.now(),
            // };

            const chatMessage = {
                userID: 123,
                username: 'Dumbo',
                id: 101,
                message: 'message',
                timestamp: Date.now(),
            };

            // Read Message
            io.on;
            io.emit('message', chatMessage);

            //if (self) return;

            io.on('disconnecting', () => {
                socket.client.disconnect();
            });
        })
    );
};
