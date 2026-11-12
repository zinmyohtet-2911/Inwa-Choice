import {React, useState} from "react";


export default function Display(){

    const devices = [
       {type: "Phone",
        model : "Xiaomi 17T Pro",
        processor : "MediaTek Dimensity 9500",
        battery : 7000,
        batteryType : "Silicon-carbon battery",
        charging: 100,
        isWirelessCharge : true,
        ip : 68,
        color : "Black or Deep Violet or Deep Blue"
       },
       {type: "Phone",
        model : "Redmi Note 17 Pro Max 5G",
        processor : "Powerful Snapdragon 6 Gen 5",
        battery : 10000,
        batteryType : "Silicon-carbon battery",
        charging: 100,
        isWirelessCharge : false,
        ip : 69,
        color : "Black or Green or Purple or Cloud Blush"
       },
       {type: "Phone",
        model : "POCO F9 Ultra",
        processor : "Snapdragon 8 Elite Gen5 Mobile Platform",
        battery : 8050,
        batteryType : "Data is not avaiable",
        charging: 100,
        isWirelessCharge : true,
        ip : 68,
        color : "Black or Dark Cherry"
       },
       {type: "Tablet",
        model : "Xiaomi Pad 8 Pro",
        processor : "Snapdragon 8 Elite Mobile Platform",
        battery : 9200,
        batteryType : "Data is not available",
        charging: 67,
        isWirelessCharge : false,
        ip : "Data is not available",
        color : "Pink Green or Blue or Gray"
       },
       {type: "Tablet",
        model : "Xiaomi Pad 6S Pro",
        processor : "Snapdragon 8 Gen 2 Mobile Platform",
        battery : 10000,
        batteryType : "Data is not available",
        charging: 120,
        isWirelessCharge : false,
        ip : "Data is not available",
        color : "Graphite Gray"
       },
       {type: "Tablet",
        model : "Redmi Pad 2 Pro 5G",
        processor : "Snapdragon 7s Gen4 Mobile Platform",
        battery : 12000,
        batteryType : "Data is not available",
        charging: 33,
        isWirelessCharge : false,
        ip : "Data is not available",
        color : "Silver or Graphite Gray"
       },
       {type: "Laptop",
        model : "Lenovo ThinkPad X1 Carbon Gen 12",
        processor : "Intel Core Ultra 7 165H",
        battery : 15000,
        batteryType : "Lithium-Polymer",
        charging: 65,
        isWirelessCharge : false,
        ip : "Data is not available",
        color : "Eclipse Black"
       },
       {type: "Laptop",
        model : "Oukitel RG14-P",
        processor : "Intel Core 7 150U",
        battery : 15000,
        batteryType : "Data is not available.",
        charging: 10,
        isWirelessCharge : false,
        ip : 68,
        color : "Eclipse Black"
       },
       
      
    ]

    const [filter,setFilter]= useState("");
   function handleSelect(e){
    setFilter(e.target.value)
   }

   let filteredDevices = devices.filter(device=>device.type===filter || filter ==="");
 
    return(
   <div className="display">
    <div className="display-filter-container">
        <select className="display-filter" name="filter" onChange={handleSelect} value={filter}>
            <option value="" name="">--Select--</option>
            <option value="Phone" name="phone">Phone</option>
            <option value="Tablet" name="tablet">Tablet</option>
            <option value="Laptop" name="laptop">Laptop</option>
        </select>
    </div>
      <div className="display__grid">
        {filteredDevices.map((device) => (
          <div className="display__card" key={device.model}>
            <span className="display__type">{device.type}</span>
            <h5 className="display__model">{device.model}</h5>
            <h6 className="display__processor">
              {device.processor} is used.
            </h6>
            <p className="display__info">
              Battery capacity is {device.battery} mAh
            </p>
            <p className="display__info">Support {device.charging}W</p>
            <p className="display__info">Available color: {device.color}</p>
          </div>
        ))}
      </div>
    </div>
    )
}