const { Service } = require("egg");

class AddressService extends Service {
    getProvinces() {
        return this.app.baseRPC.invoke('address.getProvinces');
    }

    getCitiesByProvinceId(provinceId) {
        return this.app.baseRPC.invoke('address.getCitiesByProvinceId', [provinceId]);
    }

    getDistrictsByCityId(cityId) {
        return this.app.baseRPC.invoke('address.getDistrictsByCityId', [cityId]);
    }

    getCitiesByProvinceCode(provinceCode) {
        return this.app.baseRPC.invoke('address.getCitiesByProvinceCode', [provinceCode]);
    }

    getDistrictsByCityCode(cityCode) {
        return this.app.baseRPC.invoke('address.getDistrictsByCityCode', [cityCode]);
    }
}

module.exports = AddressService;