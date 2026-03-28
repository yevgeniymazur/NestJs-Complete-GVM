import { ServiceGeneratedService } from './service-generated.service';
export declare class ServiceGeneratedController {
    private readonly serviceGeneratedService;
    constructor(serviceGeneratedService: ServiceGeneratedService);
    getWarehouseView(): {
        id: number;
        name: string;
        value: number;
        internalCode: string;
        supplier: string;
        warehouseLocation: string;
        lastAudit: string;
    }[];
}
