export async function runEveryMinute({ config }) {
    await captureHeartbeat()
 }
 
 export async function setupPlugin() {
     await captureHeartbeat()
 }
 
 async function captureHeartbeat() { 
     await posthog.capture('heartbeat')
 }