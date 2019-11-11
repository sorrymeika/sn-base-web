const { registerConsumer } = require('sonorpc');

const baseRPC = registerConsumer({
    // 服务提供者名称
    providerName: 'base',
    registry: {
        port: 3006
    }
});

module.exports = {
    get baseRPC() {
        return baseRPC;
    },
};