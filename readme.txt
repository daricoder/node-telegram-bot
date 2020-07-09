Esta aplicacion hace que un bot que este aniadido como administrador en un grupo de telegram pueda enviar mensajes.

1 crear un bot con BotFather en el dispositivo con telegram
2 almacenar el token(TOKEN_BOT) que te da BotFather en un lugar seguro eg. .env
3 crear el grupo en telegram aniadiendo al bot creado
4 darle permisos de administrador al bot dentro del grupo
5 escribir algo en el grupo debe haber por lo menos un mensaje
6 almacenar el id unico(CHAT_ID) del grupo en un lugar seguro eg. .env,  a travez de peticion post a https://api.telegram.org/bot<token>/getUpdates

recurso:
https://dev.to/rizkyrajitha/get-notifications-with-telegram-bot-537l

Telegram ofrece una api que se la puede manejar por peticiones post y get para mandar mensajes e interactuar con los bots 
tu lo que programas es un bot por eso quien manda el mensaje en el grupo es el bot pero el bot es el servidor quien lo controla.

Con pm2 normalmente te ejecuta tu proceso cada vez que termina, pero darle un delay de reinicio con la opcion "--restart-delay" con un valor en ms que le des:
eg: pm2 start 0 --watch --restart-delay=8000
cada 8 segundos se reinicia asi que no se necesita de ningun sleep en el proceso o app.

