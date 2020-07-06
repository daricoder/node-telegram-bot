const { BOT, CHAT_ID } = require("./bot-init");
const { FREE_MEM, TOTAL_MEM } = require("./memory");
// const sleep = require('./sleep');

const telegram_test_ram = async (limit_mem_gb, time_sleep) => {
    if (FREE_MEM < limit_mem_gb) {
        console.log("Agotamiento de Ram");
        console.log("Bot enviando alerta ....");
        try {
            await BOT.telegram.sendMessage(
                CHAT_ID,
                `Queda poco espacio en memoria.
                libre: ${FREE_MEM} 
                total memoria: ${TOTAL_MEM}`
            );
            console.log("Mensaje enviado");
        } catch (error) {
            console.log("Mensaje no enviado");
            console.log(error);
        }
    } else {
        console.log("Suficiente Ram");
        console.log("Mensaje no enviado");
    }
    // console.log(`Esperando ${time_sleep/1000}s para terminar proceso...`);
    // await sleep(time_sleep);
    console.log("Proceso <telegram-test-ram> Terminado");
};

module.exports = telegram_test_ram;
