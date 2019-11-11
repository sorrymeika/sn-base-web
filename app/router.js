module.exports = app => {
    const { router, controller } = app;
    router.post('/address/getProvinces', controller.address.getProvinces);
    router.post('/address/getCitiesByProvinceId', controller.address.getCitiesByProvinceId);
    router.post('/address/getDistrictsByCityId', controller.address.getDistrictsByCityId);
    router.post('/address/getCitiesByProvinceCode', controller.address.getCitiesByProvinceCode);
    router.post('/address/getDistrictsByCityCode', controller.address.getDistrictsByCityCode);
};