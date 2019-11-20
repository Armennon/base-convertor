module.exports = {
    convertToBinary: function(n){
        let reversedBinaryResult = "";
        let binaryResult = "";
        if(n == 0){
            binaryResult = 0;
        }
        while(n >= 1){
            n % 2 == 0 ? reversedBinaryResult += "0": reversedBinaryResult += "1";
            n = Math.floor(n/2);
        }
        for(let i = reversedBinaryResult.length - 1; i >= 0; i--){
            binaryResult += reversedBinaryResult[i];
        }
        return binaryResult;
    },

    convertToHexa: function(n){
        let reversedHexaResult = "";
        let hexaResult = "";
        if(n == 0){
            hexaResult = 0;
        }
        while(n >= 1){
            switch(n % 16){
                case 10:
                    reversedHexaResult += "A";
                    break;
                case 11:
                    reversedHexaResult += "B";
                    break;
                case 12:
                    reversedHexaResult += "C";
                    break;
                case 13:
                    reversedHexaResult += "D";
                    break;
                case 14:
                    reversedHexaResult += "E";
                    break;
                case 15:
                    reversedHexaResult += "F";
                    break;
                default:
                    reversedHexaResult += n % 16;
            }
            n = Math.floor(n/16);
        }
        for(let i = reversedHexaResult.length - 1; i >= 0; i--){
            hexaResult += reversedHexaResult[i];
        }
        return hexaResult;
    }
}