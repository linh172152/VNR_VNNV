export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'geneva-agreement' | 'ngo-dinh-diem-regime' | 'north-socialist' | 'south-resistance' | 'us-intervention' | 'civil-war-perspective';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Hiệp định Geneva 1954 chia đôi đất nước tại vĩ tuyến nào?",
    options: [
      "Vĩ tuyến 16",
      "Vĩ tuyến 17",
      "Vĩ tuyến 18",
      "Vĩ tuyến 19"
    ],
    correctAnswer: 1,
    explanation: "Hiệp định Geneva chia đôi đất nước tại vĩ tuyến 17, miền Bắc thuộc Việt Nam Dân chủ Cộng hòa, miền Nam thuộc Quốc gia Việt Nam.",
    category: 'geneva-agreement',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Theo Hiệp định Geneva, tổng tuyển cử thống nhất đất nước dự kiến diễn ra khi nào?",
    options: [
      "Sau 1 năm",
      "Sau 2 năm",
      "Sau 3 năm",
      "Không có thời hạn cụ thể"
    ],
    correctAnswer: 1,
    explanation: "Hiệp định Geneva dự kiến tổng tuyển cử thống nhất đất nước sau 2 năm, tức là vào năm 1956.",
    category: 'geneva-agreement',
    difficulty: 'medium'
  },
  {
    id: 3,
    question: "Ngô Đình Diệm được ai hậu thuẫn để nắm quyền ở miền Nam?",
    options: [
      "Pháp",
      "Mỹ",
      "Anh",
      "Trung Quốc"
    ],
    correctAnswer: 1,
    explanation: "Ngô Đình Diệm được Mỹ hậu thuẫn và hỗ trợ để nắm quyền ở miền Nam Việt Nam.",
    category: 'ngo-dinh-diem-regime',
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Chính quyền Ngô Đình Diệm có đặc điểm gì?",
    options: [
      "Dân chủ đa đảng",
      "Độc tài gia đình trị",
      "Cộng hòa nghị viện",
      "Quân chủ lập hiến"
    ],
    correctAnswer: 1,
    explanation: "Chính quyền Ngô Đình Diệm là chế độ độc tài gia đình trị, tập trung quyền lực vào gia đình Ngô Đình Diệm.",
    category: 'ngo-dinh-diem-regime',
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "Chính quyền Ngô Đình Diệm có từ chối tổng tuyển cử thống nhất không?",
    options: [
      "Có, từ chối hoàn toàn",
      "Không, đồng ý tổ chức",
      "Chỉ đồng ý một phần",
      "Không có quan điểm rõ ràng"
    ],
    correctAnswer: 0,
    explanation: "Chính quyền Ngô Đình Diệm từ chối tổng tuyển cử thống nhất đất nước theo Hiệp định Geneva.",
    category: 'ngo-dinh-diem-regime',
    difficulty: 'easy'
  },
  {
    id: 6,
    question: "Miền Bắc tiến hành cải cách ruộng đất trong thời gian nào?",
    options: [
      "1953-1956",
      "1954-1957",
      "1955-1958",
      "1956-1959"
    ],
    correctAnswer: 0,
    explanation: "Miền Bắc tiến hành cải cách ruộng đất từ 1953-1956, xóa bỏ chế độ phong kiến và phân phối ruộng đất cho nông dân.",
    category: 'north-socialist',
    difficulty: 'medium'
  },
  {
    id: 7,
    question: "Đường lối xây dựng chủ nghĩa xã hội ở miền Bắc có mục tiêu gì?",
    options: [
      "Chỉ phát triển công nghiệp",
      "Xây dựng xã hội công bằng, dân chủ, văn minh",
      "Chỉ cải cách nông nghiệp",
      "Chỉ phát triển giáo dục"
    ],
    correctAnswer: 1,
    explanation: "Đường lối xây dựng chủ nghĩa xã hội ở miền Bắc nhằm xây dựng xã hội công bằng, dân chủ, văn minh với con người mới.",
    category: 'north-socialist',
    difficulty: 'medium'
  },
  {
    id: 8,
    question: "Mặt trận Dân tộc Giải phóng miền Nam được thành lập năm nào?",
    options: [
      "1959",
      "1960",
      "1961",
      "1962"
    ],
    correctAnswer: 1,
    explanation: "Mặt trận Dân tộc Giải phóng miền Nam được thành lập ngày 20/12/1960 để đoàn kết các lực lượng đấu tranh ở miền Nam.",
    category: 'south-resistance',
    difficulty: 'easy'
  },
  {
    id: 9,
    question: "Mục tiêu của Mặt trận Dân tộc Giải phóng miền Nam là gì?",
    options: [
      "Chỉ đấu tranh chính trị",
      "Giải phóng miền Nam, thống nhất đất nước",
      "Chỉ đấu tranh vũ trang",
      "Thành lập chính quyền riêng"
    ],
    correctAnswer: 1,
    explanation: "Mục tiêu của Mặt trận Dân tộc Giải phóng miền Nam là giải phóng miền Nam và thống nhất đất nước.",
    category: 'south-resistance',
    difficulty: 'easy'
  },
  {
    id: 10,
    question: "Mỹ bắt đầu gửi cố vấn quân sự vào miền Nam từ năm nào?",
    options: [
      "1959",
      "1960",
      "1961",
      "1962"
    ],
    correctAnswer: 2,
    explanation: "Mỹ bắt đầu gửi cố vấn quân sự vào miền Nam từ năm 1961, tăng cường can thiệp vào Việt Nam.",
    category: 'us-intervention',
    difficulty: 'medium'
  },
  {
    id: 11,
    question: "Sự kiện Vịnh Bắc Bộ diễn ra vào tháng nào năm 1964?",
    options: [
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9"
    ],
    correctAnswer: 2,
    explanation: "Sự kiện Vịnh Bắc Bộ diễn ra vào ngày 2-4/8/1964, Mỹ tạo cớ để can thiệp quân sự trực tiếp.",
    category: 'us-intervention',
    difficulty: 'medium'
  },
  {
    id: 12,
    question: "Nghị quyết Vịnh Bắc Bộ cho phép Tổng thống Mỹ làm gì?",
    options: [
      "Chỉ đàm phán hòa bình",
      "Sử dụng vũ lực ở Việt Nam",
      "Chỉ hỗ trợ kinh tế",
      "Chỉ gửi cố vấn"
    ],
    correctAnswer: 1,
    explanation: "Nghị quyết Vịnh Bắc Bộ cho phép Tổng thống Mỹ sử dụng vũ lực ở Việt Nam, mở đường cho cuộc chiến tranh cục bộ.",
    category: 'us-intervention',
    difficulty: 'easy'
  },
  {
    id: 13,
    question: "Mỹ đổ bộ lính trực tiếp vào miền Nam năm nào?",
    options: [
      "1964",
      "1965",
      "1966",
      "1967"
    ],
    correctAnswer: 1,
    explanation: "Mỹ đổ bộ lính trực tiếp vào miền Nam năm 1965, bắt đầu cuộc chiến tranh cục bộ.",
    category: 'us-intervention',
    difficulty: 'easy'
  },
  {
    id: 14,
    question: "Quan điểm cho rằng giai đoạn 1954-1965 là 'nội chiến' có đúng không?",
    options: [
      "Hoàn toàn đúng",
      "Hoàn toàn sai",
      "Có một phần đúng",
      "Không thể đánh giá"
    ],
    correctAnswer: 2,
    explanation: "Quan điểm này có một phần đúng về mặt hình thức (hai chính quyền đối lập), nhưng sai về bản chất (có sự can thiệp của Mỹ).",
    category: 'civil-war-perspective',
    difficulty: 'hard'
  },
  {
    id: 15,
    question: "Tính chính danh của chính quyền Việt Nam Cộng hòa như thế nào?",
    options: [
      "Hoàn toàn chính danh",
      "Hoàn toàn không chính danh",
      "Có một phần chính danh",
      "Không thể đánh giá"
    ],
    correctAnswer: 1,
    explanation: "Chính quyền Việt Nam Cộng hòa không chính danh vì được thành lập dưới sự can thiệp của Mỹ và từ chối tổng tuyển cử thống nhất.",
    category: 'civil-war-perspective',
    difficulty: 'hard'
  },
  {
    id: 16,
    question: "Đường lối của Đảng ở miền Bắc giai đoạn 1954-1965 là gì?",
    options: [
      "Chỉ tập trung quân sự",
      "Xây dựng chủ nghĩa xã hội và hỗ trợ miền Nam",
      "Chỉ phát triển kinh tế",
      "Chỉ đấu tranh chính trị"
    ],
    correctAnswer: 1,
    explanation: "Đường lối của Đảng ở miền Bắc là xây dựng chủ nghĩa xã hội và hỗ trợ cuộc đấu tranh giải phóng miền Nam.",
    category: 'north-socialist',
    difficulty: 'medium'
  },
  {
    id: 17,
    question: "Chương trình 'Ấp chiến lược' của chính quyền Sài Gòn có mục đích gì?",
    options: [
      "Phát triển nông nghiệp",
      "Cắt đứt liên lạc giữa nhân dân và cách mạng",
      "Cải thiện đời sống nông dân",
      "Xây dựng cơ sở hạ tầng"
    ],
    correctAnswer: 1,
    explanation: "Chương trình 'Ấp chiến lược' nhằm tập trung dân và cắt đứt liên lạc giữa nhân dân và cách mạng.",
    category: 'ngo-dinh-diem-regime',
    difficulty: 'medium'
  },
  {
    id: 18,
    question: "Phong trào Phật giáo 1963 phản đối điều gì?",
    options: [
      "Chính sách kinh tế",
      "Chính sách kỳ thị tôn giáo",
      "Chính sách giáo dục",
      "Chính sách ngoại giao"
    ],
    correctAnswer: 1,
    explanation: "Phong trào Phật giáo 1963 phản đối chính sách kỳ thị tôn giáo của chính quyền Ngô Đình Diệm.",
    category: 'ngo-dinh-diem-regime',
    difficulty: 'easy'
  },
  {
    id: 19,
    question: "Cuộc đảo chính lật đổ Ngô Đình Diệm diễn ra năm nào?",
    options: [
      "1962",
      "1963",
      "1964",
      "1965"
    ],
    correctAnswer: 1,
    explanation: "Cuộc đảo chính lật đổ Ngô Đình Diệm diễn ra ngày 1/11/1963.",
    category: 'ngo-dinh-diem-regime',
    difficulty: 'easy'
  },
  {
    id: 20,
    question: "Bản chất của cuộc đấu tranh ở miền Nam giai đoạn 1954-1965 là gì?",
    options: [
      "Nội chiến thuần túy",
      "Chiến tranh giải phóng dân tộc",
      "Chiến tranh tôn giáo",
      "Chiến tranh kinh tế"
    ],
    correctAnswer: 1,
    explanation: "Bản chất của cuộc đấu tranh ở miền Nam là chiến tranh giải phóng dân tộc, chống lại sự can thiệp của Mỹ và chính quyền tay sai.",
    category: 'civil-war-perspective',
    difficulty: 'hard'
  },
  {
    id: 21,
    question: "Tại sao quan điểm 'nội chiến' không phản ánh đúng bản chất giai đoạn 1954-1965?",
    options: [
      "Vì không có hai chính quyền",
      "Vì có sự can thiệp của Mỹ từ đầu",
      "Vì không có xung đột",
      "Vì chỉ có đấu tranh chính trị"
    ],
    correctAnswer: 1,
    explanation: "Quan điểm 'nội chiến' không đúng vì từ đầu đã có sự can thiệp của Mỹ, không phải là cuộc đấu tranh nội bộ thuần túy.",
    category: 'civil-war-perspective',
    difficulty: 'hard'
  },
  {
    id: 22,
    question: "Mỹ hỗ trợ chính quyền Sài Gòn bằng cách nào?",
    options: [
      "Chỉ hỗ trợ kinh tế",
      "Hỗ trợ kinh tế, quân sự và chính trị",
      "Chỉ hỗ trợ quân sự",
      "Chỉ hỗ trợ chính trị"
    ],
    correctAnswer: 1,
    explanation: "Mỹ hỗ trợ chính quyền Sài Gòn toàn diện về kinh tế, quân sự và chính trị.",
    category: 'us-intervention',
    difficulty: 'medium'
  },
  {
    id: 23,
    question: "Đặc điểm của chế độ Ngô Đình Diệm là gì?",
    options: [
      "Dân chủ đa đảng",
      "Độc tài gia đình trị và đàn áp",
      "Cộng hòa nghị viện",
      "Quân chủ lập hiến"
    ],
    correctAnswer: 1,
    explanation: "Chế độ Ngô Đình Diệm là độc tài gia đình trị và đàn áp các phong trào đối lập.",
    category: 'ngo-dinh-diem-regime',
    difficulty: 'medium'
  },
  {
    id: 24,
    question: "Mục tiêu của Đảng ở miền Bắc giai đoạn 1954-1965 là gì?",
    options: [
      "Chỉ xây dựng kinh tế",
      "Xây dựng chủ nghĩa xã hội và hỗ trợ miền Nam",
      "Chỉ đấu tranh quân sự",
      "Chỉ phát triển văn hóa"
    ],
    correctAnswer: 1,
    explanation: "Mục tiêu của Đảng ở miền Bắc là xây dựng chủ nghĩa xã hội và hỗ trợ cuộc đấu tranh giải phóng miền Nam.",
    category: 'north-socialist',
    difficulty: 'easy'
  },
  {
    id: 25,
    question: "Tính chất của cuộc đấu tranh ở miền Nam có đặc điểm gì?",
    options: [
      "Chỉ đấu tranh chính trị",
      "Kết hợp đấu tranh chính trị và vũ trang",
      "Chỉ đấu tranh vũ trang",
      "Chỉ đấu tranh kinh tế"
    ],
    correctAnswer: 1,
    explanation: "Cuộc đấu tranh ở miền Nam kết hợp cả đấu tranh chính trị và vũ trang để giải phóng dân tộc.",
    category: 'south-resistance',
    difficulty: 'medium'
  }
];

export const quizCategories = [
  { id: 'geneva-agreement', name: 'Hiệp định Geneva', color: 'bg-blue-500' },
  { id: 'ngo-dinh-diem-regime', name: 'Chế độ Ngô Đình Diệm', color: 'bg-red-500' },
  { id: 'north-socialist', name: 'Miền Bắc xã hội chủ nghĩa', color: 'bg-green-500' },
  { id: 'south-resistance', name: 'Đấu tranh miền Nam', color: 'bg-purple-500' },
  { id: 'us-intervention', name: 'Can thiệp của Mỹ', color: 'bg-orange-500' },
  { id: 'civil-war-perspective', name: 'Quan điểm nội chiến', color: 'bg-yellow-500' }
];

export const difficultyLevels = [
  { id: 'easy', name: 'Dễ', color: 'bg-green-500' },
  { id: 'medium', name: 'Trung bình', color: 'bg-yellow-500' },
  { id: 'hard', name: 'Khó', color: 'bg-red-500' }
];
