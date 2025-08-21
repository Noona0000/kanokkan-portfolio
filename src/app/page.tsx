import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-black flex flex-col items-center px-4 py-8 sm:py-12">
      {/* ส่วนหัว (Header) */}
      <header className="w-full max-w-3xl flex flex-col items-center mb-8 relative">
        {/* โลโก้และชื่อ Portfolio */}
        <div className="flex flex-col items-center">
          {/* สามารถเปลี่ยนเป็นภาพ SVG หรือไอคอนการ์ตูนได้ */}
          <div className="w-32 h-32 bg-yellow-200 rounded-full flex items-center justify-center mb-2">
            <span className="text-5xl">🎨</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center leading-tight">
            PORTFOLIO
          </h1>
          <div className="flex gap-2 mt-2 text-yellow-500 font-semibold text-base">
            <span>Compilation</span>
            <span>•</span>
            <span>Work & Assignment</span>
            <span>•</span>
            <span>2025</span>
          </div>
        </div>
        <span className="absolute right-0 top-0 text-xs font-bold text-gray-400">
          KANOKKAN
        </span>
      </header>

      {/* ส่วนแนะนำตัว (Introduction) */}
      <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6 bg-yellow-50 rounded-xl p-6 mb-8 shadow">
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
          <h2 className="text-2xl font-bold mb-1">Introduction</h2>
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
      <section className="w-full max-w-3xl bg-white rounded-xl p-6 mb-8 shadow border border-yellow-100">
        <h3 className="text-xl font-bold text-yellow-600 mb-2">
          ประวัติการศึกษา
        </h3>
        <ul className="list-disc list-inside text-base pl-2">
          <li>
            ปริญญาตรี: มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ลำปาง{" "}
            <span className="text-sm text-gray-500">(กำลังศึกษา)</span>
          </li>
          <li>มัธยมศึกษา: โรงเรียนศึกษาสงเคราะห์แม่ฮ่องสอน</li>
          <li>ประถมศึกษา: โรงเรียนชุมชนบ้านเมืองปอน</li>
        </ul>
        <div className="text-xs text-gray-500 mt-2">
          แสดงประวัติการศึกษาตามลำดับขั้น
        </div>
      </section>

      {/* ทักษะและความสามารถ (Skills) */}
      <section className="w-full max-w-3xl bg-yellow-50 rounded-xl p-6 mb-8 shadow">
        <h3 className="text-xl font-bold text-yellow-600 mb-2">
          ทักษะและความสามารถ
        </h3>
        <ul className="flex flex-wrap gap-3 text-base">
          <li className="bg-yellow-200 px-3 py-1 rounded-full">
            การทำงานเป็นทีม
          </li>
          <li className="bg-yellow-200 px-3 py-1 rounded-full">การสื่อสาร</li>
          <li className="bg-yellow-200 px-3 py-1 rounded-full">
            ความรับผิดชอบสูง
          </li>
          <li className="bg-yellow-200 px-3 py-1 rounded-full">
            กระตือรือร้นในการเรียนรู้สิ่งใหม่
          </li>
        </ul>
        <div className="text-xs text-gray-500 mt-2">
          แสดงทักษะเด่นในรูปแบบป้าย
        </div>
      </section>

      {/* กิจกรรมและความสนใจ (Activities & Interests) */}
      <section className="w-full max-w-3xl bg-white rounded-xl p-6 mb-8 shadow border border-yellow-100">
        <h3 className="text-xl font-bold text-yellow-600 mb-2">
          กิจกรรมและความสนใจ
        </h3>
        <ul className="flex flex-wrap gap-3 text-base">
          <li className="bg-yellow-100 px-3 py-1 rounded-full">
            ชื่นชอบการเล่นกีฬา
          </li>
          <li className="bg-yellow-100 px-3 py-1 rounded-full">
            กิจกรรมด้านชุมชนและอาสาสมัคร
          </li>
        </ul>
        <div className="text-xs text-gray-500 mt-2">
          กิจกรรมที่สนใจและเข้าร่วม
        </div>
      </section>

      {/* เป้าหมายในการทำงาน (Career Objective) */}
      <section className="w-full max-w-3xl bg-yellow-50 rounded-xl p-6 mb-8 shadow">
        <h3 className="text-xl font-bold text-yellow-600 mb-2">
          เป้าหมายในการทำงาน
        </h3>
        <p className="text-base leading-relaxed">
          ต้องการนำความรู้ ความสามารถ
          และความมุ่งมั่นในการทำงานมาพัฒนาศักยภาพขององค์กร
          พร้อมเรียนรู้ทักษะใหม่ๆ เพื่อเติบโตไปพร้อมกัน
        </p>
        <div className="text-xs text-gray-500 mt-2">
          อธิบายเป้าหมายในการทำงาน
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-3xl text-center text-xs text-gray-400 py-4">
        © 2025 Kanokkan Witthura. All rights reserved.
      </footer>
    </div>
  );
}
