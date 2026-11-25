/* =========================================================
   5K Wholesale 商品清单配置文件
   以后加新品牌、新口味、改规格，只需修改这个文件即可
   ========================================================= */
window.CATALOG_DATA = [
  {
    id: "eliquid",
    badge: "EL",
    warrantyEnabled: true,
    title: {
      en: "E-Liquid / Flavors",
      bm: "E-Liquid / Perisa",
      zh: "E-Liquid / 烟油口味"
    },
    desc: {
      en: "Freebase & Saltnic wholesale series",
      bm: "Koleksi borong Freebase & Saltnic",
      zh: "小烟与大烟全系列批发口味"
    },
    brands: [
      {
        id: "unplug",
        name: "UNPLUG",
        desc: "15ml / 30ml · Saltnic & Freebase",
        products: [
          { id: "UP-01", name: "01 - MANGO", spec: "Nicotine: 3% · Freebase", inStock: true },
          { id: "UP-02", name: "02 - GRAPE", spec: "Nicotine: 3% · Freebase", inStock: true },
          { id: "UP-03", name: "03 - LYCHEE ICE", spec: "Nicotine: 3% · Freebase", inStock: false }
        ]
      }
      // 以后要加新品牌，直接复制上面 { id: "unplug", ... } 这一整块贴在这里（记得前一块末尾加逗号）
    ]
  },
  {
    id: "occ",
    badge: "OCC",
    warrantyEnabled: true,
    title: {
      en: "OCC / Cartridge",
      bm: "OCC / Katrij",
      zh: "OCC / 雾化芯与空烟弹"
    },
    desc: {
      en: "Replacement pods, cartridges & coils",
      bm: "Pod gantian, katrij & coil",
      zh: "各品牌替换空烟弹与雾化芯"
    },
    brands: [
      {
        id: "occ-main",
        name: "UNIVERSAL POD / COIL",
        desc: "0.6Ω / 0.8Ω / 1.0Ω Replacement",
        products: [
          { id: "OC-01", name: "0.6Ω MESH CARTRIDGE (3pcs/box)", spec: "3ml · Top Fill", inStock: true },
          { id: "OC-02", name: "0.8Ω MESH CARTRIDGE (3pcs/box)", spec: "3ml · Top Fill", inStock: true }
        ]
      }
    ]
  },
  {
    id: "device",
    badge: "DV",
    warrantyEnabled: true,
    title: {
      en: "Device (Pod / Kit Set)",
      bm: "Peranti (Pod / Kit Set)",
      zh: "Device / 主机与套装"
    },
    desc: {
      en: "Pod systems, devices & starter kit sets",
      bm: "Sistem pod, peranti & set permulaan",
      zh: "Pod 主机、杆子与完整套装"
    },
    brands: [
      {
        id: "dev-main",
        name: "5K STARTER KIT",
        desc: "Type-C Fast Charge · Aluminum Alloy",
        products: [
          { id: "DV-01", name: "PRO POD DEVICE - OBSIDIAN BLACK", spec: "1000mAh · Kit Set", inStock: true },
          { id: "DV-02", name: "PRO POD DEVICE - CHAMPAGNE GOLD", spec: "1000mAh · Kit Set", inStock: true }
        ]
      }
    ]
  }
];
