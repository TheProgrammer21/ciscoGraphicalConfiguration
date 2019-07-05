export class NetworkUtilities {
    /**
     * Retruns the corresponding Subnetmask
     * @param prefix of type string; Format: "/15"
     */
    public static prefixToSubnetmask(prefix: string): string {
        let prefixLength = parseInt(prefix.substr(1));
        let binaryString = "1".repeat(prefixLength) + "0".repeat(32 - prefixLength);
        let result = "";
        binaryString.match(/.{8}/g).forEach(e => {
            result += parseInt(e, 2) + ".";
        });
        return result.slice(0, -1);
    }
}
