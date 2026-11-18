/* Selected historical examples; 2030 is a labelled outlook. */
const EVOLUTION = {
  eras: [
    {
      id: "1970s",
      label: "1970s",
      range: "1970—1979",
      title: "Character you could feel.",
      subtitle: "Wedges, hot hatches & the analogue age",
      summary:
        "Compact hatchbacks changed everyday motoring, while dramatic wedges and turbocharged sports cars gave the decade a very different kind of poster car.",
      design: "Sharp edges, compact proportions and bold silhouettes.",
      technology:
        "Mechanical controls, with turbocharging finding a place in performance road cars.",
      experience:
        "A tactile connection: physical switches, visible instruments and an unmistakable engine note.",
      tags: ["Analogue controls", "Compact hatchbacks", "Wedge design"],
      cars: [
        {
          id: "golf-mk1",
          name: "Volkswagen Golf Mk1",
          year: 1974,
          detail:
            "A compact, front-wheel-drive hatchback that began a new chapter for Volkswagen. Giugiaro’s crisp shape made practical packaging part of its appeal.",
          source:
            "https://www.volkswagen-newsroom.com/en/golf-1-19741983-19467",
          feature: "The everyday revolution",
          image: "images/evolution/golf-mk1.jpg",
          credit: {
            artist: "Kazuyanagae",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:Volkswagen_Golf_1-2_(cropped).jpg",
            title: "Volkswagen_Golf_1-2_(cropped).jpg",
          },
        },
        {
          id: "countach-lp400",
          name: "Lamborghini Countach LP400",
          year: 1974,
          detail:
            "The original production Countach turned its low wedge profile and scissor doors into a new supercar vocabulary. Its LP400 form is the cleanest expression of that idea.",
          source: "https://www.lamborghini.com/en-en/history/milestones",
          feature: "The shape of a supercar",
          image: "images/evolution/countach-lp400.jpg",
          credit: {
            artist: "Alexander Migl",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:Lamborghini_Countach_LP400_Periscopio_(1976)_Auto_Zuerich_2021_IMG_0460.jpg",
            title:
              "Lamborghini Countach LP400 Periscopio (1976) Auto Zuerich 2021 IMG 0460.jpg",
          },
        },
        {
          id: "porsche-930",
          name: "Porsche 911 Turbo (930)",
          year: 1975,
          detail:
            "The first production 911 Turbo combined the familiar rear-engined silhouette with turbocharged performance. Wide arches and a prominent rear spoiler made the change visible.",
          source:
            "https://newsroom.porsche.com/en/press-kits/pfv-porsche-911-turbo-s/Porsche-911-Turbo-S--history.html",
          feature: "Turbo enters the conversation",
          image: "images/evolution/porsche-930.jpg",
          credit: {
            artist: "Mr.choppers",
            license: "CC BY-SA 3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            url: "https://commons.wikimedia.org/wiki/File:1976_Porsche_930_Turbo,_Emerald_Green_met,_front_left.jpg",
            title: "1976_Porsche_930_Turbo,_Emerald_Green_met,_front_left.jpg",
          },
        },
      ],
    },
    {
      id: "1980s",
      label: "1980s",
      range: "1980—1989",
      title: "More grip. More theatre.",
      subtitle: "Rally thinking & bedroom-wall icons",
      summary:
        "All-wheel drive brought a new approach to performance. At the same time, supercars became visual statements and a lightweight roadster offered a simpler kind of fun.",
      design: "Boxy precision meets wide, extravagant supercar bodywork.",
      technology:
        "Turbocharging and performance all-wheel drive develop alongside more familiar mechanical layouts.",
      experience:
        "Rally-inspired confidence at one end; lightweight, open-top driving at the other.",
      tags: ["All-wheel drive", "Rally influence", "Lightweight roadsters"],
      cars: [
        {
          id: "audi-quattro",
          name: "Audi quattro",
          year: 1980,
          detail:
            "Audi’s original quattro put permanent all-wheel drive into a sporty road-going coupé. Its rally story helped change expectations of what a performance car could do.",
          source:
            "https://www.audi.com/en/media-releases/history-of-the-four-rings-4093",
          feature: "Grip becomes a signature",
          image: "images/evolution/audi-quattro.jpg",
          credit: {
            artist: "Calreyn88",
            license: "CC0",
            licenseUrl:
              "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            url: "https://commons.wikimedia.org/wiki/File:1985_Audi_Quattro.jpg",
            title: "1985_Audi_Quattro.jpg",
          },
        },
        {
          id: "testarossa",
          name: "Ferrari Testarossa",
          year: 1984,
          detail:
            "A wide, mid-engined twelve-cylinder Ferrari with unmistakable side strakes. Its dramatic proportions capture the visual confidence of the decade.",
          source: "https://www.ferrari.com/en-EN/auto/testarossa",
          feature: "The poster-car era",
          image: "images/evolution/testarossa.jpg",
          credit: {
            artist: "Alexander Migl",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:Ferrari_Testarossa_IMG_3043.jpg",
            title: "Ferrari_Testarossa_IMG_3043.jpg",
          },
        },
        {
          id: "mx5-na",
          name: "Mazda MX-5 (NA)",
          year: 1989,
          detail:
            "Mazda brought the lightweight two-seat roadster back into the spotlight. Low weight and an open roof made involvement more important than outright power.",
          source:
            "https://www2.mazda.com/en/stories/craftmanship/mx-5/chronology/",
          feature: "Less weight, more feeling",
          image: "images/evolution/mx5-na.jpg",
          credit: {
            artist: "Francigf at en.wikipedia",
            license: "CC BY-SA 3.0",
            licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
            url: "https://commons.wikimedia.org/wiki/File:Eunos.jpg",
            title: "Eunos.jpg",
          },
        },
      ],
    },
    {
      id: "1990s",
      label: "1990s",
      range: "1990—1999",
      title: "Performance gets precise.",
      subtitle: "Japanese icons & understated speed",
      summary:
        "Engineering ambition took many forms: aluminium construction, sophisticated turbocharged engines and sports cars that could fit into everyday life.",
      design: "Rounder surfaces and smoother, more integrated body shapes.",
      technology:
        "Advanced materials and refined engine management support a new level of performance.",
      experience:
        "More usable sports cars, with capability that does not always announce itself.",
      tags: [
        "Aluminium construction",
        "Japanese performance",
        "Everyday usability",
      ],
      cars: [
        {
          id: "nsx-na1",
          name: "Honda NSX",
          year: 1990,
          detail:
            "An aluminium-bodied, mid-engined sports car designed around the driver. The original NSX paired ambitious engineering with an emphasis on usability.",
          source: "https://global.honda/en/heritage/episodes/1990thensx.html",
          feature: "A different supercar philosophy",
          image: "images/evolution/nsx-na1.jpg",
          credit: {
            artist: "ed g2s • talk",
            license: "CC BY-SA 3.0",
            licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
            url: "https://commons.wikimedia.org/wiki/File:Honda_NSX_red.jpg",
            title: "Honda_NSX_red.jpg",
          },
        },
        {
          id: "m3-e36",
          name: "BMW M3 (E36)",
          year: 1992,
          detail:
            "The second M3 generation moved to a six-cylinder engine beneath a restrained exterior. It made the combination of everyday practicality and high performance feel natural.",
          source:
            "https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-m3-e36-portraet.html",
          feature: "Performance, quietly expressed",
          image: "images/evolution/m3-e36.jpg",
          credit: {
            artist: "OSX",
            license: "Public domain",
            licenseUrl: "",
            url: "https://commons.wikimedia.org/wiki/File:1995-1999_BMW_M3_(E36)_coupe_02.jpg",
            title: "1995-1999 BMW M3 (E36) coupe 02.jpg",
          },
        },
        {
          id: "supra-a80",
          name: "Toyota Supra (A80)",
          year: 1993,
          detail:
            "The fourth-generation Supra gave Toyota’s grand tourer a rounded body and, in turbo versions, a twin-turbo straight-six. It became a defining Japanese performance nameplate.",
          source: "https://mag.toyota.co.uk/history-of-the-toyota-supra/",
          feature: "A new performance legend",
          image: "images/evolution/supra-a80.jpg",
          credit: {
            artist: "free photos & art",
            license: "CC BY 2.0",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
            url: "https://commons.wikimedia.org/wiki/File:1994_Toyota_Supra_(7328848890).jpg",
            title: "1994 Toyota Supra (7328848890).jpg",
          },
        },
      ],
    },
    {
      id: "2000s",
      label: "2000s",
      range: "2000—2009",
      title: "Two roads to progress.",
      subtitle: "Hybrid efficiency & the hypercar leap",
      summary:
        "The same decade that made hybrid motoring more familiar also pushed supercar engineering to new extremes. Progress did not move in only one direction.",
      design:
        "Aerodynamic forms sit alongside sculpted, engineering-led supercar shapes.",
      technology:
        "Petrol-electric hybrid systems grow more visible, while high-performance drivetrains become more ambitious.",
      experience:
        "A widening choice between reducing fuel use and pursuing extraordinary performance.",
      tags: ["Hybrid power", "Aerodynamics", "Hypercar engineering"],
      cars: [
        {
          id: "prius-xw20",
          name: "Toyota Prius (XW20)",
          year: 2003,
          detail:
            "The second Prius brought a distinctive liftback shape and an evolved petrol-electric hybrid system. Efficiency became something the body itself communicated.",
          source: "https://global.toyota/en/detail/217527",
          feature: "Efficiency finds its silhouette",
          image: "images/evolution/prius-xw20.jpg",
          credit: {
            artist: "IFCAR",
            license: "Public domain",
            licenseUrl: "",
            url: "https://commons.wikimedia.org/wiki/File:2nd_Toyota_Prius.jpg",
            title: "2nd_Toyota_Prius.jpg",
          },
        },
        {
          id: "carrera-gt",
          name: "Porsche Carrera GT",
          year: 2003,
          detail:
            "A mid-engined V10 roadster with a manual gearbox and carbon-fibre construction. It represents a very physical interpretation of advanced sports-car engineering.",
          source:
            "https://www.porsche.com/usa/accessoriesandservice/classic/models/",
          feature: "An analogue supercar peak",
          image: "images/evolution/carrera-gt.jpg",
          credit: {
            artist: "Brian Snelson from Hockley, Essex, England",
            license: "CC BY 2.0",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
            url: "https://commons.wikimedia.org/wiki/File:Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_(July_2008).jpg",
            title:
              "Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_(July_2008).jpg",
          },
        },
        {
          id: "veyron",
          name: "Bugatti Veyron 16.4",
          year: 2005,
          detail:
            "Bugatti’s W16-powered Veyron brought an extraordinary combination of power, all-wheel drive and high-speed engineering to a production road car.",
          source:
            "https://newsroom.bugatti.com/press-releases/bugatti-veyron-legends-the-modern-day-hyper-sports-car",
          feature: "The hypercar threshold",
          image: "images/evolution/veyron.jpg",
          credit: {
            artist: "M 93",
            license: "CC BY-SA 3.0 de",
            licenseUrl:
              "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
            url: "https://commons.wikimedia.org/wiki/File:Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_(1),_5._April_2012,_D%C3%BCsseldorf.jpg",
            title:
              "Bugatti_Veyron_16.4_–_Frontansicht_(1),_5._April_2012,_Düsseldorf.jpg",
          },
        },
      ],
    },
    {
      id: "2010s",
      label: "2010s",
      range: "2010—2019",
      title: "Electric becomes real.",
      subtitle: "Battery power moves into everyday life",
      summary:
        "Electric cars reached buyers in very different shapes: a family hatchback, a premium saloon and a compact city car built around a new set of possibilities.",
      design:
        "Battery platforms encourage new packaging, from familiar hatchbacks to deliberately unconventional forms.",
      technology:
        "Battery-electric drivetrains and connected interfaces become visible alternatives to combustion cars.",
      experience:
        "Quiet acceleration and charging introduce a different rhythm to owning and driving a car.",
      tags: [
        "Battery-electric driving",
        "Connected interfaces",
        "New packaging",
      ],
      cars: [
        {
          id: "leaf-ze0",
          name: "Nissan LEAF (ZE0)",
          year: 2010,
          detail:
            "The original LEAF offered battery-electric driving in a practical five-door hatchback. It put the electric-car conversation into the context of everyday journeys.",
          source: "https://global.nissannews.com/en/releases/101210-02-e",
          feature: "An electric everyday car",
          image: "images/evolution/leaf-ze0.jpg",
          credit: {
            artist: "EurovisionNim",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:2017_Nissan_LEAF_(ZE0_MY17)_hatchback_(2018-11-02)_01.jpg",
            title: "2017_Nissan_LEAF_(ZE0_MY17)_hatchback_(2018-11-02)_01.jpg",
          },
        },
        {
          id: "model-s-2012",
          name: "Tesla Model S",
          year: 2012,
          detail:
            "Tesla began Model S customer deliveries in 2012. Its electric drivetrain and large central touchscreen helped establish a different idea of the premium saloon.",
          source:
            "https://ir.tesla.com/_flysystem/s3/sec/000119312513096241/d452995d10k.html",
          feature: "The digital saloon",
          image: "images/evolution/model-s-2012.jpg",
          credit: {
            artist: "Peteratkins",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:Tesla_Model_S_(Facelift_ab_04-2016)_(cropped).jpg",
            title: "Tesla_Model_S_(Facelift_ab_04-2016)_(cropped).jpg",
          },
        },
        {
          id: "i3-2013",
          name: "BMW i3",
          year: 2013,
          detail:
            "BMW’s original i3 used a carbon-fibre passenger cell and an unconventional, compact body. Its architecture was shaped around electric urban mobility.",
          source:
            "https://www.press.bmwgroup.com/united-kingdom/article/detail/T0144135EN_GB/the-new-bmw-i3-%E2%80%93-born-to-be-electric?showMedia=photo",
          feature: "A new urban architecture",
          image: "images/evolution/i3-2013.jpg",
          credit: {
            artist: "Vauxford",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:2018_BMW_i3_facelift_(1).jpg",
            title: "2018_BMW_i3_facelift_(1).jpg",
          },
        },
      ],
    },
    {
      id: "2020s",
      label: "2020s",
      range: "2020—2029 · decade in progress",
      title: "A new design language.",
      subtitle: "Dedicated EV platforms & room to rethink",
      summary:
        "Electric vehicles expand into more sizes and uses. These early-decade examples show how dedicated platforms can change proportions, cabin space and visual identity.",
      design:
        "Pixel lighting, bold geometry and cleaner surfaces give electric models distinct identities.",
      technology:
        "Dedicated electric architectures support new approaches to packaging, charging and digital features.",
      experience:
        "Electric choice broadens from compact cars to large family SUVs. This decade is still unfolding.",
      tags: [
        "Dedicated EV platforms",
        "Digital cabins",
        "Broader electric choice",
      ],
      cars: [
        {
          id: "ioniq5-2021",
          name: "Hyundai IONIQ 5",
          year: 2021,
          detail:
            "IONIQ 5 paired a dedicated electric platform with a sharply drawn, pixel-lit body. Its long wheelbase illustrates how EV packaging can reshape familiar proportions.",
          source:
            "https://www.hyundai.com/content/hyundai/worldwide/en/newsroom/detail/hyundai-ioniq-5-redefines-electric-mobility-lifestyle-0000000551.html",
          feature: "Retro cues, electric foundations",
          image: "images/evolution/ioniq5-2021.jpg",
          credit: {
            artist: "© M 93",
            license: "CC BY-SA 3.0 de",
            licenseUrl:
              "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
            url: "https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg",
            title: "Hyundai_Ioniq_5_AWD_Techniq-Paket_–_f_31122024.jpg",
          },
        },
        {
          id: "ix-2021",
          name: "BMW iX",
          year: 2021,
          detail:
            "BMW’s electric SUV brought a dedicated architecture and a distinctive cabin to its technology flagship. Its market launch followed in late 2021.",
          source:
            "https://www.press.bmwgroup.com/global/article/detail/T0327077EN/the-new-bmw-ix-xdrive40-and-new-bmw-ix-xdrive50?language=en",
          feature: "A technology-led flagship",
          image: "images/evolution/ix-2021.jpg",
          credit: {
            artist: "Alexander Migl",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:BMW_iX_IAA_2021_1X7A0204.jpg",
            title: "BMW_iX_IAA_2021_1X7A0204.jpg",
          },
        },
        {
          id: "ev9-2023",
          name: "Kia EV9",
          year: 2023,
          detail:
            "A large, three-row electric SUV with a strong geometric identity. EV9 shows battery-electric platforms moving into a broader range of family-car roles.",
          source:
            "https://www.kiamedia.com/us/en/media/pressreleases/19326/the-kia-ev9-undergoes-final-technical-testing-ahead-of-2023-world-debut",
          feature: "Electric, at family scale",
          image: "images/evolution/ev9-2023.jpg",
          credit: {
            artist: "Alexander-93",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:Kia_EV9_1X7A2472.jpg",
            title: "Kia_EV9_1X7A2472.jpg",
          },
        },
      ],
    },
    {
      id: "2030",
      label: "2030",
      range: "2030 · future outlook",
      future: true,
      title: "The next chapter is unwritten.",
      subtitle: "An outlook, not a future model list",
      summary:
        "2030 is still ahead of us. These documented concepts from 2022–2023 illustrate ideas about efficiency, electric packaging and digital design. They are not confirmed 2030 production cars.",
      design:
        "Concepts explore simpler surfaces, aerodynamic shapes and new relationships between cabin and screen.",
      technology:
        "Efficiency, materials and vehicle software are areas of experimentation—not promises about every future car.",
      experience:
        "The direction is open. Concept features, release dates and production plans can change.",
      tags: [
        "Concepts & research",
        "Ideas, not guarantees",
        "No invented 2030 models",
      ],
      cars: [
        {
          id: "vision-neue-klasse",
          name: "BMW Vision Neue Klasse",
          year: 2023,
          concept: true,
          detail:
            "Revealed in 2023, this design concept explored a pared-back electric-car language and a different digital interface. It is shown as a historical concept, not as a 2030 model prediction.",
          source:
            "https://www.press.bmwgroup.com/global/article/detail/T0431558EN/bmw-reinvents-itself%3A-the-bmw-vision-neue-klasse?language=en",
          feature: "Reimagining the digital cabin",
          image: "images/evolution/vision-neue-klasse.jpg",
          credit: {
            artist: "Alexander-93",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:BMW_Vision_Neue_Klasse_IAA_2023_1X7A0221.jpg",
            title: "BMW_Vision_Neue_Klasse_IAA_2023_1X7A0221.jpg",
          },
        },
        {
          id: "vision-eqxx",
          name: "Mercedes-Benz VISION EQXX",
          year: 2022,
          concept: true,
          detail:
            "The VISION EQXX research vehicle focused on electric efficiency through aerodynamics, lightweight construction and careful energy use. A research prototype is not a production-car commitment.",
          source:
            "https://group.mercedes-benz.com/technology/innovation/vision/vision-eqxx.html",
          feature: "Efficiency as a design brief",
          image: "images/evolution/vision-eqxx.jpg",
          credit: {
            artist: "Matti Blume",
            license: "CC BY-SA 4.0",
            licenseUrl:
              "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
            url: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_Vision_EQXX,_IAA_Open_Space_2023,_Munich_(P1120189).jpg",
            title:
              "Mercedes-Benz_Vision_EQXX,_IAA_Open_Space_2023,_Munich_(P1120189).jpg",
          },
        },
        {
          id: "id2all",
          name: "Volkswagen ID. 2all",
          year: 2023,
          concept: true,
          detail:
            "Volkswagen’s 2023 concept explored a compact electric hatchback. It illustrates an earlier design direction; its concept name and features are not presented as a confirmed 2030 car.",
          source:
            "https://www.volkswagen-newsroom.com/en/world-premiere-of-the-id-2all-concept-the-electric-car-from-volkswagen-costing-less-than-25000-euros-15627/the-technology-concept-of-the-id-2all-15633",
          feature: "Rethinking the compact car",
          image: "images/evolution/id2all.jpg",
          credit: {
            artist: "Alexander-93",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            url: "https://commons.wikimedia.org/wiki/File:Volkswagen_ID._2all_IAA_2023_1X7A0651.jpg",
            title: "Volkswagen ID. 2all IAA 2023 1X7A0651.jpg",
          },
        },
      ],
    },
  ],
};
