import { exec } from 'child_process';
import * as killPort from 'kill-port';

export default function (on, config) {
  on('task', {
    async restartServer() {
      try {
        await killPort('3333');
      } catch (e) {
        console.log('server not running');
      }
      const serverProcess = exec('npx nx serve clap-counter-server');
      return new Promise<void>((resolve, reject) => {
        serverProcess?.stdout?.on('data', (data) => {
          console.log(data.toString());
          const output = data.toString();
          if (output.includes('Listening at http://localhost:3333')) {
            resolve(null);
          }
        });
      });
    },
  });
}
