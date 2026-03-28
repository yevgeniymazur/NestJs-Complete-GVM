"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceGeneratedService = void 0;
const common_1 = require("@nestjs/common");
let ServiceGeneratedService = class ServiceGeneratedService {
    getWarehouseView() {
        return [
            {
                id: 100,
                name: 'Phil Duncan',
                value: 340,
                internalCode: 'PMP-2219',
                supplier: 'Fluid Systems Inc',
                warehouseLocation: 'Aisle 7',
                lastAudit: '2024-02-03',
            },
            {
                id: 101,
                name: 'Industrial Drill',
                value: 120,
                internalCode: 'DRL-7782',
                supplier: 'ACME Tools',
                warehouseLocation: 'Aisle 4',
                lastAudit: '2024-01-12',
            },
            {
                id: 102,
                name: 'Hydraulic Pump',
                value: 340,
                internalCode: 'PMP-2219',
                supplier: 'Fluid Systems Inc',
                warehouseLocation: 'Aisle 7',
                lastAudit: '2024-02-03',
            },
        ];
    }
};
exports.ServiceGeneratedService = ServiceGeneratedService;
exports.ServiceGeneratedService = ServiceGeneratedService = __decorate([
    (0, common_1.Injectable)()
], ServiceGeneratedService);
//# sourceMappingURL=service-generated.service.js.map