const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint:'127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'L8owcnhO7GHdwXx6GF2Z',
    secretKey: '9w4MIRlVcEMb3ek2faXH36w1jLTIMycqpifRueH0'
});

module.exports = minioClient;