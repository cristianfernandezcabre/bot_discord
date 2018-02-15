//console.log('El bot funsiona rejoya');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('tamos redi');
});

client.on('message', (message) =>{
	if (message.content == '!jordi') {
		var rand = Math.round(Math.random()*(1));
		var msg;
		switch(rand){
			case 0:
				msg = 'El jordi? El jordi es una mala perra';
				break;
			case 1:
				msg = 'Jordi tienes corchillo en la cabeza';
		}
		message.channel.sendMessage(msg);
	}
	if (message.content == '!ruben') {
		message.channel.sendMessage('Deja de mirar cajas ya coño que eres un pesao');
	}
	if (message.content == '!braulio') {
		var msg = "Pam pam!!!!! estaba yo ayer ahiii to locooo por la calle dando un paseo ahi to desfasao, y de repente viene una pava y me dices tienes un cigarro y le digoooo un puro habano pa tu boca putaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaa, y se lo tomo a mal, y se lo dijo a un polisia que habia ahi al laooo y el tio me viene y me diseeeee la violamos entre los dos loco loco locooooooooooo y yo joderrrrrrr, que tiene 15 añossss jajajajaa pero al final no era un polisia, era Braulio. Ahsadishaudhusahuhuahua puto Braulio. Me fui con el de cañas y al final estuvimos ahi to locos tomando mdma hasta que vino una señora y nos dijo payoooos que eso es to malo tomar de esto que es mucho mejor, y nos dio una sopica de ajo to rica jajajajaajahauuahauajaj puta vieja, nos robo la droja y se fue con sus amigas al bingo a ponerse to morá jashajaj. Arriquitaun taun taun!!!!"
		message.channel.sendMessage(msg);
	}
	if (message.content == '!aiuda') {
		var msg = "```";
		msg += "!jordi --> Indica que es o que tiene el susodicho \n";
		msg += "!ruben --> Demuestra su amor por las cajas con bahia cd/dvd \n";
		msg += "!braulio --> Que no es un comando, que es BRAAAAAULIO";
		msg += "```";
		message.channel.sendMessage(msg);
	}
	if (message.content == '!tts') {
		message.channel.sendMessage('/tts :on: :on:');
	}
});
client.login(process.env.BOT_TOKEN);
