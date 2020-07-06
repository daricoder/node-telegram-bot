// Allocating os module 
const os = require('os'); 
  
// Printing os.freemem() value 
var free_memory = os.freemem(); 
var free_mem_in_kb = free_memory/1024; 
var free_mem_in_mb = free_mem_in_kb/1024; 
var free_mem_in_gb = free_mem_in_mb/1024; 
   
free_mem_in_kb = Math.floor(free_mem_in_kb); 
free_mem_in_mb = Math.floor(free_mem_in_mb); 
free_mem_in_gb = Math.floor(free_mem_in_gb); 
   
free_mem_in_mb = free_mem_in_mb%1024; 
free_mem_in_kb = free_mem_in_kb%1024; 
free_memory = free_memory%1024; 

var total_mem = os.totalmem();
var total_mem_kb = total_mem/1024;
var total_mem_mb = total_mem_kb/1024;
var total_mem_gb = total_mem_mb/1024;

total_mem_gb = Math.floor(total_mem_gb); 
  
// console.log("Free memory: " + free_mem_in_gb + "GB "
//       + free_mem_in_mb + "MB " + free_mem_in_kb 
//       + "KB and " + free_memory + "Bytes"); 


module.exports = {
    FREE_MEM : free_mem_in_gb,
    TOTAL_MEM: total_mem_gb
};