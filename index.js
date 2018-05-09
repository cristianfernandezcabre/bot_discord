const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

var corchojordi = 0;
var corchoruben = 0;
var corchoraul = 0;
var corchocristian = 0;

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
	if (message.content == '!corchojordi') {
		corchojordi++;
		var msg = 'Joder Jordi ya la has vuelto a liar, ya has tenido corchillo ' +corchojordi+ ' veces';
		message.channel.sendMessage(msg);
	}
	if (message.content == '!corchocristian') {
		corchocristian++;
		var msg = 'Me cago en dios quien me mandaba hacer esto, si es que ya me lo dicen Cristian tienes corchillo en la cabesa y la has cagao otra vez ahora tienes corchillo en la cabeza ' +corchocristian+ ' veces';
		message.channel.sendMessage(msg);
	}
	if (message.content == '!corchoruben') {
		corchoruben++;
		var msg = 'Hostia puta Ruben de ' +corchoruben+ ' veces que has tenido corcho en la cabeza te has vuelto un petao';
		message.channel.sendMessage(msg);
	}
	if (message.content == '!corchoraul') {
		corchoraul++;
		var msg = 'Es eso cerebro en la cabeza del raul??? NO, ES BRAAA...CORCHILLO OTRA VEZ EN CONCRETO ' +corchoraul+ ' VECES';
		message.channel.sendMessage(msg);
	}
	if (message.content == '!corchos') {
		var msg = 'Jordi has tenido corchillo ' +corchojordi+ ' veces \n';
		msg += 'Raul has tenido corchillo ' +corchoraul+ ' veces \n';
		msg += 'Ruben has tenido corchillo ' +corchoruben+ ' veces \n';
		msg += 'Cristian has tenido corchillo ' +corchocristian+ ' veces \n';
		message.channel.sendMessage(msg);
	}
	if (message.content == '!rollos'){
		var braulio = message.server.members.get('name', 'Braulio');
		braulio = braulio.toString();
		var msg = 'Oye ' +braulio + ' que coño hago con el puto rollo enano este de los cojones \n';
		message.channel.sendMessage(msg);
	}
	/*if (message.content == '!prueba') {
		let rawdata = fs.readFileSync('points.json');  
		let corchillos = JSON.parse(rawdata);  
		message.channel.sendMessage(corchillos);
	}*/
	if (message.content == '!aiuda') {
		var msg = "```";
		msg += "!jordi --> Indica que es o que tiene el susodicho \n";
		msg += "!ruben --> Demuestra su amor por las cajas con bahia cd/dvd \n";
		msg += "!braulio --> Que no es un comando, que es BRAAAAAULIO \n";
		msg += "!corchoraul --> Contador de veces que @WakingShadows#2256 ha tenido corchillo en la cabeza \n";
		msg += "!corchojordi --> Contador de veces que @Gladers#2375 ha tenido corchillo en la cabeza \n";
		msg += "!corchoruben --> Contador de veces que @DJMendieta#5407 ha tenido corchillo en la cabeza \n";
		msg += "!corchocristian --> Contador de veces que @cristiann_96#3954 ha tenido corchillo en la cabeza \n";
		msg += "```";
		message.channel.sendMessage(msg);
	}
	if (message.content == '!shrug') {
		var msg = "¯\_(ツ)_/¯";
		message.channel.sendMessage(msg);
	}
	/*if (message.content == '!conn') {
		var msg = "Dime algo va: /n";
		for (user of Bot.users){
			
			msg += user[1].username;
		}  
		message.channel.sendMessage(msg);
	}*/
	if (message.content == '!mochila') {
		var msg = "De que mochila me hablas? :monkaS: \n";
		msg += "1 --> No lo se \n";
		msg += "2-->Ya sabes, huele como a dulce \n";
		message.channel.sendMessage(msg);
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
		collector.on('collect', message => {
			switch(message.content){
			case 1:
				msg = 'Entonces no preguntes';
				message.channel.sendMessage(msg);
				break;
			case 2:
				msg = 'Me da a mi que eso no era ni uva ni posiblemente dulce :thinking:';
				message.channel.sendMessage(msg);
				break;
			default:
				msg = 'Si no me vas a contestar pa que coño me dices nada puto tonto';
				message.channel.sendMessage(msg);
				break;
		}
		})
	}
});
client.login(process.env.BOT_TOKEN);
