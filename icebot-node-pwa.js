// ICEbot (PWA) V2.5 BY NOXY
//
// ÚLTIMA ATUALIZAÇÃO: 24/07/2025
// -----------------0---------------------
global.latestPerformance=performance.now();
global.latestUpdate=Date.now();
global.version='2.5.0';
global.nomeConta='100A';
global.teste=[];
global.isActive=[];
global.bot_dados={'respostas':{},'mensagens':{}};
global.proximos='';
global.vezAgora='';
global.palavraVez='';
global.palavrasAtualizadas=[];
global.mail__='';
global.grupo = 10;
global.inicio = 0;
__ws__=[];
global.sq1=[
    55266108,
    55266092,
    55266091,
    55266090,
    55266089,
    55266088,
    55266087,
    55266086,
    55266085,
    55266084,
    55266083,
    55266082,
    55266081,
    55266080,
    55266093,
    55266094,
    55266107,
    55266106,
    55266105,
    55266104,
    55266103,
    55266102,
    55266101,
    55266100,
    55266099,
    55266098,
    55266097,
    55266096,
    55266095,
    55266079,
    55266078,
    55266062,
    55266061,
    55266060,
    55266059,
    55266058,
    55266057,
    55266056,
    55266055,
    55266054,
    55266053,
    55266052,
    55266051,
    55266050,
    55266063,
    55266064,
    55266077,
    55266076,
    55266075,
    55266074,
    55266073,
    55266072,
    55266071,
    55266070,
    55266069,
    55266068,
    55266067,
    55266066,
    55266065,
    55266049
]
// -----------------2---------------------
global.antiafk=false;
global.autofarm=false;
global.autoreport=false;
global.autotips=false;
global.autoskip=true;
global.autorejoin=false;
setInterval(()=>{__._=["inativo"]},6000)
// -----------------2---------------------
// bibliotecas necessárias
// npm i chalk gradient-string jsdom axios cheerio ws
const { default: chalk } = await import("chalk");
const { default: gradient } = await import("gradient-string");
var exec = require('child_process').exec; 

const fs = require('fs');

function clear() { return new Promise((resolve, reject) => {  exec('clear', (error, stdout, stderr) => { if (error) reject(error); else {console.log(stdout);resolve()}})})};
clear().then(()=>{
setTimeout(()=>{

console.log("\n")
console.log(gradient.retro("★".repeat(process.stdout.columns)))
console.log(`
\`7MN.   \`7MF' .g8""8q.\`YMM'   \`MP'\`YMM'   \`MM'
  MMN.    M .dP'    \`YM.VMb.  ,P    VMA   ,V  
  M YMb   M dM'      \`MM \`MM.M'      VMA ,V   
  M  \`MN. M MM        MM   MMb        VMMP    
  M   \`MM.M MM.      ,MP ,M'\`Mb.       MM     
  M     YMM \`Mb.    ,dP',P   \`MM.      MM     
.JML.    YM   \`"bmmd"'.MM:.  .:MMa.  .JMML.   
`);
console.log(gradient.retro("★".repeat(process.stdout.columns)));
console.log(gradient.retro("ICEbot (PWA) V2.0.1 BY NOXY — https://github.com/NOXY-JS"));
console.log(chalk.hex("#DBF1ED").bold("[UPDATE 2.0.1.1] — ÚLTIMA ATUALIZAÇÃO 07/07/2025 \n adicionado sistema LOGIN para logar bots. "))
console.log(chalk.hex("#FF0200").bold("⎯".repeat(process.stdout.columns)))
console.log(chalk.hex("#80FF00").bold("[STATUS] — ACTIVE (ATIVO PARA USO) - 67 IPS"))
console.log(chalk.hex("#FFEB00").bold("[INFO] — BOT para GARTIC PWA \nFunções principais (comandos): logout, login, criar contas, editar avatar, editar foto, editar descrição, sair, broadcast, mensagem, resposta, dicas, desenho, aceita, pular vez, entrar sala , entrar sala (customizado), avatar, guess, antiafk, autoreport, autotips, messagejoin, afk, expulsar, todas as dicas. "))

console.log(chalk.hex("#FF0800").bold("[OBS] — NÃO ENTRAR MUITAS VEZES E SAIR CASO EM UM INTERVALO MENOR QUE 5 SEGUNDOS, (COMO 20 VEZES EM 5 SEGUNDOS) CASO CONTRÁRIO O SERVIDOR ENVIARÁ UM ERRO (RATE LIMITED 429) E OS BOTS NÃO CONSEGUIRÃO ENTRAR NA SALA DESEJADA."))

console.log(chalk.hex("#FF0200").bold("⎯".repeat(process.stdout.columns)))
console.log(chalk.hex("#8800FF").bold("Divirta-se com o código :)"))
console.log(chalk.hex("#FF0200").bold("⎯".repeat(process.stdout.columns)))
},5000)
})



process.stdout.write('\x1B[?25l');
process.on('exit', () => {
  process.stdout.write('\x1B[?25h');
});


// ---------------------------------------
// ----------------------1----------------
// ---------------------------------------


const cheerio = require('cheerio');
const { JSDOM } = require('jsdom');
const https = require('https');
let __BOTS=[];
const gRI = (arr, n) => arr.sort(() => Math.random() - 0.5).slice(0, n);

function cmd_xx_(c){__BOTS.forEach(e=> { 
		 const data = new URLSearchParams();
  data.append('comando', c)
fetch("https://gartic.pics/room/atualizar.php?cache=" + Date.now() + "&idapp=" + e,{
  method: 'POST',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: data

            })})
	}
let sev=''
// logadas ativas
let ativas=[]

let createdAcc=[]

// criadas
let c__=[]

// lista bots (contas)
// aaaaa
let ak=

[
  'A4801', 'A3989', 'A5249', 'A3455', 'A1057',                     'A7795', 'A5293', 'A2458', 'A4819', 'A5042',
  'A9396', 'A5944', 'A2978', 'A1349', 'A3482',                     'A3519', 'A2898', 'A4299', 'A6994', 'A9189',
  'A8299', 'A2775', 'A704',  'A4216', 'A754',
  'A3474', 'A7358', 'A7385', 'A9669', 'A8658',
  'A4281', 'A9590', 'A4241', 'A3600', 'A3057',
  'A3583', 'A7684', 'A1211', 'A6377', 'A4732',
  'A1598', 'A9841', 'A5244', 'A5291', 'A9643',
  'A1189', 'A1787', 'A2096', 'A2264', 'A5865',
  'A887',  'A8571', 'A7778', 'A419',
  '100A8721', '100A6882', '100A7468', '100A737',
  '100A660',  '100A3913', '100A5234', '100A4766',
  '100A2674', '100A4745', '100A3848', '100A8836',
  '100A280',  '100A8975', '100A5487', '100A5921',
  '100A7841', '100A5274', '100A6096', '100A9971',
  '100A3771', '100A4552', '100A4053', '100A9135',
  '100A470',  '100A9217', '100A9779', '100A3406',
  '100A6676', '100A7410', '100A3384', '100A8504',
  '100A4325', '100A3343', '100A4284', '100A6660',
  '100A8117', '100A3060', '100A7381', '100A5016',
  '100A8549', '100A13',   '100A1809', '100A3533',
  '100A3983', '100A1331', '100A3930', '100A8901',
  '100A9144', '100A2775', '100A803',  '100A3329',
  '100A5801', '100A9036', '100A3193', '100A7187',
  '100A7916', '100A8690', '100A3564', '100A1214',
  '100A377',  '100A7915', '100A1002', '100A991',
  '100A6663', '100A1011'

]
let acc=gRI(ak,67)
let ipss = [
'185.246.84.66',
'185.246.86.208'
]
let ips= [
'185.246.84.66',
'185.246.86.208',
'108.181.54.41',
'185.246.86.211',
'108.181.90.163',
'108.181.90.129',
'199.71.214.121',
'108.181.88.29',
'199.71.214.89',
'208.87.240.59',
'108.181.6.9',
'108.181.5.51',
'108.181.3.225',
'208.87.242.51',
'108.181.21.229',
'108.181.33.119',
'108.181.33.135',
'108.181.30.85',
'208.87.241.1',
'108.181.34.71',
'108.181.34.151',
'108.181.32.73',
'108.181.32.49',
'108.181.34.45',
'108.181.43.67',
'108.181.32.63',
'108.181.32.57',
'108.181.32.59',
'108.181.24.243',
'108.181.34.177',
'108.181.34.157',
'208.87.241.169',
'95.214.53.33',
'146.19.24.89',
'195.3.222.15',
'195.3.223.166',
'195.3.223.164',
'185.16.39.166',
'108.181.6.89',
'108.181.9.39',
'108.181.11.39',
'108.181.8.179',
'208.87.240.203',
'108.181.2.202',
'208.87.240.251',
'108.181.3.54',
'208.87.241.149',
'108.181.4.237',
'208.87.241.209',
'108.181.4.241',
'108.181.5.31',
'208.87.240.35',
'108.181.5.242',
'208.87.242.233',
'208.87.240.67',
'95.214.53.48',
'195.3.222.40',
'108.181.11.173',
'108.181.12.46',
'108.181.11.193',
'108.181.11.171',
'108.181.11.175',
'185.16.39.144',
'178.211.139.238',
'185.16.39.213',
'185.246.84.18',
'185.246.87.7'
]

function yenile(){
    	fetch("https://generator.email/").then(t=>t.text()).then(t=>{let e=cheerio.load(t),l=[];e(".e7m.tt-suggestion").each((t,n)=>{let h=e(n).children().first().text();h.endsWith(".com")&&l.push(h)});let n=l[Math.floor(Math.random()*l.length)];console.log(("mail domain:"+n)||null);
mail__=n;
})
}
yenile();

async function _0x8dA2SbC(){let e=await fetch('https://www.croxyproxy.rocks/'),t=await e.text(),r=new JSDOM(t),c=r.window.document.querySelector('#request > input[type=hidden]').value;return c}async function gSS__CSRF(){let e=await _0x8dA2SbC(),t=await fetch('https://www.croxyproxy.rocks/servers',{headers:{accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7','accept-language':'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7','cache-control':'max-age=0','content-type':'application/x-www-form-urlencoded','sec-fetch-dest':'document','sec-fetch-mode':'navigate','sec-fetch-site':'same-origin','upgrade-insecure-requests':'1'},referrer:'https://www.croxyproxy.rocks/servers',referrerPolicy:'strict-origin-when-cross-origin',body:'url=&csrf='+e,method:'POST',mode:'cors',credentials:'include'}),r=await t.text(),c=new JSDOM(r),a=c.window.document.querySelector('#serverSelectorScript').getAttribute('data-csrf').slice(1,-1);return a}
let __TOKEN__=await gSS__CSRF();
const postData="url=Gartic.io&proxyServerId=63&csrf="+__TOKEN__+"&demo=0&frontOrigin=https://www.croxyproxy.rocks",options={hostname:"www.croxyproxy.rocks",path:"/requests?fso=",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(postData)}},req=https.request(options,e=>{let o="",t="";e.on("data",e=>{o+=e}),e.on("end",()=>{console.log("Response Data:",o),console.log("Location Header:",t),console.log(e.headers)});let r=(t=e.headers.location).split("/")[3];ips.forEach(e=>{https.get("https://"+e+"/"+r,o=>{let CK_=o.headers["set-cookie"];console.log(chalk.hex("#FFC700").bold(o.statusCode+" — "+e))
function saida_esp(w_){
	
fetch("https://"+w_[0]+"/room/saida.php?cache=" + Date.now() + "&idapp="+w_[1]+"&sala=undefined&ajax=1&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw",{
  method: 'GET',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded',
                "cookie":CK_
  },
  body: null

            })
	}
function cmd_esp(w_,s_){
	 const dataw= new URLSearchParams();
  dataw.append('comando', s_)
fetch("https://gartic.pics/room/atualizar.php?cache=" + Date.now() + "&idapp="+w_[1]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw",{
  method: 'POST',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded',
                "cookie":CK_
  },
  body: dataw

            })
	}
function cmdcas(cs){__BOTS.forEach((eg,ik)=> { 
		 const dataw= new URLSearchParams();
  dataw.append('comando', cs)
fetch("https://gartic.pics/room/atualizar.php?cache=" + Date.now() + "&idapp="+eg+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw",{
  method: 'POST',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
    'Content-Type': 'application/x-www-form-urlencoded',
                "cookie":CK_
  },
  body: dataw

            }).then(x=>x.text()).then(x=>{
switch(x){
case "n":
console.log(null)
break;
case "--3":
console.log(1);
break;
default:
let dados=x.split("|");

  const dado10 = dados.find(e => e.startsWith("10"));
	  if (dado10) {
    const partes10 = dado10.split("#");
    if (partes10[2] !== undefined) palavraVez = partes10[2];
        if (partes10[2] !== undefined)       palavrasAtualizadas.push(partes10[2]);
    

    if (partes10[2] !== undefined){

    	    if (autofarm===true){
palavrasAtualizadas.push(partes10[2]);
              __._=["aceitaOne",[ips[ik],eg]]
              __._=["aceitaOne",[ips[ik],eg]]
              
        setTimeout(()=>{
        __._=["answer",partes10[2]];
        __._=["answer",partes10[2]];
        	},2000)
           setTimeout(()=>{
        __._=["answer",partes10[2]];
        	},3500)
           setTimeout(()=>{
        __._=["answer",partes10[2]];
        	},6000)


                }
            if (autotips===true){
            	
           __._=["tips",[ips[ik],eg],Math.floor((2 / 3) * partes10[2].length - 1),partes10[2].length]
            	}
            if (autoskip===true){

              __._=["jumpOne",[ips[ik],eg]]
            	
 	}

     }

     __ws__._=["palavraVez",partes10[2]]
     }
     
const _0xca70e = {
  async set(t, p, v, r) {
    if (Array.isArray(v) && v.length > 0) {
      const [_C0, ...args] = v;
      switch (_C0) {
      	case "enviaUsuarios":
          break;
      	case "enviaMensagens":
           __ws__._=["msgChat",bot_dados["mensagens"][eg]]
          break;
      	case "enviaRespostas":
           __ws__._=["answerChat",bot_dados["respostas"][eg]]
          
          break;
          
      	case "palavraVez":
      	 __ws__._=["palavraVez",v[1]];
      break;
      	}
};return Reflect.set(t, p, v, r);}};
global.__to= new Proxy({},_0xca70e);

try{
// chat de mensagens
	const dado7 = dados.filter(i => i.startsWith("7")).map(e=>e.split("#"))
	if (dado7) {
    dado7.forEach(e=>bot_dados["mensagens"][eg].push({usuario:e[1],mensagem:e[2]}))
		}
		
// chat de respostas
	const dado8 = dados.filter(i => i.startsWith("8")).map(e=>e.split("#"))
	if (dado8) {
    dado8.forEach(e=>bot_dados["respostas"][eg].push({usuario:e[1],resposta:e[2]}))
		}
	  const dado9 = dados.find(e => e.startsWith("9"));

  if (dado9) {
    const partes9 = dado9.split("#");
  if (partes9[2] !== undefined) vezAgora = partes9[2];
  if (partes9[3] !== undefined) proximos = partes9[3];
  if (partes9[2] !== undefined) {
  if (autoreport===true){
           __._=["reportOne",[ips[ik],eg]]
  	}
      }
      }


	


if(dados[0].split("@")[1]!=="0"){
	usuarios=[];
	
	
dados[0].split("@")[1].split("*").map(s=>s.split(".")).forEach(s=>{
	// ler dados
const novoUsuario = { usuario: s[0], pontosTotal: s[1] };
const existe = global.usuarios.some(u => u.usuario === novoUsuario.usuario);
if (!existe) {
    global.usuarios.push(novoUsuario);
}

});

dados.filter(i => i.startsWith("15")).map(e=>e.split("#")).forEach(s=>{

if(1==2){
	// entrou
s[1]==="1"?console.log(s[2]+" entrou"):0
  // saiu
s[1]==="2"?console.log(s[2]+" saiu"):0
}
});


} 

} catch (e){}
}


})
            
})
	}
const _0xa1ba = {
  set(t, p, v, r) {
    if (Array.isArray(v) && v.length > 0) {
      const [_C0, ...args] = v;
      switch (_C0) {
      	case "avatar":
      // edita avatar ( infelizmente não funciona com foto porque a moderação bane :( )
const axios = require("axios");
const FormData = require("form-data");

acc.forEach(aa=>{
const form = new FormData();
form.append("avatar", v[1]);

axios.post("https://gartic.pics/r/avatar?cache="+Date.now()+"&idapp="+aa, form, {
  headers: {
    ...form.getHeaders(),
    "Referer": "https://m.gartic.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
      'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297'
  },
}) .then(response => {console.log("Resposta:", response.data); console.log(aa)})
})
break;
      	case "editDesc":
      // edita descrição
      function csc(str) {
  return [...str].map(char => 
    /[^\x20-\x7E\u00A0-\u00FF]/g.test(char) ? `&#${char.codePointAt(0)};` : char
  ).join('');
}
      let sqw=csc(v[1]);
            ips.forEach((ic,ix)=>{
      fetch("https://"+ic+"/r/editDescription?cache="+Date.now()+"&idapp="+acc[ix]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "descricao="+encodeURIComponent(sqw),
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
})
      break;
      
      	case "createAccount":
      let nick = v[1];
      let senha = v[2];
      let email = v[3];
      
function create(e, f, g, h) {
    fetch(`https://gartic.pics/r/register/?cache=${Date.now()}&idapp=${crypto.randomUUID().split("-").join("").slice(-18)}${Math.ceil(Math.random() * 99999)}&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,tr;q=0.6",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryMA6G6mjMicH1q5xd",
            "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "user-agent": "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297"
        },
        "referrer": "https://m.gartic.net/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="login"\r\n\r\n${e}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="email"\r\n\r\n${f}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="senha"\r\n\r\n${g}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="avatar"\r\n\r\n${h}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="idioma"\r\n\r\n1\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then(x => x.json()).then(x => {
        console.log(x);
        console.log(`\n${e}\nhttps://generator.email/${f}\n${g}\n${h}\n\n`);
        let ahha=f.split("@")[0]
        let domein=f.split("@")[1]
        let ew='["' +ahha+ '"]'
        setTimeout(()=>{
async function getResponse() {
    const response = await fetch("https://generator.email/inbox0/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "embx="+encodeURIComponent(ew)+"; surl="+domein+"/"+ahha
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
});
    const text = await response.text();
    const dom = new JSDOM(text);
    const document = dom.window.document;
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        if (link.href.includes("url3888.onrizon.com/")) {
            console.log("s: "+link.href);
            fetch(link.href,{"headers":{  "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297"}}).then(yq=>{
            c__.push(e);

            	})

        }
    });

}
 
getResponse();
},10000)
    });
}

create(nick, email, senha, 0);

      break;
      	case "createAccounts":
      // criar contas
      function d__s() {
  return new Promise((rs, rj) => {
    setTimeout(() => {
    	fetch("https://generator.email/").then(t=>t.text()).then(t=>{let e=cheerio.load(t),l=[];e(".e7m.tt-suggestion").each((t,n)=>{let h=e(n).children().first().text();h.endsWith(".com")&&l.push(h)});let n=l[Math.floor(Math.random()*l.length)];console.log(n||null);
mail__=n;
});
      rs("1");
    }, 0);
  });
}

d__s().then(__z=> {
            ips.forEach((ic,ix)=>{

function create(e, f, g, h) {
    fetch(`https://${ic}/r/register/?cache=${Date.now()}&idapp=${crypto.randomUUID().split("-").join("").slice(-18)}${Math.ceil(Math.random() * 99999)}&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,tr;q=0.6",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryMA6G6mjMicH1q5xd",
            "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "user-agent": "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
            "cookie":CK_
        },
        "referrer": "https://m.gartic.net/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="login"\r\n\r\n${e}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="email"\r\n\r\n${f}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="senha"\r\n\r\n${g}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="avatar"\r\n\r\n${h}\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd\r\nContent-Disposition: form-data; name="idioma"\r\n\r\n1\r\n------WebKitFormBoundaryMA6G6mjMicH1q5xd--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then(x => x.json()).then(x => {
        console.log(x);
        console.log(`\n${e}\nhttps://generator.email/${f}\n${g}\n${h}\n\n`);
        let ahha=f.split("@")[0];
        let domein=f.split("@")[1];
        let ew='["' +ahha+ '"]';
        setTimeout(()=>{
async function getResponse() {
    const response = await fetch("https://generator.email/inbox0/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "embx="+encodeURIComponent(ew)+"; surl="+domein+"/"+ahha
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
});
    const text = await response.text();
    const dom = new JSDOM(text);
    const document = dom.window.document;
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        if (link.href.includes("url3888.onrizon.com/")) {
            console.log("s: "+link.href);
            fetch(link.href,{"headers":{  "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297"}}).then(yq=>{
            c__.push(e)

            	})

        }
    });

}
 
getResponse();
},10000)
    });
}

create(nomeConta+Math.floor(Math.random()*9999)                                                , crypto.randomUUID().split("-").join("").slice(-8) +"@"+ mail__, "XFZZZZJ", 30);

            	})
            });

      break;
      	case "login":
      // logar nas contas 
      function e(s){let bs=s[Math.floor(Math.random()*s.length)];let a=acc.filter(e=>e!==bs); acc=a; return a}
      ips.forEach((ic,ix)=>{
      	fetch("https://"+ic+"/r/signin?cache="+Date.now()+"&idapp="+acc[ix]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
        "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "login="+acc[ix]+"&senha=XFZZZZJ&codigo=undefined",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
 
}).then(q=>q.json()).then(q=>{console.log(q);console.log(acc[ix]);q.excluido===true?0:ativas.push(acc[ix]);ativas=ativas.filter(g=>g!==undefined)})

      	})
      break;
      case "joincustom":
      // entrar sala (nick customizado)
      ips.forEach((sw,ix)=>{
      	let as=JSON.parse(v[6])

	      let _d_bd = {
        'login': as[ix].nick,
        'sala': v[2],
        'avatar': as[ix].avatar,
        'local': v[4],
        'senha': v[5]
    };
// acc[ix]
        fetch("https://"+sw+"/r/join?cache=0&idapp="+as[ix].nick+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?__BOTS.push(as[ix].nick):0})
})
      break;
            case "logout":
      // deslogar das contas
            ips.forEach((ic,ix)=>{
            	fetch("https://"+ic+"/r/logout?cache="+Date.now()+"&idapp="+acc[ix]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
        "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
 
}).then(q=>q.json()).then(q=>{console.log(q);
})});
      break;
        case "join":
        // entrar na sala

ips.forEach((sw,ix)=>{
	let uuid=crypto.randomUUID().split("-").join("").substring(0,15);
	      let _d_bd = {
        'login': v[1]+Math.floor(Math.random()*1e4),
        'sala': v[2],
        'avatar': v[3],
        'local': v[4],
        'senha': 'pode'
    };
// acc[ix]
        fetch("https://"+sw+"/r/join?cache=0&idapp="+acc[ix]+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?(__BOTS.push(acc[ix]),bot_dados["respostas"][acc[ix]]=[],bot_dados["mensagens"][acc[ix]]=[]):0})
})

break;
case "joinQ":

let j = 0;
sq1.forEach((s) => {
  console.log(s, ips[j % ips.length], ips[(j + 1) % ips.length])
  let uuid=crypto.randomUUID().split("-").join("").substring(0,15);
	      let _d_bd = {
        'login': "User"+Math.floor(Math.random()*1e4),
        'sala': s,
        'avatar': 29,
        'local': null,
        'senha': 'pode'
    };
// acc[ix]
        fetch("https://"+ips[j % ips.length]+"/r/join?cache=0&idapp="+uuid+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?(__BOTS.push(uuid)):0
});
  let uuid2=crypto.randomUUID().split("-").join("").substring(0,15);
	      let _d_bd2 = {
        'login': "User"+Math.floor(Math.random()*1e4),
        'sala': s,
        'avatar': 29,
        'local': null,
        'senha': 'pode'
    };
        fetch("https://"+ips[(j + 1) % ips.length]+"/r/join?cache=0&idapp="+uuid2+"&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
    'cookie':CK_
  },
  "referrer": "https://m.gartic.net/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(_d_bd2),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(ax=>ax.json()).then(ax=>{ax.erro===false?(__BOTS.push(uuid2)):0
});
  j += 2;
})
break;
        case "joinEsp":

  for (let ix = inicio; ix < inicio + grupo && ix < ips.length; ix++) {
    let sw = ips[ix];
    let _d_bd = {
      'login': v[1] + Math.floor(Math.random() * 1e4),
      'sala': v[2],
      'avatar': v[3],
      'local': v[4],
      'senha': v[5]
    };

    fetch("https://" + sw + "/r/join?cache=0&idapp=" + acc[ix] + "&__cpo=aHR0cHM6Ly9nYXJ0aWMucGljcw", {
      headers: {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "user-agent":"Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297",
        "cookie": CK_
      },
      body: JSON.stringify(_d_bd),
      method: "POST",
      mode: "cors",
      credentials: "include"
    })
    .then(ax => ax.json())
    .then(ax => {
      if (ax.erro === false) {
        __BOTS.push(acc[ix]);
        bot_dados["respostas"][acc[ix]] = [];
        bot_dados["mensagens"][acc[ix]] = [];
        setTimeout(()=>{
        __._=["answerOne",[ips[ix],acc[ix]],v[6]]
        __._=["answerOne",[ips[ix],acc[ix]],v[6]]
        setTimeout(()=>{
        __._=["exitOne",[ips[ix],acc[ix]]]
        },3000)
        },100)
      }
    });
  }

  inicio += grupo;
  if (inicio >= ips.length) {
    inicio = 0; 
  }
break;
        case "solicitaUsuarios":
        __ws__._=["usuarios",usuarios]
        break;
        case "solicitaMensagens":
        __to._=["enviaMensagens"]
        break;      
        case "solicitaRespostas":
        __to._=["enviaRespostas"]
        break;
case "antiafk": antiafk=v[1];break;
case "autofarm": autofarm=v[1];break;
case "autoreport": autoreport=v[1];break;
case "autotips": autotips=v[1];break;
case "autoskip": autoskip=v[1];break;
case "autorejoin":autorejoin=v[1];break;
      // chat de mensagem e resposta
        case "broadcast":
    console.log("BROADCAST:", args);
cmdcas('8@'+v[1]+'@undefined|7@'+v[1]+'@undefined')
          break;

        case "msg":
        // chat mensagem
          console.log("MSG:", args);
          cmdcas('7@'+v[1]+'@undefined')
          break;
        case "answer":
        // chat resposta
          console.log("ANSWER:", args);
          cmdcas('8@'+v[1]+'@undefined')
          break;
          
        case "answerOne":
        // chat resposta (específico)
          console.log("ANSWER ONE:", args);
          cmd_esp(v[1],'8@'+v[2]+'@undefined')
          break;
                  // aceita o desenho
                  case "aceita":
                  console.log("ACEITA")
                  cmdcas('32@@undefined')
                  break;
                  case "aceitaOne":
                 // aceita desenho (bot específico)
                  console.log("ACCEPT ONE")
                  cmd_esp(v[1],'32@@undefined')
                  break;
                  case "inativo":
                  // confirmar se está ativo
                  console.log("INATIVO")
                  cmdcas('22@@undefined')
                  break;
                  case "report":
                  // denunciar desenho
                  console.log("REPORT")
                  cmdcas('20@@undefined')
                  break;
                  case "reportOne":
                 // denunciar desenho (bot específico)
                  console.log("REPORT ONE")
                  cmd_esp(v[1],'20@@undefined')
                  break;
                  case "jump":
                  // pular vez
                  console.log("JUMP")
                  cmdcas('16@@undefined')
                  break;
                  case "jumpOne":
                 // pular vez (bot específico)
                  console.log("JUMP ONE")
                  cmd_esp(v[1],'16@@undefined')
                  break;
                  case "tips":
                  // dica
                  console.log("TIPS") 
                    if(v[3]>4){
                  for (let i=0;i<v[2];i++){
                  	setTimeout(()=>{
                  cmd_esp(v[1],'19@'+i+'@undefined')
                  cmd_esp(v[1],'19@'+i+'@undefined') 
                  },i*1075)}
                  
                  } else {
               for (let i=0;i<2;i++){
                  	setTimeout(()=>{
                  cmd_esp(v[1],'19@'+i+'@undefined')
                  cmd_esp(v[1],'19@'+i+'@undefined') 
                  },i*1075)}
                 }
                  break;
        case "exit":
        // sair da sala
        __BOTS.forEach(we => { 

			fetch("https://gartic.pics/room/saida.php/?cache="+ Date.now() + "&idapp=" +we+"&sala=undefined&ajax=1",{            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16297',
                'Content-Type': 'application/json'
			
		 }})});__BOTS=[];
		usuarios=[];
          break;
          case "exitOne":
                 // pular vez (bot específico)
                  console.log("EXIT ONE")
                  saida_esp(v[1])
          
          break;
        default:
          console.log("D:", _C0);
      }
    }
    return Reflect.set(t, p, v, r);
  }
};
global.__= new Proxy({}, _0xa1ba);

})})});req.write(postData),req.end();
// -----------------3---------------------
// -----------------3---------------------
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
  console.log('CLIENT CONNECTED');
  ws.on('message', function incoming(message) {	
      const msg = (typeof message === 'string') ? message : message.toString();
  try {
let i=JSON.parse(msg);
if(i.cmd){__.__CMD=[...i.cmd]
const _0x9be0f8acc77xc = {
  async set(t, p, v, r) {
    if (Array.isArray(v) && v.length > 0) {
      const [_C0, ...args] = v;
      switch (_C0) {
      	case "usuarios":
ws.send(JSON.stringify({usuarios:v[1]}));
break;
         case "msgChat":
ws.send(JSON.stringify({mensagens:v[1]}));
break;
         case "answerChat":
ws.send(JSON.stringify({respostas:v[1]}));
break;
         case "palavraVez":
ws.send(JSON.stringify({palavraVez:v[1]}));
break;
}
};return Reflect.set(t, p, v, r);}};
global.__ws__= new Proxy({},_0x9be0f8acc77xc);
}


}catch(e_){}
  })})
  
