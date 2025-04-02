const { fetchJson, clockString, pickRandom, runtime, formatp, executeCommand } = require('../gift/giftedfunc');

module.exports = {
    async handleCases(m, { Gifted, text, command }) {
        try {
            switch (command) {
                case 'thxto': {
                    let cap = `Special thanks to @mouricedevs, my developer. This project is just Amazing!`
                    Gifted.reply({ text: cap }, m)
                }
                break;
                
                // next case ——————————————
                
                case 'rate': {
                    let rate = Math.floor(Math.random() * 100)
            		Gifted.reply({ text: `Bot Rate : *${rate}%*`, parse_mode: 'Markdown' }, m)
                }
                break;
            }
        } catch (err) {
            console.log(err)
    	    Gifted.reply({ text: `${err}`, parse_mode: 'Markdown' }, m)
    	}
    }
}
