import Link from 'next/link';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Thai MOOC Certificate of Completion',
      organization: 'King Mongkut\'s University of Technology Thonburi (TCU)',
      date: '25 March 2026',
      description: 'Learning System and Communication Through Networking (12 Hours) - Thailand Massive Open Online Course by Ministry of Higher Education, Science, Research and Innovation',
      image: '/thai-mooc-certificate.pdf',
    },
    // เพิ่มเกียรติบัตรเพิ่มเติมได้ที่นี่
  ];

  return (
    <div className="font-sans min-h-screen bg-white text-black flex flex-col items-center px-4 py-8 sm:py-12">
      {/* ส่วนหัวของหน้า */}
      <header className="w-full max-w-4xl mb-8">
        <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold mb-4 inline-block">
          ← กลับหน้าแรก
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-2">
          🏆 เกียรติบัตรและรางวัล
        </h1>
        <p className="text-gray-600 text-base">
          เกียรติบัตรและความสำเร็จที่ได้รับระหว่างการศึกษาและการทำงาน
        </p>
      </header>

      {/* ส่วนแสดงเกียรติบัตร */}
      <section className="w-full max-w-4xl">
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-md border-2 border-yellow-200 p-6 hover:shadow-lg transition"
              >
                {/* ไอคอนหรือรูปเกียรติบัตร */}
                <div className="w-full h-48 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-6xl">🏅</span>
                </div>

                {/* ข้อมูลเกียรติบัตร */}
                <h3 className="text-xl font-bold text-yellow-600 mb-2">
                  {cert.title}
                </h3>
                <div className="text-gray-600 text-sm mb-2">
                  <p className="font-semibold">{cert.organization}</p>
                  <p className="text-gray-500">{cert.date}</p>
                </div>
                <p className="text-base text-gray-700 mb-4">
                  {cert.description}
                </p>

                {/* ลิงก์ดูเพิ่มเติม */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg text-center transition"
                  >
                    ดูรายละเอียด
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full bg-yellow-50 rounded-lg p-8 text-center border-2 border-yellow-200">
            <p className="text-gray-600 text-lg">
              ยังไม่มีเกียรติบัตรที่เพิ่มไว้ในระบบ
            </p>
            <p className="text-gray-500 text-sm mt-2">
              โปรดติดต่อเจ้าของเพื่อเพิ่มเกียรติบัตรของคุณ
            </p>
          </div>
        )}
      </section>

      {/* ส่วนคำแนะนำ */}
      <section className="w-full max-w-4xl mt-12 bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <h2 className="text-xl font-bold text-yellow-600 mb-3">
          📝 วิธีเพิ่มเกียรติบัตร
        </h2>
        <ul className="text-gray-700 space-y-2 list-disc list-inside">
          <li>
            นำไฟล์เกียรติบัตร (PDF หรือรูปภาพ) ไปวางไว้ในโฟลเดอร์ <code className="bg-gray-200 px-2 py-1 rounded">public</code>
          </li>
          <li>
            เพิ่มข้อมูลเกียรติบัตรในไฟล์ <code className="bg-gray-200 px-2 py-1 rounded">certificates/page.tsx</code>
          </li>
          <li>
            กำหนด URL ของไฟล์ในอ็อบเจ็กต์ <code className="bg-gray-200 px-2 py-1 rounded">image</code>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-xs text-gray-400 py-8 mt-12">
        © 2025 Kanokkan Witthura. All rights reserved.
      </footer>
    </div>
  );
}
