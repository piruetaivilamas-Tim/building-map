// ============================================================
// ฐานข้อมูลห้องทุกชั้น — แก้/เพิ่มห้องที่นี่ที่เดียว ใช้ร่วมกันทุกหน้า
// floorNum ใช้จับคู่กับไฟล์: 1->index.html, 2->floor2.html ...
// ============================================================
const allRooms = [
  // ---------- ชั้น 1 ----------
  { code: "A",  floorNum: 1, desc: "ห้องพักอาจารย์" },
  { code: "B6101-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6102-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6103-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6104-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6105-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6106-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6107-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6108-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6109-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "B6110-A", floorNum: 1, desc: "ห้องเรียน" },
  { code: "C",  floorNum: 1, desc: "ห้องงานนวัตกรรมและการบริการ" },
  { code: "D",  floorNum: 1, desc: "ห้องบริการโสตทัศนูปกรณ์" },
  { code: "H",  floorNum: 1, desc: "สำนักงานสำนักวิชาศาสตร์และศิลป์ดิจิทัล" },
  { code: "LS", floorNum: 1, desc: "Learning Space" },
  { code: "VM", floorNum: 1, desc: "ห้องปฏิบัติการโลกเสมือนจริง หลักสูตรการใช้งานและวิธีซ่อมบำรุงยานยนต์ไฟฟ้า" },
  { code: "VD", floorNum: 1, desc: "ห้องปฏิบัติการโลกเสมือนจริง หลักสูตรการใช้งานและวิธีซ่อมบำรุงโดรน" },

  // ---------- ชั้น 2 ----------
  { code: "A",  floorNum: 2, desc: "ห้องพักอาจารย์" },
  { code: "DL", floorNum: 2, desc: "ห้องปฏิบัติการเทคโนโลยีดิจิทัล 1-9 และ 19" },
  { code: "SE", floorNum: 2, desc: "ห้องบริการเทคโนโลยีดิจิทัล 1, 2" },
  { code: "S",  floorNum: 2, desc: "ห้องปฏิบัติการเสียง" },
  { code: "SP", floorNum: 2, desc: "ห้องปฏิบัติการด้านลำดับภาพและเสียง" },
  { code: "I",  floorNum: 2, desc: "สำนักงานศูนย์นวัตกรรมและเทคโนโลยีการศึกษา" },
  { code: "I1", floorNum: 2, desc: "สตูดิโอถ่ายภาพ" },
  { code: "I2", floorNum: 2, desc: "ห้องประเมินประสิทธิภาพการสอน" },
  { code: "C",  floorNum: 2, desc: "Creative Media & Innovation Space" },
  { code: "D1", floorNum: 2, desc: "ห้องปฏิบัติการด้านนิเทศศาสตร์ดิจิทัล 1" },
  { code: "D2", floorNum: 2, desc: "ห้องปฏิบัติการด้านนิเทศศาสตร์ดิจิทัล 2" },
  { code: "D3", floorNum: 2, desc: "ห้องปฏิบัติการด้านนิเทศศาสตร์ดิจิทัล 3" },
  { code: "MP", floorNum: 2, desc: "ห้องอเนกประสงค์" },

  // ---------- ชั้น 3 ----------
  { code: "DL", floorNum: 3, desc: "ห้องปฏิบัติการเทคโนโลยีดิจิทัล 10 - 18" },
  { code: "D1", floorNum: 3, desc: "ห้องปฏิบัติการเทคโนโลยีดิจิทัลเชิงนวัตกรรมขั้นสูง" },
  { code: "D2", floorNum: 3, desc: "ห้องปฏิบัติการธุรกิจอัจฉริยะและการวิเคราะห์ข้อมูล" },
  { code: "D3", floorNum: 3, desc: "ห้องปฏิบัติการไซเบอร์สเปซและความมั่นคงปลอดภัยไซเบอร์" },
  { code: "DS", floorNum: 3, desc: "ห้องปฏิบัติการด้านการผลิตรายการดิจิทัล" },
  { code: "DS", floorNum: 3, desc: "ห้องปฏิบัติการด้านการผลิตรายการดิจิทัลขนาดเล็ก" },
  { code: "VL", floorNum: 3, desc: "ห้องปฏิบัติการด้านเทคโนโลยีเสมือนจริง" },
  { code: "R",  floorNum: 3, desc: "ห้องปฏิบัติการวิจัยเทคโนโลยีสื่อดิจิทัล" },
  { code: "K",  floorNum: 3, desc: "ห้องควบคุมทางเทคนิค" },
  { code: "PS", floorNum: 3, desc: "ห้องปฏิบัติการบริหารจัดการคลังสื่อดิจิทัล 1 - 6" },
  { code: "S",  floorNum: 3, desc: "ห้องคัดเลือกสื่อดิจิทัล" },
  { code: "N",  floorNum: 3, desc: "ห้องปฏิบัติการตรวจสอบคุณภาพสื่อ" },
  { code: "T",  floorNum: 3, desc: "ห้องสตูดิโอบันทึกเสียง 1 - 4" },
  { code: "V",  floorNum: 3, desc: "ห้องปฏิบัติการด้านเสียงขั้นสูง" },
  { code: "G",  floorNum: 3, desc: "ห้องผลิตสื่อการสอนด้วยตัวเอง 1 - 4" },

  // ---------- ชั้น 4 ----------
  { code: "CCS", floorNum: 4, desc: "สำนักงานศูนย์คอมพิวเตอร์" },
  { code: "M1",  floorNum: 4, desc: "ห้องประชุมสิริคุณากร" },
  { code: "M2",  floorNum: 4, desc: "ห้องประชุมสีมาดิจิทัล" },
  { code: "M3",  floorNum: 4, desc: "ห้องประชุมคุณากรัตน์" },
  { code: "ST1", floorNum: 4, desc: "ห้อง Studio Control Room 1" },
  { code: "ST2", floorNum: 4, desc: "ห้อง Digital Studio 2" },
  { code: "ST3", floorNum: 4, desc: "ห้อง Digital Studio 3" },
  { code: "O",   floorNum: 4, desc: "ห้องประชุมทางไกล" },
  { code: "I",   floorNum: 4, desc: "สำนักงานศูนย์นวัตกรรมและเทคโนโลยีการศึกษา" },

  // ---------- ชั้น 5 ----------
  { code: "B",   floorNum: 5, desc: "ห้องเรียน" },
  { code: "MIS", floorNum: 5, desc: "สถานส่งเสริมและพัฒนาระบบสารสนเทศเพื่อการจัดการ" },
  { code: "LS",  floorNum: 5, desc: "Learning Space" },
];

const floorFileMap = {
  1: "index.html",
  2: "floor2.html",
  3: "floor3.html",
  4: "floor4.html",
  5: "floor5.html",
};

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      searchResults.classList.remove('show');
      searchResults.innerHTML = '';
      return;
    }
    const hits = allRooms.filter(r =>
      r.code.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q)
    );

    searchResults.innerHTML = hits.length
      ? hits.slice(0, 8).map((r, i) =>
          `<div class="search-hit" data-idx="${i}"><b>${r.code}</b><span>ชั้น ${r.floorNum} · ${r.desc}</span></div>`
        ).join('')
      : `<div class="search-hit">ไม่พบห้องที่ค้นหา</div>`;

    [...searchResults.querySelectorAll('.search-hit[data-idx]')].forEach((el, i) => {
      el.addEventListener('click', () => openRoomModal(hits[i]));
    });

    searchResults.classList.add('show');
  });
}

// ============================================================
// Modal
// ============================================================
const roomModal = document.getElementById('roomModal');

function openRoomModal(room) {
  document.getElementById('modalFloorTag').textContent = `ชั้น ${room.floorNum}`;
  document.getElementById('modalRoomCode').textContent = room.code;
  document.getElementById('modalRoomDesc').textContent = room.desc;
  document.getElementById('modalGoBtn').href = floorFileMap[room.floorNum];
  roomModal.classList.add('show');
  searchResults.classList.remove('show');
}

function closeRoomModal() {
  roomModal.classList.remove('show');
}

if (roomModal) {
  roomModal.querySelector('.room-modal__overlay').addEventListener('click', closeRoomModal);
  roomModal.querySelector('.room-modal__close').addEventListener('click', closeRoomModal);
}