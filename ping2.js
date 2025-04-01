const {
  ezra
} = require("./../qadeer/ezra");
const {
  format,
  runtime
} = require('../qadeer/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');

ezra(
  {
    nomCom: 'ping2',
    categorie: 'General',
    reaction: '🚀',
    alias: ['p']
  }, async (_0xdfc3ca) => {
try {
  // System Memory Usage
  const memoryUsage = process.memoryUsage();
  
  // CPU Information
  const cpus = os.cpus();
  const totalCPU = cpus.reduce((acc, cpu) => {
    const total = Object.values(cpu.times).reduce((a, b) => a + b, 0);
    acc.total += total;
    acc.speed += cpu.speed / cpus.length;
    Object.keys(cpu.times).forEach(key => acc.times[key] += cpu.times[key]);
    return acc;
  }, {
    speed: 0,
    total: 0,
    times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
  });

  // Response Time Calculation
  const startTime = performance.now();
  const endTime = performance.now();
  const responseSpeed = (endTime - startTime).toFixed(4);

  // Stylish Response with Borders
  let response = `
╭━─━─━─[ *TOFAN MD - STATUS*

💻 *Server Info*  
┃ RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}  
┃ Uptime: ${runtime(process.uptime())}  

🚀 *Response Time*  
┃ Speed: ${responseSpeed} seconds  
┃ Latency: ${(endTime - startTime)} ms  

🛠 *NodeJS Memory Usage*  
┃ ${Object.entries(memoryUsage).map(([key, value]) => `- ${key}: ${formatp(value)}`).join("\n┃ ")}

🎛 *CPU Info*  
┃ Model: ${cpus[0].model.trim()}  
┃ Speed: ${totalCPU.speed} MHz  
┃ ${Object.entries(totalCPU.times).map(([key, value]) => `- ${key}: ${(value * 100 / totalCPU.total).toFixed(2)}%`).join("\n┃ ")}

╰━─━─━─[ *Now leave me alone, human. 😒*
`.trim();

  _0xdfc3ca.reply(response);
} catch (error) {
  await _0xdfc3ca.error(`❌ *ERROR*: ${error}\n\nCommand: mxping`, error, false);
}
});