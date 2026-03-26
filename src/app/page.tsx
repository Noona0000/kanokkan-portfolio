import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 text-black flex flex-col items-center px-4 py-8 sm:py-12">
      {/* ส่วนหัว (Header) */}
      <header className="w-full max-w-3xl flex flex-col items-center mb-8 relative">
        {/* โลโก้และชื่อ Portfolio */}
        <div className="flex flex-col items-center">
          {/* สามารถเปลี่ยนเป็นภาพ SVG หรือไอคอนการ์ตูนได้ */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full flex items-center justify-center mb-2 shadow-lg drop-shadow-xl">
            <span className="text-5xl">🐱</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            PORTFOLIO
          </h1>
        </div>
        <span className="absolute right-0 top-0 text-xs font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
          KANOKKAN
        </span>
      </header>

      {/* ส่วนแนะนำตัว (Introduction) */}
      <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl p-6 mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        {/* ภาพโปรไฟล์ */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-28 h-28 mb-3 overflow-hidden rounded-lg relative">
            <Image
              src="/S__10059779.jpg"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 112px) 100vw, 112px"
            />
          </div>
          <div className="text-sm text-gray-600 text-center md:text-left">
            โปรไฟล์
          </div>
        </div>
        {/* ข้อมูลส่วนตัว */}
        <div className="md:col-span-2 flex flex-col gap-1">
          <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Introduction</h2>
          <div className="text-base font-semibold">
            กนกกัญญ์ วิธุระ <span className="text-sm font-normal">(นา)</span>
          </div>
          <div className="text-sm">อายุ: 21 ปี</div>
          <div className="text-sm">โทรศัพท์: 091-042-6681</div>
          <div className="text-sm">อีเมล: punneewitura6@gmail.com</div>
          <div className="text-sm">
            ที่อยู่: 200 หมู่ 1 ตำบลเมืองปอน อำเภอขุนยวม จังหวัดแม่ฮ่องสอน
          </div>
        </div>
      </section>

      {/* ประวัติการศึกษา (Education) */}
      <section className="w-full max-w-3xl bg-white rounded-2xl p-6 mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600">
        <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-2">
          Education
        </h3>
        <ul className="list-disc list-inside text-base pl-2">
          <li>
            ปริญญาตรี: มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ลำปาง{" "}
            <span className="text-sm text-gray-500">(กำลังศึกษา)</span>
          </li>
          <li>มัธยมศึกษา: โรงเรียนศึกษาสงเคราะห์แม่ฮ่องสอน</li>
          <li>ประถมศึกษา: โรงเรียนชุมชนบ้านเมืองปอน</li>
        </ul>
      </section>

      {/* ทักษะและความสามารถ (Skills) */}
      <section className="w-full max-w-3xl bg-white rounded-2xl p-6 mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-600">
        <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text mb-2">
          Skills & Abilities
        </h3>
        <ul className="flex flex-wrap gap-3 text-base">
          <li className="bg-gradient-to-r from-blue-200 to-indigo-200 px-3 py-1 rounded-full hover:from-blue-300 hover:to-indigo-300 transition-colors duration-200">
            การทำงานเป็นทีม
          </li>
          <li className="bg-gradient-to-r from-blue-200 to-indigo-200 px-3 py-1 rounded-full hover:from-blue-300 hover:to-indigo-300 transition-colors duration-200">
            การพูดคุย และการสื่อสาร
          </li>
        </ul>
      </section>

      {/* กิจกรรมและความสนใจ (Activities & Interests) */}
      <section className="w-full max-w-3xl bg-white rounded-2xl p-6 mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600">
        <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-2">
          Activities & Interests
        </h3>
        <ul className="flex flex-wrap gap-3 text-base">
          <li className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 rounded-full hover:from-blue-200 hover:to-indigo-200 transition-colors duration-200">
            ชื่นชอบการเล่นกีฬา
          </li>
          <li className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 rounded-full hover:from-blue-200 hover:to-indigo-200 transition-colors duration-200">
            กิจกรรมด้านสุขภาพเต้นแอโรบิค
          </li>
        </ul>
      </section>

      {/* เป้าหมายในการทำงาน (Career Objective) */}
      <section className="w-full max-w-3xl bg-white rounded-2xl p-6 mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-600">
        <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text mb-2">
          Career Objective
        </h3>
        <p className="text-base leading-relaxed">         
          พร้อมเรียนรู้ทักษะใหม่ๆ เพื่อเติบโตในสายงานที่เลือก
          และมีความมุ่งมั่นที่จะพัฒนาตนเองอย่างต่อเนื่องเพื่อเป็นบุคลากรที่มีคุณค่าในองค์กร
        </p>
      </section>
      {/* เกียรติบัตรและรางวัล (Certificates & Awards) */}
      <section className="w-full max-w-4xl bg-white rounded-2xl p-6 mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600">
  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-8">
    Certificates & Awards
  </h3>

  {/* ส่วนจัดการ Layout: เรียง 1 คอลัมน์ในมือถือ และ 2 คอลัมน์ในจอคอม (md:grid-cols-2) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
    
    {/* เกียรติบัตรใบที่ 1 */}
    <div className="group border-2 border-indigo-200 rounded-xl p-2 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 w-full max-w-sm">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src="/certificate.jpg"
          alt="Certificate"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    {/* เกียรติบัตรใบที่ 2 */}
    <div className="group border-2 border-indigo-200 rounded-xl p-2 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 w-full max-w-sm">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src="/certificate1.png"
          alt="Certificate 1"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    {/* เกียรติบัตรใบที่ 3 */}
    <div className="group border-2 border-indigo-200 rounded-xl p-2 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 w-full max-w-sm">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src="/certificate2.png"
          alt="Certificate 2"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    {/* เกียรติบัตรใบที่ 4 */}
    <div className="group border-2 border-indigo-200 rounded-xl p-2 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 w-full max-w-sm">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src="/certificate3.png"
          alt="Certificate 3"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

  </div>
</section>
 
    </div>
  );
}
