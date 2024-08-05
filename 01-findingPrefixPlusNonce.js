let crypto = require('crypto');

//find a nonce/target that has a prefix "aimalPrefix"
let findPrefixWithNonce = (target) => {
    let input = 596139; //why 596139? cuz 596139 was '00000'
    let result = '';
    let inputStr = '';
    while (!result.startsWith(target)) {
        inputStr = 'aimalPrefix' + input.toString(); //now this is '00000' + the prefix
        result = crypto.createHash('sha256').update(result).digest('hex');
        input++;
    }
    console.log('>>> input', input);
    return {
        inputStr,
        result
    }
}

console.log('>> findPrefix thats 5 zeros i.e. 00000', findPrefixWithNonce('00000'));

//works fine - find the number that starts with 5 zeros
let findPrefix = (target) => {
    let input = 0;
    let result = '';
    while (!result.startsWith(target)) {
        result = crypto.createHash('sha256').update(input.toString()).digest('hex');
        input++;
    }
    return {result, input};
}