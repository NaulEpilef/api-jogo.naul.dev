import messageArrive from './messageController';

import client from './client';

const twitchBot = () => {
	try {
		function joinedChat(address: string, port: number) {
			console.log(`* Bot entrou no endereço ${address}:${port}`);
		}
		
		client.on("message", messageArrive);
		client.on("connected", joinedChat);
		
		client.connect();
	} catch (e) {
		console.log(e);
	}
}

export default twitchBot;