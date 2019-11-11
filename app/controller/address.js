const { Controller } = require("egg");

class AddressController extends Controller {
    async getProvinces() {
        const { ctx } = this;
        const result = await ctx.service.address.getProvinces();
        ctx.body = result;
    }

    async getCitiesByProvinceId() {
        const { ctx } = this;

        const payloadRule = {
            provinceId: { type: 'number', required: true }
        };
        ctx.validate(payloadRule);

        const {
            provinceId
        } = ctx.request.body;

        const result = await ctx.service.address.getCitiesByProvinceId(provinceId);
        ctx.body = result;
    }

    async getDistrictsByCityId() {
        const { ctx } = this;

        const payloadRule = {
            cityId: { type: 'number', required: true }
        };
        ctx.validate(payloadRule);

        const {
            cityId
        } = ctx.request.body;

        const result = await ctx.service.address.getDistrictsByCityId(cityId);
        ctx.body = result;
    }

    async getCitiesByProvinceCode() {
        const { ctx } = this;

        const payloadRule = {
            provinceCode: { type: 'string', required: true }
        };
        ctx.validate(payloadRule);

        const {
            provinceCode
        } = ctx.request.body;

        const result = await ctx.service.address.getCitiesByProvinceCode(provinceCode);
        ctx.body = result;
    }

    async getDistrictsByCityCode() {
        const { ctx } = this;

        const payloadRule = {
            cityCode: { type: 'string', required: true }
        };
        ctx.validate(payloadRule);

        const {
            cityCode
        } = ctx.request.body;

        const result = await ctx.service.address.getDistrictsByCityCode(cityCode);
        ctx.body = result;
    }
}

module.exports = AddressController;