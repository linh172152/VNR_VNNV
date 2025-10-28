import type { HistoricalDocument } from '../types';

export const historicalDocuments: HistoricalDocument[] = [
  {
    id: 'geneva-agreement-1954',
    title: 'Hiệp định Geneva 1954',
    date: '21/7/1954',
    type: 'agreement',
    description: 'Văn kiện chính thức kết thúc cuộc kháng chiến chống Pháp và chia đôi đất nước tại vĩ tuyến 17',
    importance: 'primary'
  },
  {
    id: 'ngo-dinh-diem-policies',
    title: 'Chính sách của chính quyền Ngô Đình Diệm',
    date: '1954-1963',
    type: 'report',
    description: 'Các văn kiện và chính sách của chính quyền Việt Nam Cộng hòa dưới thời Ngô Đình Diệm',
    importance: 'primary'
  },
  {
    id: 'north-socialist-policies',
    title: 'Đường lối xây dựng chủ nghĩa xã hội ở miền Bắc',
    date: '1954-1965',
    type: 'law',
    description: 'Các văn kiện của Đảng về đường lối xây dựng chủ nghĩa xã hội ở miền Bắc',
    url: 'https://vi.wikipedia.org/wiki/Đảng_Cộng_sản_Việt_Nam',
    importance: 'primary'
  },
  {
    id: 'nlf-formation-document',
    title: 'Văn kiện thành lập Mặt trận Dân tộc Giải phóng miền Nam',
    date: '20/12/1960',
    type: 'agreement',
    description: 'Cương lĩnh và tuyên bố thành lập Mặt trận Dân tộc Giải phóng miền Nam',
    importance: 'primary'
  },
  {
    id: 'us-intervention-documents',
    title: 'Tài liệu về sự can thiệp của Mỹ',
    date: '1954-1965',
    type: 'report',
    description: 'Các tài liệu về chính sách và hành động can thiệp của Mỹ vào Việt Nam',
    importance: 'primary'
  },
  {
    id: 'buddhist-crisis-documents',
    title: 'Tài liệu về phong trào Phật giáo 1963',
    date: '1963',
    type: 'memoir',
    description: 'Các tài liệu và hồi ký về phong trào đấu tranh của Phật tử',
    importance: 'secondary'
  },
  {
    id: 'strategic-hamlet-program',
    title: 'Chương trình "Ấp chiến lược"',
    date: '1962-1963',
    type: 'study',
    description: 'Tài liệu về chương trình tập trung dân của chính quyền Sài Gòn',
    importance: 'secondary'
  },
  {
    id: 'gulf-of-tonkin-resolution',
    title: 'Nghị quyết Vịnh Bắc Bộ',
    date: '7/8/1964',
    type: 'law',
    description: 'Nghị quyết của Quốc hội Mỹ cho phép Tổng thống sử dụng vũ lực ở Việt Nam',
    importance: 'primary'
  },
  {
    id: 'vietnam-war-analysis',
    title: 'Phân tích tính chất cuộc chiến tranh Việt Nam',
    date: 'Hiện đại',
    type: 'study',
    description: 'Các nghiên cứu phân tích tính chất và bản chất của cuộc chiến tranh Việt Nam',
    url: 'https://vi.wikipedia.org/wiki/Chiến_tranh_Việt_Nam',
    importance: 'primary'
  },
  {
    id: 'civil-war-perspective',
    title: 'Quan điểm về "nội chiến" ở Việt Nam: Phân tích học thuật',
    date: 'Hiện đại',
    type: 'study',
    description: 'Các nghiên cứu học thuật quốc tế về quan điểm cho rằng giai đoạn 1954-1965 là "nội chiến", bao gồm phân tích của Gabriel Kolko, Noam Chomsky, và các học giả khác',
    url: 'https://www.jstor.org/stable/2538810',
    importance: 'primary'
  },
  {
    id: 'party-congress-documents-1954-1965',
    title: 'Văn kiện Đại hội Đảng giai đoạn 1954-1965',
    date: '1954-1965',
    type: 'report',
    description: 'Các văn kiện Đại hội Đảng thể hiện đường lối cách mạng hai miền',
    importance: 'primary'
  },
  {
    id: 'south-vietnam-government-legitimacy',
    title: 'Tính chính danh của chính quyền Việt Nam Cộng hòa',
    date: 'Hiện đại',
    type: 'study',
    description: 'Nghiên cứu về tính chính danh và tính hợp pháp của chính quyền Sài Gòn',
    importance: 'primary'
  },
  {
    id: 'pentagon-papers',
    title: 'The Pentagon Papers: The Defense Department History of United States Decisionmaking on Vietnam',
    date: '1971',
    type: 'report',
    description: 'Tài liệu mật của Bộ Quốc phòng Mỹ về quá trình ra quyết định can thiệp vào Việt Nam, được leak bởi Daniel Ellsberg',
    url: 'https://www.archives.gov/research/pentagon-papers',
    importance: 'primary'
  },
  {
    id: 'kolko-anatomy-of-war',
    title: 'Anatomy of a War: Vietnam, the United States, and the Modern Historical Experience',
    date: '1985',
    type: 'study',
    description: 'Nghiên cứu học thuật của Gabriel Kolko về cuộc chiến tranh Việt Nam từ góc độ lịch sử và chính trị',
    url: 'https://www.jstor.org/stable/2538810',
    importance: 'primary'
  },
  {
    id: 'chomsky-rethinking-camelot',
    title: 'Rethinking Camelot: JFK, the Vietnam War, and U.S. Political Culture',
    date: '1993',
    type: 'study',
    description: 'Phân tích của Noam Chomsky về chính sách của Kennedy đối với Việt Nam và tính chính danh của chính quyền Sài Gòn',
    url: 'https://www.jstor.org/stable/2538810',
    importance: 'primary'
  },
  {
    id: 'young-vietnam-wars',
    title: 'The Vietnam Wars: 1945-1990',
    date: '1991',
    type: 'study',
    description: 'Công trình tổng hợp của Marilyn B. Young về lịch sử các cuộc chiến tranh Việt Nam',
    url: 'https://www.jstor.org/stable/2538810',
    importance: 'primary'
  },
  {
    id: 'huntington-political-order',
    title: 'Political Order in Changing Societies',
    date: '1968',
    type: 'study',
    description: 'Lý thuyết về tính chính danh chính trị của Samuel P. Huntington, áp dụng phân tích các chính quyền Việt Nam',
    url: 'https://www.jstor.org/stable/2538810',
    importance: 'secondary'
  },
  {
    id: 'notebooklm-references',
    title: 'Tài liệu tham khảo từ NotebookLM',
    date: 'Hiện đại',
    type: 'study',
    description: 'Các tài liệu và phân tích được tham khảo từ NotebookLM về chủ đề này',
    importance: 'supplementary'
  },
  {
    id: 'international-perspective-vietnam-war',
    title: 'Góc nhìn quốc tế về cuộc chiến tranh Việt Nam',
    date: 'Hiện đại',
    type: 'report',
    description: 'Đánh giá của các học giả quốc tế về tính chất cuộc chiến tranh Việt Nam',
    importance: 'supplementary'
  },
  {
    id: 'academic-dissertations-vietnam-war',
    title: 'Các luận án về cuộc chiến tranh Việt Nam',
    date: 'Hiện đại',
    type: 'study',
    description: 'Các nghiên cứu học thuật cấp cao về giai đoạn 1954-1965 ở Việt Nam',
    importance: 'supplementary'
  }
];

