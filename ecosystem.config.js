module.exports = {
  apps: [
    {
      name: 'prod',
      exec_mode: 'cluster',
      instances: 'max', // Or number of instances you want to start
      script: './.output/server/index.mjs',
      args: 'start',
      port: 3000,
      env: {
        name: 'test',
        PORT: 4000,
        NODE_ENV: 'stage',
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
    },
  ],
}
