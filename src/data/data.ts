import KamakurakokoMaeImage from "../assets/tripp-ho-3mGGMau_4c8-unsplash.jpg";
import KurazukurinoMachinamiImage from "../assets/kentaro-toma-ZSszWRLLlbg-unsplash.jpg";
import KawagoeHikawaShrineImage from "../assets/letian-zhang-RGsMFx-9Md0-unsplash.jpg";
import ShingashiRiverbankImage from "../assets/nguyen-tp-hai-Mq9mdogzFBs-unsplash.jpg";
import OishiParkCafeImage from "../assets/owen-roth-TPycWrCxxsc-unsplash.jpg";
import MtFujiPanoramaRopewayImage from "../assets/01.jpg";
import NakaMeguroStaImage from "../assets/pexels-ronny-siegel-11638591.jpg";
import GalaYuzawaImage from "../assets/Snow-Enjoyment-Park.jpg";

const swiperData = [
  {
    day: "Sunday, 24 Mar. 2024",
    name: "Kamakura, Kanagawa",
    locations: [
      {
        location_name: "Kamakurakōkō-Mae Station",
        picture: KamakurakokoMaeImage,
        path: "/locations/kamakurakoko_mae_station",
      },
    ],
  },
  {
    day: "Monday, 25 Mar. 2024",
    name: "Kawagoe, Saitama",
    locations: [
      {
        location_name: "Kurazukuri no Machinami",
        picture: KurazukurinoMachinamiImage,
        path: "/locations/kurazukuri_no_machinami",
      },
      {
        location_name: "Kawagoe Hikawa Shrine",
        picture: KawagoeHikawaShrineImage,
        path: "/locations/kawagoe_hikawa_shrine",
      },
      {
        location_name: "Shingashi Riverbank",
        picture: ShingashiRiverbankImage,
        path: "/locations/shingashi_riverbank",
      },
    ],
  },
  {
    day: "Tuseday, 26 Mar. 2024",
    name: "Fujikawaguchiko, Yamanashi",
    locations: [
      {
        location_name: "Oishi Park Cafe",
        picture: OishiParkCafeImage,
        path: "/locations/oishi_park_cafe",
      },
      // {
      //   location_name: "Mt. Fuji Panorama Ropeway",
      //   picture: MtFujiPanoramaRopewayImage,
      //   path: "/locations/mtfuji_panorama_ropeway",
      // },
      {
        location_name: "Naka-meguro Sta.",
        picture: NakaMeguroStaImage,
        path: "/locations/naka_meguro_sta",
      },
    ],
  },
  {
    day: "Wednesday, 27 Mar. 2024",
    name: "Niigata and Saitama",
    locations: [
      {
        location_name: "Gala Yuzawa",
        picture: GalaYuzawaImage,
        path: "/locations/gala_yuzawa",
      },
      {
        location_name: "Kumagaya Sakura Tsutsumi",
        picture: "",
        path: "/locations/kumagaya_sakura_tsutsumi",
      },
    ],
  },
  {
    day: "Thursday, 28 Mar. 2024",
    name: "Kanagawa",
    locations: [
      {
        location_name: "Shukugawara Nikaryō Waterway",
        picture: "",
        path: "/locations/shukugawara_nikaryo_waterway",
      },
    ],
  },
];

const travelData = [
  {
    day: "Sunday, 24 Mar. 2024",
    location_name: "Kamakurakōkō-Mae Station",
  },
  {
    day: "Monday, 25 Mar. 2024",
    location_name: "Kamakurakōkō-Mae Station",
  },
  {
    day: "Tuseday, 26 Mar. 2024",
    location_name: "Kamakurakōkō-Mae Station",
  },
  {
    day: "Wednesday, 27 Mar. 2024",
    location_name: "Kamakurakōkō-Mae Station",
  },
  {
    day: "Thursday, 28 Mar. 2024",
    location_name: "Kamakurakōkō-Mae Station",
  },
];

export { swiperData, travelData };
