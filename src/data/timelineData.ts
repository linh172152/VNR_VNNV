import type { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'geneva-agreement',
    date: '21/7/1954',
    title: 'Hiệp định Geneva',
    description: 'Kết thúc cuộc kháng chiến chống Pháp, chia đôi đất nước tại vĩ tuyến 17',
    details: [
      'Pháp công nhận độc lập của Việt Nam',
      'Chia đôi đất nước tại vĩ tuyến 17',
      'Miền Bắc: Việt Nam Dân chủ Cộng hòa',
      'Miền Nam: Quốc gia Việt Nam (sau là Việt Nam Cộng hòa)',
      'Dự kiến tổng tuyển cử thống nhất sau 2 năm'
    ],
    category: 'political',
  },
  {
    id: 'ngo-dinh-diem-rule',
    date: '1954-1955',
    title: 'Ngô Đình Diệm nắm quyền',
    description: 'Thiết lập chính quyền Việt Nam Cộng hòa với sự hỗ trợ của Mỹ',
    details: [
      'Ngô Đình Diệm được Mỹ hậu thuẫn',
      'Thành lập chính quyền Việt Nam Cộng hòa',
      'Từ chối tổng tuyển cử thống nhất',
      'Thiết lập chế độ độc tài gia đình trị',
      'Đàn áp các phong trào đối lập'
    ],
    category: 'political',
  },
  {
    id: 'north-socialist-construction',
    date: '1954-1965',
    title: 'Xây dựng chủ nghĩa xã hội ở miền Bắc',
    description: 'Đảng lãnh đạo xây dựng chế độ xã hội chủ nghĩa ở miền Bắc',
    details: [
      'Cải cách ruộng đất và hợp tác hóa nông nghiệp',
      'Cải tạo công thương nghiệp tư bản tư doanh',
      'Xây dựng nền kinh tế kế hoạch hóa',
      'Phát triển giáo dục và y tế miễn phí',
      'Xây dựng con người mới xã hội chủ nghĩa'
    ],
    category: 'social',
  },
  {
    id: 'south-resistance-movement',
    date: '1954-1960',
    title: 'Phong trào đấu tranh ở miền Nam',
    description: 'Nhân dân miền Nam đấu tranh chống chế độ Ngô Đình Diệm',
    details: [
      'Phong trào đấu tranh chính trị của nhân dân',
      'Phản đối việc từ chối tổng tuyển cử',
      'Đấu tranh chống đàn áp và khủng bố',
      'Yêu cầu thực hiện Hiệp định Geneva',
      'Hình thành các tổ chức đấu tranh hợp pháp'
    ],
    category: 'political',
  },
  {
    id: 'nlf-formation',
    date: '20/12/1960',
    title: 'Thành lập Mặt trận Dân tộc Giải phóng miền Nam',
    description: 'Thành lập tổ chức đoàn kết các lực lượng đấu tranh ở miền Nam',
    details: [
      'Đoàn kết các tầng lớp nhân dân miền Nam',
      'Mục tiêu: giải phóng miền Nam, thống nhất đất nước',
      'Kết hợp đấu tranh chính trị và vũ trang',
      'Được nhân dân miền Nam ủng hộ',
      'Thể hiện ý chí thống nhất của dân tộc'
    ],
    category: 'political',
  },
  {
    id: 'us-intervention-escalation',
    date: '1961-1965',
    title: 'Mỹ can thiệp sâu vào miền Nam',
    description: 'Mỹ tăng cường can thiệp quân sự và chính trị vào miền Nam',
    details: [
      'Gửi cố vấn quân sự Mỹ',
      'Hỗ trợ kinh tế và quân sự cho chính quyền Sài Gòn',
      'Thực hiện chiến lược "Chiến tranh đặc biệt"',
      'Thiết lập các căn cứ quân sự',
      'Chuẩn bị cho cuộc chiến tranh cục bộ'
    ],
    category: 'military',
  },
  {
    id: 'strategic-hamlet-program',
    date: '1962-1963',
    title: 'Chương trình "Ấp chiến lược"',
    description: 'Chính quyền Sài Gòn thực hiện chương trình tập trung dân',
    details: [
      'Tập trung dân vào các ấp chiến lược',
      'Cắt đứt liên lạc giữa nhân dân và cách mạng',
      'Thực hiện chính sách "tát nước bắt cá"',
      'Gây nhiều khó khăn cho nhân dân',
      'Thất bại do không được nhân dân ủng hộ'
    ],
    category: 'social',
  },
  {
    id: 'buddhist-crisis',
    date: '1963',
    title: 'Phong trào Phật giáo',
    description: 'Phong trào đấu tranh của Phật tử chống chế độ Ngô Đình Diệm',
    details: [
      'Phật tử phản đối chính sách kỳ thị tôn giáo',
      'Tự thiêu của Hòa thượng Thích Quảng Đức',
      'Phong trào lan rộng khắp miền Nam',
      'Làm suy yếu chế độ Ngô Đình Diệm',
      'Dẫn đến cuộc đảo chính lật đổ Ngô Đình Diệm'
    ],
    category: 'social',
  },
  {
    id: 'ngo-dinh-diem-overthrow',
    date: '1/11/1963',
    title: 'Đảo chính lật đổ Ngô Đình Diệm',
    description: 'Quân đội Sài Gòn lật đổ chế độ Ngô Đình Diệm',
    details: [
      'Quân đội Sài Gòn tiến hành đảo chính',
      'Ngô Đình Diệm và Ngô Đình Nhu bị giết',
      'Chế độ độc tài gia đình trị sụp đổ',
      'Mỹ đồng ý với cuộc đảo chính',
      'Tình hình chính trị miền Nam bất ổn'
    ],
    category: 'political',
  },
  {
    id: 'gulf-of-tonkin-incident',
    date: '2-4/8/1964',
    title: 'Sự kiện Vịnh Bắc Bộ',
    description: 'Mỹ tạo cớ để can thiệp quân sự trực tiếp vào Việt Nam',
    details: [
      'Mỹ cáo buộc Việt Nam tấn công tàu chiến Mỹ',
      'Quốc hội Mỹ thông qua Nghị quyết Vịnh Bắc Bộ',
      'Cho phép Tổng thống Mỹ sử dụng vũ lực',
      'Mở đường cho cuộc chiến tranh cục bộ',
      'Bắt đầu can thiệp quân sự trực tiếp của Mỹ'
    ],
    category: 'military',
  },
  {
    id: 'us-direct-intervention',
    date: '1965',
    title: 'Mỹ can thiệp quân sự trực tiếp',
    description: 'Mỹ bắt đầu cuộc chiến tranh cục bộ ở Việt Nam',
    details: [
      'Đổ bộ lính Mỹ vào miền Nam',
      'Bắt đầu cuộc chiến tranh cục bộ',
      'Ném bom miền Bắc',
      'Việt Nam chuyển sang giai đoạn kháng chiến chống Mỹ',
      'Kết thúc giai đoạn "nội chiến" giả định'
    ],
    category: 'military',
  }
];
