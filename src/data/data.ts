import KurazukurinoMachinamiImage from "../assets/kentaro-toma-ZSszWRLLlbg-unsplash.jpg";
import KawagoeHikawaShrineImage from "../assets/letian-zhang-RGsMFx-9Md0-unsplash.jpg";
import ShingashiRiverbankImage from "../assets/nguyen-tp-hai-Mq9mdogzFBs-unsplash.jpg";
import OishiParkCafeImage from "../assets/owen-roth-TPycWrCxxsc-unsplash.jpg";
import ShakujiiRiverImage from "../assets/syasin2.jpg";
import IshiuchiMaruyamaImage from "../assets/ishiuchi.jpg";
import SuvarnabhumiAirportImage from "../assets/pexels-markus-winkler-4974985.jpg";
import ShukugawaraImage from "../assets/shukugawara.jpg";
import KumagayaSakuraTsutsumiImage from "../assets/kumagaya-sakura-tsutsumi.jpg";
import SankeienGardenImage from "../assets/sankeien-garden.jpg";
import RinkoParkImage from "../assets/rinko-park.jpg";

const swiperData = [
  {
    day: "Saturday, 23 Mar. 2024",
    detail: `
    <span class="tag-time">เวลา 18:30</span>
    <span>ออกเดินทางจากวิหารแดง</span>
    <span class="tag-duration">ใช้เวลา 2 - 3 ชั่วโมง</span>
    <span>ไปถึงสนามบินสุวรรณภูมิ</span>
    <span class="tag-time">เวลา 21:00 - 22:00</span>
    `,
    detailmore: `
    <div>
    <span class="tag-num">1.</span>
    <span class="tag-time">เวลา 18:30</span>
    ออกเดินทางจากวิหารแดง &nbsp;
    <iconify-icon icon="ph:car" width="30" height="30"></iconify-icon>
    <span class="tag-duration">เดินทางประมาณ 2 - 3 ชั่วโมง</span> 
    ถึงสนามบินสุวรรณภูมิ <span class="tag-time">เวลา 21:00 - 22:00</span>
    <a href="https://www.google.com/maps/search/?api=1&query=Suvarnabhumi+Airport" class="open-map">
    เปิดเส้นทาง Google Map
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">2.</span>
    Check in Counter AirJapn (K ชั้น 4)
    สามารถ Check In ได้ก่อนล่วงหน้า 3 ชั่วโมง Counter เปิดประมาณ 20:45 
    <span class="tag-duration">Check In ตอน 21:00</span></div> 
    
    <hr class="line">
    
    <div>
    <span class="tag-num">3.</span>
    เข้าด่านตรวจ 
    <iconify-icon icon="mdi:account-tie-hat-outline" width="30" height="30"></iconify-icon>
    </div>
    
    <hr class="line">
    
    <div>
    <span class="tag-num">4.</span>
    ไป Gate รอเตรียมขึ้นเครื่องบิน </div>
   
    <hr class="line">
   
    <div>
    <span class="tag-num">5.</span>
    เครื่องบินออก 
    <iconify-icon icon="mdi:airplane-takeoff" width="30" height="30"></iconify-icon>
    <span class="tag-time">00:15 น. วันอาทิตย์ที่ 24 </span>
    </div>
    `,
    locations: [
      {
        location_name: "Suvarnabhumi Airport",
        picture: SuvarnabhumiAirportImage,
        path: "https://www.google.com/maps/search/?api=1&query=Suvarnabhumi+Airport",
      },
    ],
  },

  /* ------------------------------------------------- 24 ------------------------------------------------------ */

  {
    day: "Sunday, 24 Mar. 2024",
    detail: `
    <span class="tag-time">เวลา 00:15</span>
    <span>อยู่บนเครื่องบิน AirJapan NQ002</span>
    <span class="tag-duration">เดินทางประมาณ 5 ชั่วโมง 55 นาที</span>
    <span>ถึงสนามบินนาริตะ Narita International</span>
    <span class="tag-time">เวลา 08:10</span>
    `,
    detailmore: `
    <div>
    <span class="tag-num">1.</span>
    <span class="tag-time">เวลา 00:15</span>
    อยู่บนเครื่องบิน AirJapan NQ002
    <iconify-icon icon="mdi:seat-passenger" width="30" height="30"></iconify-icon>
    <span class="tag-duration">เดินทางประมาณ 5 ชั่วโมง 55 นาที</span> 
    ถึงสนามบินนาริตะ 
    <a href="https://www.narita-airport.jp/en/map" target="_blank" class="detail-map">
    Narita International  
    </a>
    <span class="tag-time">เวลา 08:10</span>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">2.</span>
    เข้าด่านตรวจคนเข้าเมือง Immigration แสดง Passport กับสแกน QR Code</div> 
    
    <hr class="line">
   
    <div>
    <span class="tag-num">3.</span>
    ไปหยิบกระเป๋าที่รางสายพาน  
    <iconify-icon icon="mdi:bag-checked" width="30" height="30"></iconify-icon>
    </div>
   
    <hr class="line">
   
    <div>
    <span class="tag-num">4.</span>
    เข้าด่านกรมศุลกากร Customs สแกน QR Code &nbsp;
    <iconify-icon icon="fluent-emoji-high-contrast:customs" width="30" height="30"></iconify-icon>
    </div>
    
    <hr class="line">
   
    <div>
    <span class="tag-num">5.</span>
    ตำแหน่งเราอยู่ที่ชั้น 1 ให้ลงลิฟต์ ไปชั้น B1 แวะร้านสะดวกซื้อ LAWSON กินมื้อแรก 
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    กับเติมเงินเข้า IC Card ใน iPhone 
    &nbsp;
    <a href="https://www.narita-airport.jp/en/map/?bearing=59.5&zoom=18&pitch=0&lat=35.76434729998999&lng=140.38482750000003&clickedPoi=16856096&building=b1f7eac9-464b-49df-aa67-24210e1f9b16&floor=B1F" target="_blank" class="open-map">
    ข้อมูลตำแหน่งร้าน
    </a>
    </div>
    
   
    <hr class="line">
    
    <div>
    <span class="tag-num">6.</span>
    <span class="tag-time">เวลา 09:59</span>
    (ถ้าเกินเวลานี้คือไม่ไปสวน Sankeien)
    ขึ้นรถไฟสถานี 
    <a href="https://www.narita-airport.jp/en/access/train" target="_blank" class="detail-map">
    Narita Station 
    </a>
    <span class="tag-line ks">สาย Keisei Narita Skyaccess</span> 
    ต่อบนพาหนะเดิม
    <span class="tag-line a">สาย Asakusa Line</span>
    ถึงสถานี 
    <a href="https://www.tokyometro.jp/lang_th/station/nihombashi/index.html" target="_blank" class="detail-map">
    Nihombashi Station 
    </a>
    <span class="tag-time">เวลา 11:09</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Narita+Airport+Terminal+1+Station&destination=Nihombashi+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    ตำแหน่งที่เราอยู่ชั้น B2 เดินไปลิฟต์ขึ้นไปชั้น B1 ออกทาง C5
    </div>

    <hr class="line">
    
    <div>
    <span class="tag-num">7.</span>
    เดินไปสถานี
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station 
    </a>
    ประมาณ
    <span class="tag-duration">10 นาที 700 เมตร </span> 
    เข้าร้านฝากกระเป๋าที่ 
    <iconify-icon icon="mdi:bag-suitcase-outline" width="30" height="30"></iconify-icon>
    SAGAWA EXPRESS TOKYO SERVICE CENTER
    <a href="https://www.sagawa-exp.co.jp/ttk/english/servicecenter/tokyo_station.html" target="_blank" class="open-map">
    ข้อมูลตำแหน่ง
    </a>
    ร้านอยู่ชั้น 1 ปิด 21:00
    <a href="https://www.google.com/maps/search/?api=1&query=SAGAWA+EXPRESS+TOKYO+SERVICE+CENTER" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>
    
    <hr class="line">
    
    <div>
    <span class="tag-num">8.</span>
    ทานอาหารมื้อกลางวัน
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    <a href="https://www.google.com/maps/search/?api=1&query=food+Tokyo+Station" class="open-map">
    ค้นหาร้านอาหาร
    </a>
    <span class="tag-duration">ประมาณ 1 ชั่วโมง </span> 
    </div>
    

    <hr class="line">
    
    <div>
    <span class="tag-num">9.</span>
    <span class="tag-time">เวลา 12:05</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station 
    </a>
    <span class="tag-line jk">สาย Keihin-Tōhoku</span>
    ต่อบนพาหนะเดิม
    <span class="tag-line jk">สาย Negishi</span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/estation/stations/1195.html" target="_blank" class="detail-map">
    Negishi Station
    </a>
    <span class="tag-time">เวลา 12:57</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Negishi+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>
  
    <hr class="line">

    <div>
    <span class="tag-num">10.</span>
    เดินไปขึ้นรถบัส ป้ายเลข 1
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="tabler:bus" width="30" height="30"></iconify-icon>
    สาย 101 หรือ 58
    <a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusCourseSearch?busstopId=00090851" target="_blank" class="open-map">
    ดูตารางรถบัส
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">11.</span>
    <span class="tag-time">เวลา 13:05</span>
    ขึ้นรถบัสสาย 101 ถึงป้าย Honmoku 本牧
    <span class="tag-time">เวลา 13:16</span>
    <a href="https://www.google.com/maps/search/?api=1&query=Honmoku,+1+Honmokuwada,+Naka+Ward,+Yokohama,+Kanagawa+231-0827+ญี่ปุ่น" target="_blank" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>
    
    <hr class="line">

    <div>
    <span class="tag-num">12.</span>
    เดินไปสวน Sankeien
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ประมาณ 15 นาที 700 เมตร</span> 
    <a href="https://www.google.com/maps/search/?api=1&query=Sankeien+Main+Gate" target="_blank" class="open-map">
    เปิด GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">13.</span>
    เข้าชมสวน Sankeien
    <a href="https://www.kkday.com/th/product/134533-sankeien-garden-admission-ticket-instant-confirmation-yokohama?qs=Sankeien" target="_blank" class="open-map">
    เว็บไซต์ซื้อตั๋วเพื่อเข้าชม
    </a>
    <a href="https://www.sankeien.or.jp/around/course/course02/" target="_blank" class="open-map">
    หลักสูตรการเดินชมสวนใช้เส้นทาง วีลแชร์
    </a>
    <span class="tag-duration">ใช้เวลาเดินชมประมาณ 1-2 ชั่วโมง สวนเปิดให้เข้าถึง 16:30 ปิด 17:00</span> 
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">14.</span>
    กลับสถานี Negishi
    <span class="tag-time">เวลา 15:35</span>
    ขึ้นรถบัส
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="tabler:bus" width="30" height="30"></iconify-icon>
    สาย 101 หรือ 58 ป้าย Honmoku 本牧 ไปสถานี Negishi 
    <span class="tag-time">เวลา 15:47</span>
    <a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/transfer/TransferSearch?orvName=%E6%9C%AC%E7%89%A7&start=00091031&via1Name=&via1=&via2Name=&via2=&via3Name=&via3=&dnvName=%E6%A0%B9%E5%B2%B8%E9%A7%85%E5%89%8D&goal=00090851&month_=2024%2F3&month=2024%2F3&day_=24&day=24&hour_=17&hour=17&minute=25&basis=1&sort=0&wspeed=standard&method=0&hour_depArrTimeList=20" target="_blank" class="open-map">
    ดูตารางรถบัสขากลับ
    </a>
    <a href="https://www.google.com/maps/search/?api=1&query=Negishi+Station" target="_blank" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">15.</span>
    <span class="tag-time">เวลา 16:00</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/estation/stations/1195.html" target="_blank" class="detail-map">
    Negishi Station
    </a>
    <span class="tag-line jk">สาย Negishi</span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/estation/stations/740.html" target="_blank" class="detail-map">
    Sakuragichō Station
    </a>
    <span class="tag-time">เวลา 16:09</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Negishi+Station&destination=Sakuragichō+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">16.</span>
    เดินไปสวน Rinko Park
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ประมาณ 20 นาที 1.3 กม.</span> 
    <a href="https://www.google.com/maps/search/?api=1&query=Rinko+Park" target="_blank" class="open-map">
    เปิด GoogleMap
    </a>
    </div>
    
    <hr class="line">

    <div>
    <span class="tag-num">17.</span>
    <span class="tag-time">เวลา 18:20</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/estation/stations/740.html" target="_blank" class="detail-map">
    Sakuragichō Station
    </a>
    <span class="tag-line jk">สาย Negishi</span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station 
    </a>
    <span class="tag-time">เวลา 19:03</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Sakuragichō+Station&destination=Tokyo+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">18.</span>
    ทานอาหารมื้อเย็น
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    <a href="https://www.google.com/maps/search/?api=1&query=food+Tokyo+Station" class="open-map">
    ค้นหาร้านอาหาร
    </a>
    <span class="tag-duration">ประมาณ 1 ชั่วโมง </span> 
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">19.</span>
    รับตั๋ว &nbsp;
    <iconify-icon icon="uil:ticket" width="30" height="30"></iconify-icon> &nbsp;
    JR Tokyo Wind Pass ที่ตู้อัตโนมัติ สถานี Tokyo
    <a href="https://www.jreast.co.jp/e/customer_support/service_center_tokyo.html" target="_blank" class="open-map">
    ข้อมูลตำแหน่งที่ตั้งตู้อัตโนมัติ
    </a>
    </div>
    
    <hr class="line">

    <div>
    <span class="tag-num">20.</span>
    ไปรับกระเป๋าที่ฝาก
    <iconify-icon icon="mdi:bag-suitcase-outline" width="30" height="30"></iconify-icon>
    <b>ห้ามเกิน 21:00 ร้านปิด</b>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">21.</span>
    <span class="tag-time">เวลา 20:38</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station 
    </a>
    <span class="tag-line ueno">สาย Ueno-Tokyo</span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <span class="tag-time">เวลา 20:55</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Akabane+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    ออกจากสถานี ประตูตะวันออก East Exit
    </div>

    <hr class="line">

    <a href="https://www.google.com/maps/search/?api=1&query=Toyoko-Inn+東横INN赤羽駅東口">
    <div>
    <span class="tag-num">22.</span>
    เดินจากสถานีไปที่พัก 
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="fontisto:hotel" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ประมาณ 5 นาที 300 เมตร</span> 
    น่าจะถึงที่พักประมาณ
    <span class="tag-time">เวลา 21:00</span> 
    Check in ที่พัก Toyoko Inn Tokyo Akabane-eki Higashi-guchi
    </div>
    </a>

    <hr class="line">

    <div>
    <span class="tag-num">23.</span>
    พรุ่งนี้ตื่นตี 5 </div>
    `,
    locations: [
      {
        location_name: "Sankeien Garden",
        picture: SankeienGardenImage,
        path: "https://www.google.com/maps/search/?api=1&query=สวนซังเคเอ็น",
      },
      {
        location_name: "Rinko Park",
        picture: RinkoParkImage,
        path: "https://www.google.com/maps/search/?api=1&query=Rinko+Park",
      },
    ],
  },

  /* --------------------------------------------------- 25 ---------------------------------------------------- */

  {
    day: "Monday, 25 Mar. 2024",
    detail: `
    <span class="tag-time">เวลา 06:32</span>
    <span>ยืนอยู่สถานี Akabane Station</span>
    <span class="tag-duration">อยู่บนรถไฟ</span>
    <span>ถึงสถานี Ikebukuro Station</span>
    <span class="tag-time">เวลา 06:40</span>
    `,
    detailmore: `
    <div>
    <span class="tag-num">1.</span>
    <span class="tag-time">เวลา 06:32</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <span class="tag-line ja">สาย Saikyō</span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e108.html" target="_blank" class="detail-map">
    Ikebukuro Station 
    </a>
    <span class="tag-time">เวลา 06:40</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Akabane+Station&destination=Ikebukuro+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    ออกทาง Central Gate 1 มองหาทางไป West Exite 
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">2.</span>
    ซื้อตั๋ว &nbsp;
    <iconify-icon icon="uil:ticket" width="30" height="30"></iconify-icon>
    KAWAGOE DISCOUNT PASS Premium 2 ใบ ที่ Tobu Central Gate 1
    <a href="https://www.tobu.co.jp/th/ticket/kawagoe/premium.html" target="_blank" class="open-map">
    เว็บไซต์ KAWAGOE
    </a>
    <a href="https://partners-pamph.jnto.go.jp/simg/pamph/1745.pdf" class="open-map">
    เปิดดูข้อมูล Kawagoe แบบ PDF
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">3.</span>
    <span class="tag-time">เวลา 07:15</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.tobu.co.jp/th/service/station/7105.html" target="_blank" class="detail-map">
    Ikebukuro Station 
    </a>
    <span class="tag-line tj">สาย Tobu-Tojo</span>
    ถึงสถานี 
    <a href="https://www.tobu.co.jp/th/service/station/7315.html" target="_blank" class="detail-map">
    Kawagoe Station 
    </a>
    <span class="tag-time">เวลา 07:49</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Ikebukuro+Station&destination=Kawagoe+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">4.</span>
    ทานอาหารมื้อแรก
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    <a href="https://www.google.com/maps/search/?api=1&query=food+Kawagoe+Station" class="open-map">
    ค้นหาร้านอาหาร
    </a>
    <span class="tag-duration">ประมาณ 1 ชั่วโมง </span> 
    <span class="tag-time">เวลา 08:50</span>
    </div>
    

    <hr class="line">

    <div>
    <span class="tag-num">5.</span>
    ทางออก East Exit เดินไปจุดขึ้นรถบัส
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="tabler:bus" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ประมาณ 10 นาที </span> 
    <a href="https://www.tobu-bus.com/en/kawagoe/" target="_blank" class="open-map">
    ดูตารางรถบัส
    </a>
    </div>

    <hr class="line">
  
    <div>
    <span class="tag-num">6.</span>
    ลงป้าย &nbsp;
    <iconify-icon icon="ant-design:stop-twotone" width="30" height="30"></iconify-icon>
    &nbsp; W7 Ichibangai Temple &nbsp;
    <a href="https://www.google.com/maps/search/?api=1&query=一番街（バス）" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">7.</span>
    เดินไปร้าน
    Vivian Kimono Rental
    <a href="https://coedovivian.com/" target="_blank" class="open-map">
    เว็บไซต์ร้าน
    </a>
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="clarity:store-solid" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ประมาณ 200 เมตร</span> 
    จองชุดร้านไว้ตอน 10 โมง
    <a href="https://www.google.com/maps/dir/?api=1&origin=一番街（バス）&destination=Vivian+Kimono+Rental&travelmode=walking" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">8.</span>
    <a class="open-map" href="https://www.google.com/maps/d/viewer?mid=1Qov_nooz0wjW0uiYwEjaGL-bc2FLs8c&femb=1&ll=35.92402345931941%2C139.48575520000003&z=16" target="_blank">
    ดูแผนการเดินทางเมือง Kawagoe
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">9.</span>
    ขากลับจาก W17 Kawagoe Hikawa Shrine 
    ให้ลงป้าย &nbsp;
    <iconify-icon icon="ant-design:stop-twotone" width="30" height="30"></iconify-icon>
    &nbsp; W14 หรือ T5 Ōtemachi &nbsp;
    <a href="https://www.google.com/maps/search/?api=1&query=大手町（バス）" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    และเดินไปร้านคืนชุด ก่อน 16:30
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">10.</span>
    <span class="tag-time">เวลา 17:59</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.tobu.co.jp/th/service/station/7315.html" target="_blank" class="detail-map">
    Kawagoe Station 
    </a>
    <span class="tag-line tj">สาย Tobu-Tojo</span>
    ถึงสถานี 
    <a href="https://www.tobu.co.jp/th/service/station/7105.html" target="_blank" class="detail-map">
    Ikebukuro Station 
    </a>
    <span class="tag-time">เวลา 18:32</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Kawagoe+Station&destination=Ikebukuro+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">11.</span>
    ไปสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <a href="https://www.google.com/maps/search/?api=1&query=Akabane+Station" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    ออกจากสถานี East Exit
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">12.</span>
    ทานอาหารมื้อเย็น
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    <a href="https://www.google.com/maps/search/?api=1&query=food+Akabane+Station" class="open-map">
    ค้นหาร้านอาหาร
    </a>
    </div>

    <hr class="line">

    <a href="https://www.google.com/maps/search/?api=1&query=Toyoko-Inn+東横INN赤羽駅東口">
    <div>
    <span class="tag-num">13.</span>
    เดินจากสถานีไปที่พัก 
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="fontisto:hotel" width="30" height="30"></iconify-icon>
    </div>
    </a>

    <hr class="line">

    <div>    
    <span class="tag-num">14.</span>
    พรุ่งนี้ตื่นตี 5 </div>
    `,
    locations: [
      {
        location_name: "Kurazukuri no Machinami",
        picture: KurazukurinoMachinamiImage,
        path: "https://www.google.com/maps/search/?api=1&query=urazukuri+no+Machinami+%2F+Warehouse+District",
      },
      {
        location_name: "Kawagoe Hikawa Shrine",
        picture: KawagoeHikawaShrineImage,
        path: "https://www.google.com/maps/search/?api=1&query=Kawagoe+Hikawa+Shrine",
      },
      {
        location_name: "Shingashi Riverbank",
        picture: ShingashiRiverbankImage,
        path: "https://www.google.com/maps/search/?api=1&query=Shingashi+Riverbank+Cherry+Blossoms",
      },
    ],
  },

  /* ------------------------------------------------- 26 ------------------------------------------------------ */

  {
    day: "Tuseday, 26 Mar. 2024",
    name: "Fujikawaguchiko, Yamanashi",
    detail: `
    <span class="tag-time">เวลา 06:03</span>
    <span>ยืนอยู่สถานี Akabane Station</span>
    <span class="tag-duration">อยู่บนรถไฟ</span>
    <span>ถึงสถานี Shinjuku Station</span>
    <span class="tag-time">เวลา 06:18</span>
    `,
    detailmore: `
    <div>
    <span class="tag-num">1.</span>
    <span class="tag-time">เวลา 06:03</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <span class="tag-line ja">สาย Saikyō</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e866.html" target="_blank" class="detail-map">
    Shinjuku Station
    </a>
    <span class="tag-time">เวลา 06:18</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Akabane+Station&destination=Shinjuku+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap 
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">2.</span>
    ซื้อข้าวกล่องไปกินบนรถไฟ ร้านอยู่ชั้น 2
    <iconify-icon icon="mdi:cash" width="30" height="30"></iconify-icon>
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    <a href="https://foods.jr-cross.co.jp/ekiben/search?Station=133" class="open-map">ดูเมนูอาหาร</a>
    <a href="https://www.google.com/maps/search/?api=1&query=Ekibenya+Itadaki" class="open-map">
    ค้นหาร้านอาหาร
    </a>
    </div>
    

    <hr class="line">

    <div>
    <span class="tag-num">3.</span>
    <span class="tag-time">เวลา 07:30</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e866.html" target="_blank" class="detail-map">
    Shinjuku Station
    </a>
    ชานชลาที่ 10 ลิฟต์ I หรือ H รถไฟอยู่ชั้น 1
    <span class="tag-line jb">สาย Chūō-Sōbu</span>
    ต่อบนพาหนะเดิม
    <span class="tag-line jc">สาย Chūō</span>
    ต่อบนพาหนะเดิม
    <span class="tag-line fuji">สาย Fujikyuko No.3</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    <a href="https://www.jreast.co.jp/hachioji/fuji_excursion/en/#fuji_station" target="_blank" class="detail-map">
    ข้อมูลสาย FUJI EXCURSION
    </a>
    ถึงสถานี 
    <span class="detail-map">
    Kawaguchiko Station
    </span>
    <span class="tag-time">เวลา 09:26</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Kawaguchiko+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">4.</span>
    เดินไปขึ้นรถบัส สายสี Red
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="tabler:bus" width="30" height="30"></iconify-icon>

    <a href="https://en.kawaguchiko.net/img/pdf/bus_timetable_en.pdf" class="open-map">
    ข้อมูลตารางเวลารถบัส PDF - รถออกทุก 15 นาที 
    </a>

    </div>

    <hr class="line">

    <div>
    <span class="tag-num">5.</span>
    ลงป้าย &nbsp;
    <iconify-icon icon="ant-design:stop-twotone" width="30" height="30"></iconify-icon>
    Shimazuyashiki-mae No.18
    <a href="https://www.google.com/maps/search/?api=1&query=Shimazuyashiki-mae" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>
    

    <hr class="line">

    <div>
    <span class="tag-num">6.</span>
    เดินไปถ่ายรูปที่ Nagasaki Park &nbsp;
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="ion:camera-outline" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ระยะทางเดิน 300 เมตร</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Shimazuyashiki-mae&destination=Nagasaki+Park,+Oishi&travelmode=walking" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">7.</span>
    เดินไป 
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    Oishi Park Café 
    ผ่านร้านขนมปัง Lake Bake Cafe
    <a href="https://www.google.com/maps/search/?api=1&query=Lake+Bake+Cafe" class="open-map">
    ข้อมูลร้าน
    </a>
    <iconify-icon icon="mdi:bread" width="30" height="30"></iconify-icon>
    <iconify-icon icon="ph:coffee" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ระยะทางเดิน 1.5 กิโลเมตร เดินประมาณ 1 ชั่วโมง</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Nagasaki+Park,+Oishi&destination=Oishi+Park+Café&travelmode=walking" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">8.</span>
    เดินไปขึ้นรถบัสเตรียมกลับสถานี Kawaguchiko Station
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="tabler:bus" width="30" height="30"></iconify-icon>
    <span class="tag-duration">เวลา 13:30 ควรยืนรอขึ้นรถบัส  </span> 
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">9.</span>
    <span class="tag-time">เวลา 14:55</span>
    ขึ้นรถไฟสถานี 
    <span class="detail-map">
    Kawaguchiko Station
    </span>
    <span class="tag-line fuji">สาย Fujikyuko No.36</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    <a href="https://www.jreast.co.jp/hachioji/fuji_excursion/en/#fuji_station" target="_blank" class="detail-map">
    ข้อมูลสาย FUJI EXCURSION
    </a>
    <span class="tag-line jc">สาย Chūō</span>
    ต่อบนพาหนะเดิม
    <span class="tag-line jc">สาย Chūō</span>
    ต่อบนพาหนะเดิม
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e866.html" target="_blank" class="detail-map">
    Shinjuku Station
    </a>
    <span class="tag-time">เวลา 16:58</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Kawaguchiko+Station&destination=Shinjuku+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>
    
    <hr class="line">

    <div>
    <span class="tag-num">10.</span>
    <span class="tag-time">เวลา 17:06</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e866.html" target="_blank" class="detail-map">
    Shinjuku Station
    </a>
    <span class="tag-line ja">สาย Saikyō</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    <span class="tag-time">เวลา 17:11</span>
    ลงสถานี
    <a href="https://www.jreast.co.jp/e/stations/e108.html" target="_blank" class="detail-map">
    Ikebukuro Station
    </a>
    เดินเปลี่ยนสายขึ้น
    <span class="tag-time">เวลา 17:16</span>
    ใช้บัตร IC
    <span class="tag-line tj">สาย Tobu-Tojo</span>
    ถึงสถานี 
    <a href="https://www.tobu.co.jp/railway/guide/station/info/7204/" target="_blank" class="detail-map">
    Naka-itabashi Station
    </a>
    <span class="tag-time">เวลา 17:23</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Naka-itabashi+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>
    
    <hr class="line">

    <div>
    <span class="tag-num">12.</span>
    เดินถ่ายรูป ชมซากุระ ที่ Shakujii River &nbsp;
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="ion:camera-outline" width="30" height="30"></iconify-icon>
    <a href="https://www.google.com/maps/search/?api=1&query=石神井川の桜並木" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">13.</span>
    ทานอาหารมื้อเย็น
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    <a href="https://www.google.com/maps/search/?api=1&query=food+Naka-itabashi+Station" class="open-map">
    ค้นหาร้านอาหาร
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">14.</span>
    ไปสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    <a href="https://www.google.com/maps/search/?api=1&query=Akabane+Station" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    ออกจากสถานี East Exit
    </div>

    <hr class="line">

    <a href="https://www.google.com/maps/search/?api=1&query=Toyoko-Inn+東横INN赤羽駅東口">
    <div>
    <span class="tag-num">15.</span>
    เดินจากสถานีไปที่พัก 
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="fontisto:hotel" width="30" height="30"></iconify-icon>
    </div>
    </a>

    <hr class="line">

    <div>
    <span class="tag-num">16.</span>
    พรุ่งนี้ตื่นตี 5 </div>
    `,
    locations: [
      {
        location_name: "Oishi Park Cafe",
        picture: OishiParkCafeImage,
        path: "https://www.google.com/maps/search/?api=1&query=Oishi+Park+Café",
      },
      {
        location_name: "Shakujii River",
        picture: ShakujiiRiverImage,
        path: "https://www.google.com/maps/search/?api=1&query=石神井川の桜並木",
      },
    ],
  },

  /* ---------------------------------------------------------- 27 --------------------------------------------- */

  {
    day: "Wednesday, 27 Mar. 2024",
    name: "Niigata and Saitama",
    detail: `
    <span class="tag-time">เวลา 06:03</span>
    <span>ยืนอยู่สถานี Akabane Station</span>
    <span class="tag-duration">อยู่บนรถไฟ</span>
    <span>ถึงสถานี Tokyo Station</span>
    <span class="tag-time">เวลา 06:18</span>
    `,
    detailmore: `
    <div>
    <span class="tag-num">1.</span>
    <span class="tag-time">เวลา 06:03</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <span class="tag-line ueno">สาย Ueno-Tokyo</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station
    </a>
    <span class="tag-time">เวลา 06:18</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Akabane+Station&destination=Tokyo+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">2.</span>
    <span class="tag-time">เวลา 06:44</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station
    </a>
    <span class="tag-line joetsu">สาย Joetsu Shinkansen (Tanigawa 73)</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e285.html" target="_blank" class="detail-map">
    ECHIGO-YUZAWA
    </a>
    <span class="tag-time">เวลา 07:50</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=ECHIGO+YUZAWA+STATION&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">3.</span>
    ไปทาง East Exit เพื่อไปขึ้น Shuttle Bus ไป Ishiuchi Maruyama
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="tabler:bus" width="30" height="30"></iconify-icon>
    &nbsp;
    รถออกเวลา
    <span class="tag-time">เวลา 08:20</span>
    <a href="https://ishiuchi.or.jp/wordpress/wp-content/uploads/2023/12/5b4b3fb933cc0c66fe9b52d97cc87b1a-scaled.jpg" class="open-map">
    ตารางเวลารถบัส
    </a>
    <a href="https://www.google.com/maps/search/?api=1&query=Ishiuchi+Maruyama+Ski+Resort" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>
    
    <hr class="line">

    <div>
    <span class="tag-num">4.</span>
    ซื้อตั๋วขึ้น Sunrise Express ออนไลน์ &nbsp;
    <iconify-icon icon="uil:ticket" width="30" height="30"></iconify-icon> &nbsp;
    <a href="https://www.kkday.com/th/product/133518" target="_blank" class="open-map">
    เว็บซื้อตั๋ว
    </a>
    กับ
    ไปเช่าชุดที่ Resort Center
    <a href="https://ishiuchi.or.jp/wordpress/wp-content/uploads/2024/01/fc170e378b5991e79c5510b4bb50b921.pdf" target="_blank" class="open-map">
    เว็บราคาเช่าชุด
    </a>
    ไปเก็บของที่ตู้ล็อคเกอร์, เปลี่ยนชุด
    <a href="https://ishiuchi.or.jp/resortcenter/" target="_blank" class="open-map">
    ข้อมูล Resort Center
    </a>
    </div>
    

    <hr class="line">
    
    <div>
    <span class="tag-num">5.</span>
    ขึ้นกอดโดล่า เส้นทาง Sunrise Express เพื่อไปถ่ายรูปวิวด้านบนกับหิมะ &nbsp;
    <iconify-icon icon="ion:camera-outline" width="30" height="30"></iconify-icon>
    <span class="tag-duration">ประมาณ 1 ชั่วโมง </span>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">6.</span>
    ทานอาหาร
    <iconify-icon icon="fluent:food-20-regular" width="30" height="30"></iconify-icon>
    <a href="https://ishiuchi.or.jp/restaurants/restaurant/" class="open-map">
    ค้นหาร้านอาหาร
    </a>
    <span class="tag-duration">ประมาณ 1 ชั่วโมง </span> 
    </div>
  
    <hr class="line">

    <div>
    <span class="tag-num">7.</span>
    นั่งรถ Shuttle Bus กลับไปสถานีรถไฟ
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="tabler:bus" width="30" height="30"></iconify-icon>
    รถออก
    <span class="tag-time">เวลา 13:30</span>
    <a href="https://ishiuchi.or.jp/wordpress/wp-content/uploads/2023/12/5b4b3fb933cc0c66fe9b52d97cc87b1a-scaled.jpg" class="open-map">
    ตารางเวลารถบัส
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">8.</span>
    ขึ้นรถไฟสถานี 
    <span class="tag-time">เวลา 14:38</span>
    <a href="https://www.jreast.co.jp/e/stations/e285.html" target="_blank" class="detail-map">
    ECHIGO-YUZAWA
    </a>
    <span class="tag-line joetsu">สาย Joetsu Shinkansen (Tanigawa 76)</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    <span class="tag-time">เวลา 14:55</span>
    ลงสถานี
    <a href="https://www.jreast.co.jp/e/stations/e934.html" target="_blank" class="detail-map">
    Takasaki Station
    </a>
    เดินไปเปลี่ยนสายขึ้น
    <span class="tag-time">เวลา 15:16</span>
    <span class="tag-line hs">สาย Hokuriku-Shinkansen (Asama 620)</span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e625.html" target="_blank" class="detail-map">
    Kumagaya Station
    </a>
    <a href="https://www.google.com/maps/dir/?api=1&origin=GALA+Yuzawa+Snow+Resort&destination=Kumagaya+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">9.</span>
    เดินถ่ายรูป &nbsp;
    <iconify-icon icon="ion:camera-outline" width="30" height="30"></iconify-icon>
    &nbsp;
    ที่ Kumagaya Sakura Tsutsumi
    <a href="https://www.google.com/maps/search/?api=1&query=Kumagaya+Sakura+Tsutsumi" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    <span class="tag-duration">ประมาณ 1 ชั่วโมง </span>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">9.</span>
    ไปสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    <a href="https://www.google.com/maps/search/?api=1&query=Akabane+Station" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    ออกจากสถานี East Exit
    </div>

    <hr class="line">

    <a href="https://www.google.com/maps/search/?api=1&query=Toyoko-Inn+東横INN赤羽駅東口">
    <div>
    <span class="tag-num">10.</span>
    เดินจากสถานีไปที่พัก 
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    <iconify-icon icon="fontisto:hotel" width="30" height="30"></iconify-icon>
    </div>
    </a>

    <hr class="line">

    <div> 
    <span class="tag-num">11.</span>
    พรุ่งนี้ตื่นตี 5 </div>
    `,
    locations: [
      {
        location_name: "Ishiuchi Maruyama",
        picture: IshiuchiMaruyamaImage,
        path: "https://www.google.com/maps/search/?api=1&query=Ishiuchi+Maruyama+Ski+Resort",
      },
      {
        location_name: "Kumagaya Sakura Tsutsumi",
        picture: KumagayaSakuraTsutsumiImage,
        path: "https://www.google.com/maps/search/?api=1&query=Kumagaya+Sakura+Tsutsumi",
      },
    ],
  },

  /* ------------------------------------------------------------------------------------------------------- */

  {
    day: "Thursday, 28 Mar. 2024",
    name: "Kanagawa",

    detail: `
    <span class="tag-time">เวลา 06:00</span>
    <span>Check Out ออกจากที่พัก</span>
    `,

    detailmore: `
    <div>
    <span class="tag-num">1.</span>
    <span class="tag-time">เวลา 06:00</span>
    Check Out ออกจากที่พัก 
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">2.</span>
    <span class="tag-time">เวลา 06:26</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e34.html" target="_blank" class="detail-map">
    Akabane Station 
    </a>
    <span class="tag-line ueno">สาย Ueno-Tokyo</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station
    </a>
    <span class="tag-time">เวลา 06:43</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Akabane+Station&destination=Tokyo+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">3.</span>
    เดินไปฝากกระเป๋าตู้ล็อกเกอร์
    </div>

    <hr class="line">
    
    <div>
    <span class="tag-num">4.</span>
    <span class="tag-time">เวลา 07:09</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station
    </a>
    <span class="tag-line ueno">สาย Ueno-Tokyo</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ลงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e526.html" target="_blank" class="detail-map">
    Kawasaki Station
    </a>
    เดินไปเปลี่ยนสายขึ้น
    <span class="tag-line jn">สาย Nambu</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/estation/stations/839.html" target="_blank" class="detail-map">
    Shukugawara Station
    </a>
    <span class="tag-time">เวลา 07:59</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Shukugawara+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">5.</span>
    เดินถ่ายรูป &nbsp;
    <iconify-icon icon="ion:camera-outline" width="30" height="30"></iconify-icon>
    &nbsp;
    ที่ Shukugawara Nikaryō Waterway
    <a href="https://www.google.com/maps/search/?api=1&query=Shukugawara+Nikaryō+Waterway" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    <span class="tag-duration">ประมาณ 1 ชั่วโมง </span>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">6.</span>
    <span class="tag-time">เวลา 09:00</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/estation/stations/839.html" target="_blank" class="detail-map">
    Shukugawara Station
    </a>
    <span class="tag-line jn">สาย Nambu</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ลงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e526.html" target="_blank" class="detail-map">
    Kawasaki Station
    </a>
    เดินไปเปลี่ยนสายขึ้น
    <span class="tag-line ueno">สาย Ueno-Tokyo</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ถึงสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station
    </a>
    <span class="tag-time">เวลา 09:50</span>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Shukugawara+Station&destination=Tokyo+Station&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">7.</span>
    เดิน
    <iconify-icon icon="tabler:walk" width="30" height="30"></iconify-icon>
    ไปเอากระเป๋าที่ฝากไว้ตู้ล็อกเกอร์
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">8.</span>
    <span class="tag-time">เวลา 12:03</span>
    ขึ้นรถไฟสถานี 
    <a href="https://www.jreast.co.jp/e/stations/e1039.html" target="_blank" class="detail-map">
    Tokyo Station
    </a>
    <span class="tag-line nrt">สาย Narita Express No.23</span>
    <span class="open-map">
    <iconify-icon icon="simple-icons:jrgroup" style="color: #009100;" width="26" height="26"></iconify-icon>
    </span>
    ถึงสถานี 
    <a href="https://www.narita-airport.jp/en/access/train" target="_blank" class="detail-map">
    Narita Airport Terminal 1
    </a>
    <span class="tag-time">เวลา 12:58</span>
    <a href="https://www.jreast.co.jp/e/pdf/press_20220304_nex_e.pdf" class="open-map">
    ข้อมูลตารางรถไฟ PDF 
    </a>
    <a href="https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Narita+Airport+Terminal+1&travelmode=transit" class="open-map">
    เปิดเส้นทาง GoogleMap
    </a>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">9.</span>
    Check in Counter AirJapn (E ชั้น 4 ฝั่ง south)
    แต่ถ้าได้ boarding pass ให้ไป D เพื่อ self bag drop ได้ตั้งแต่ 13:55
    ส่วน Check In ได้ตั้งแต่ 14:55 
    <span class="tag-duration">Check In ตอน 14:30</span></div> 
    
    <hr class="line">
    
    <div>
    <span class="tag-num">10.</span>
    เข้าด่านตรวจ 
    <iconify-icon icon="mdi:account-tie-hat-outline" width="30" height="30"></iconify-icon>
    </div>
    
    <hr class="line">
    
    <div>
    <span class="tag-num">11.</span>
    ไป Gate รอเตรียมขึ้นเครื่องบิน </div>
   
    <hr class="line">
   
    <div>
    <span class="tag-num">12.</span>
    เครื่องบินออก 
    <iconify-icon icon="mdi:airplane-takeoff" width="30" height="30"></iconify-icon>
    <span class="tag-time">17:55 น.</span>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">13.</span>
    <span class="tag-time">เวลา 17:55</span>
    อยู่บนเครื่องบิน AirJapan NQ001
    <iconify-icon icon="mdi:seat-passenger" width="30" height="30"></iconify-icon>
    <span class="tag-duration">เดินทางประมาณ 7 ชั่วโมง 20 นาที</span> 
    ถึงสนามบินสุวรรณภูมิ
    <span class="tag-time">เวลา 23:15</span>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">14.</span>
    เข้าด่านตรวจคนเข้าเมือง Immigration แสดง Passport
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">15.</span>
    ไปหยิบกระเป๋าที่รางสายพาน  
    <iconify-icon icon="mdi:bag-checked" width="30" height="30"></iconify-icon>
    </div>

    <hr class="line">

    <div>
    <span class="tag-num">16.</span>
    เดินทางกลับบ้านวิหารแดง
    </div>



    `,
    locations: [
      {
        location_name: "Shukugawara Nikaryō Waterway",
        picture: ShukugawaraImage,
        path: "https://www.google.com/maps/search/?api=1&query=Shukugawara+Nikaryō+Waterway+Cherry+blossom",
      },
    ],
  },
];

const InformationData = [
  {
    infoname: "การเตรียมความพร้อมในการเข้าสนามบิน",
    path: [
      {
        name: "เทคนิค ผ่านเครื่องสแกนที่สนามบินอย่างรวดเร็ว",
        link: "https://spin9.me/2015/08/09/smoothly-go-through-airport-security/",
      },
    ],
  },
  {
    infoname: "สถานที่พัก Toyoko Inn Tokyo Akabane-eki Higashi-guchi",
    path: [
      {
        name: "รวมข้อมูลเกี่ยวกับที่พัก",
        link: "https://www.toyoko-inn.com/feature/?lcl_id=th",
      },
    ],
  },
  {
    infoname: "รวมข้อมูลเกี่ยวกับเครื่องบิน",
    path: [
      {
        name: "รวมข้อมูลเกี่ยวกับสายการบิน AirJapan",
        link: "https://www.flyairjapan.com/th",
      },
      {
        name: "วิธีใช้ห้องน้ำบนเครื่องบิน เป็นคลิป VDO",
        link: "https://www.facebook.com/reel/1433623607495212",
      },
    ],
  },
  {
    infoname: "รวมเรื่องที่ควรรู้เกี่ยวกับญี่ปุ่น",
    path: [
      {
        name: "5 เรื่องน่ารู้ การใช้ห้องน้ำในประเทศญี่ปุ่น",
        link: "https://travel.trueid.net/detail/1q52wNPb0JbK",
      },
      {
        name: "พิกัดหาถังขยะในญี่ปุ่น",
        link: "https://chillchilljapan.com/japan-trash-bin/",
      },
      {
        name: "เงินญี่ปุ่นมีกี่แบบ",
        link: "https://matcha-jp.com/th/1359",
      },
      {
        name: "ต้องรู้! 8 ของห้ามเข้าญี่ปุ่น เช็คให้ดี ไม่มีพลาด",
        link: "https://www.mushroomtravel.com/page/prohibited-items-japan/",
      },
      {
        name: "ข้อควรรู้ 20 วัฒนธรรมญี่ปุ่น สำหรับนักท่องเที่ยวมือใหม่!!",
        link: "https://www.chubbtravelinsurance.co.th/cti/th-th/home/learn/travel-tips/at-your-destination/20-japanese-culture-tourists-must-know.html",
      },
    ],
  },
  {
    infoname: "รวมเว็บพยากรณ์อากาศที่ญี่ปุ่น",
    path: [
      {
        name: "Weathernews",
        link: "https://weathernews.jp/",
      },
      {
        name: "AccuWeather",
        link: "https://www.accuweather.com/",
      },
      {
        name: "Windy",
        link: "https://www.windy.com/",
      },
      {
        name: "Yahoo Japan",
        link: "https://weather.yahoo.co.jp/weather/",
      },
      {
        name: "พยากรณ์ซากุระ",
        link: "https://s.n-kishou.co.jp/w/sp/sakura/sakura_top.html?",
      },
      {
        name: "พยากรณ์ซากุระ",
        link: "https://weathernews.jp/sakura/",
      },
    ],
  },
  {
    infoname: "เว็บจองร้านอาหารที่ญี่ปุ่น",
    path: [
      {
        name: "Tabelog",
        link: "https://tabelog.com/en/",
      },
    ],
  },
  {
    infoname: "วิธีรับตั๋ว JR Wind Pass - PDF",
    path: [
      {
        name: "วิธีรับตั๋ว JR Wind Pass",
        link: "https://www.jreast.co.jp/e/downloads/pdf/passport_operation_e.pdf",
      },
    ],
  },
  {
    infoname: "รวมแผนที่สถานีรถไฟสาย JR",
    path: [
      {
        name: "รวมแผนที่สถานีรถไฟสาย JR",
        link: "https://www.jreast.co.jp/e/stations/index.html",
      },
    ],
  },
  {
    infoname: "ข้อมูลรถบัสที่ฟูจิ ทะเลสาบคาวากุจิ",
    path: [
      {
        name: "ข้อมูลรถบัสที่ฟูจิ ทะเลสาบคาวากุจิ",
        link: "https://bus.fujikyu.co.jp/rosen/shuyuomuni/",
      },
    ],
  },
  {
    infoname: "แอปฝากกระเป๋า",
    path: [
      {
        name: "แอปฝากกระเป๋า",
        link: "https://cloak.ecbo.io/",
      },
    ],
  },
  {
    infoname: "แอปเรียกแท็กซี่ในญี่ปุ่น",
    path: [
      {
        name: "6 แอปเรียกแท็กซี่ในญี่ปุ่น",
        link: "https://matcha-jp.com/th/9586",
      },
    ],
  },
  {
    infoname: "ประกันการเดินทางต่างประเทศ",
    path: [
      {
        name: "เว็บไซต์ประกันเดินทาง SOMPO",
        link: "https://traveljoy.sompo.co.th/",
      },
    ],
  },
];

export { swiperData, InformationData };
