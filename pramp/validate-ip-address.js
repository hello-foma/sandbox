function validateIP(ip) {
  /**
   @param ip: string
   @return: boolean
   */

  /*
  Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false



Check:
1) 4 segments '.'
2) Value number 0-255

Split to segments
Check segments count
check each value


O(n), O(n)

Input:

"1.2.3.0x1"
Expected:

false
Actual:

true

true
  */

  // your code goes here

  if (ip.length < 7) {
    return false;
  }

  const segments = ip.split('.');

  if (segments.length !== 4) {
    return false;
  }

  for(let i = 0; i < segments.length; i++) {
    const value = Number(segments[i]);

    if (String(value) !== segments[i]) {
      return false;
    }

    if (isNaN(value) || value < 0 || value > 255) {
      return false;
    }
  }

  return true;
}
