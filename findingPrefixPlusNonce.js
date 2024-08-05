let crypto = require('crypto');

let findPrefix = (target) => {
    let input = 0;
    let result = '';
    while (!result.startsWith(target)) {
        result = crypto.createHash('sha256').update(input.toString()).digest('hex');
        input++;
    }
    return {result, input};
}

console.log('>> findPrefix thats 5 zeros i.e. 00000', findPrefix('00000'));