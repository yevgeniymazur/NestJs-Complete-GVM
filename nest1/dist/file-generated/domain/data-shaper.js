"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataShaper = void 0;
class DataShaper {
    shape(rawData, view) {
        switch (view) {
            case 'customer':
                return rawData.map(item => ({
                    id: item.id,
                    label: item.name,
                    value: item.value,
                    studentName: 'Yevgeniy Mazur'
                }));
            case 'warehouse':
                return rawData.map(item => ({
                    id: item.id,
                    name: item.name,
                    internalCode: item.internalCode,
                    location: item.warehouseLocation,
                    studentName: 'Yevgeniy Mazur'
                }));
            default:
                return rawData.map(item => ({
                    id: item.id,
                    label: item.name,
                    value: item.value,
                    studentName: 'Yevgeniy Mazur'
                }));
        }
    }
}
exports.DataShaper = DataShaper;
//# sourceMappingURL=data-shaper.js.map