// Field Ref taken from CSV.
// Some config settings are assumed based on the data present in CSV.

// NPM Modules
import {
    IsDate,
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    MinLength,
    MaxLength,
    Min
} from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';

// Custom Modules
import {
    Conditions,
    NumberTypes,
    QuestionsClosed,
    WarehouseCode,
    WarehouseLocation,
    WarrantyTypes
} from '../../enums';

@Entity('bangalla_product_list')
export default class DropshipTownProductListCSVTemplate extends BaseEntity {
    // COLUMNS
    @PrimaryGeneratedColumn('uuid')
    @IsNotEmpty()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    sku: string;

    @Column({ type: 'datetime' })
    @IsDate()
    @IsNotEmpty()
    creation_date: Date;

    @Column({ type: 'datetime' })
    @IsDate()
    @IsNotEmpty()
    last_updated: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Whole])
    @Min(0)
    qty: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Decimal, NumberTypes.prototype.Whole])
    @Min(0)
    price: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Decimal, NumberTypes.prototype.Whole])
    @Min(0)
    map_price: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Decimal, NumberTypes.prototype.Whole])
    @Min(0)
    shipping_cost: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    package_includes: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    description: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    condition_description: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    @IsIn([Conditions.prototype.New, Conditions.prototype.OpenBox])
    condition: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    category_name?: string;

    @Column()
    @IsString()
    @IsUrl()
    image_1_url: string;

    @Column()
    @IsString()
    @IsUrl()
    image_2_url: string;

    @Column()
    @IsString()
    @IsUrl()
    image_3_url: string;

    @Column()
    @IsString()
    @IsUrl()
    image_4_url: string;

    @Column()
    @IsString()
    @IsUrl()
    image_5_url: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    manufacturer: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    model_number: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    mpn: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(14)
    upc_code: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Decimal, NumberTypes.prototype.Whole])
    @Min(0)
    package_height: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Decimal, NumberTypes.prototype.Whole])
    @Min(0)
    package_length: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Decimal, NumberTypes.prototype.Whole])
    @Min(0)
    package_width: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([NumberTypes.prototype.Decimal, NumberTypes.prototype.Whole])
    @Min(0)
    weight: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    returnable: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    @IsIn([
        WarrantyTypes.prototype.None,
        WarrantyTypes.prototype.Lifetime,
        WarrantyTypes.prototype.ThirtyDay,
        WarrantyTypes.prototype.SixtyDay,
        WarrantyTypes.prototype.NinetyDay,
        WarrantyTypes.prototype.OneYear,
        WarrantyTypes.prototype.TwoYear,
        WarrantyTypes.prototype.ThreeYear,
        WarrantyTypes.prototype.FourYear,
        WarrantyTypes.prototype.FiveYear,
        WarrantyTypes.prototype.SevenYear,
        WarrantyTypes.prototype.TenYear,
        WarrantyTypes.prototype.TwentyYear,
        WarrantyTypes.prototype.TwentyFiveYear
    ])
    warranty: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    @IsIn([
        WarehouseCode.prototype.AIP,
        WarehouseCode.prototype.CWR,
        WarehouseCode.prototype.DDS,
        WarehouseCode.prototype.DFY,
        WarehouseCode.prototype.DNH,
        WarehouseCode.prototype.FGX,
        WarehouseCode.prototype.FWN,
        WarehouseCode.prototype.KHD,
        WarehouseCode.prototype.MEGA,
        WarehouseCode.prototype.MNA,
        WarehouseCode.prototype.MPC,
        WarehouseCode.prototype.TLD,
        WarehouseCode.prototype.TWH,
        WarehouseCode.prototype.XSD
    ])
    @MinLength(3)
    @MaxLength(4)
    warehouse_code: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    @IsIn([
        WarehouseLocation.prototype.z11788,
        WarehouseLocation.prototype.z11729,
        WarehouseLocation.prototype.z17112,
        WarehouseLocation.prototype.z33513,
        WarehouseLocation.prototype.z43526,
        WarehouseLocation.prototype.z44050,
        WarehouseLocation.prototype.z63026,
        WarehouseLocation.prototype.z7726,
        WarehouseLocation.prototype.z78723,
        WarehouseLocation.prototype.z8721,
        WarehouseLocation.prototype.z90640,
        WarehouseLocation.prototype.z91350,
        WarehouseLocation.prototype.z91789,
        WarehouseLocation.prototype.z97202
    ])
    @MinLength(4)
    @MaxLength(5)
    warehouse_location: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    @IsIn([QuestionsClosed.prototype.No, QuestionsClosed.prototype.Yes])
    hot_item: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    @IsIn([QuestionsClosed.prototype.No, QuestionsClosed.prototype.Yes])
    new_arrival: string;
}
