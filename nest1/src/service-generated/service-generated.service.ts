import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceGeneratedService {
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
}