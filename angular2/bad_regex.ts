const mask1 = /^\d+1337\d+$/;
const mask2 = /(x+x+)+y/
              ~~~~~~~~~~    [Unsafe Regular Expression]
const mask3 = new RegExp('^\d+1337\d+$');
const mask3 = new RegExp(`^\d+1337\d+$`);
const mask4 = new RegExp('x+x+)+y')
              ~~~~~~~~~~~~~~~~~~~~~    [Unsafe Regular Expression (new RegExp)]
const mask4 = new RegExp(`x+x+)+y`)
              ~~~~~~~~~~~~~~~~~~~~~    [Unsafe Regular Expression (new RegExp)]
