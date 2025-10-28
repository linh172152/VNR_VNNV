# Việt Nam 1954-1964: Nội chiến hay Giải phóng dân tộc?

## Giới thiệu

Đây là sản phẩm môn học **Lịch sử Đảng Cộng sản Việt Nam** - một website tương tác phân tích giai đoạn lịch sử quan trọng 1954-1964 ở Việt Nam, tập trung vào việc so sánh hai quan điểm về tính chất của cuộc đấu tranh trong thời kỳ này.

## 🌟 Đặc điểm nổi bật

### 🚀 Công nghệ hiện đại
- **React 18** với TypeScript
- **Vite** cho performance tối ưu
- **Tailwind CSS** cho styling hiện đại
- **Framer Motion** cho animations mượt mà
- **Lucide React** cho icon system

### 🎯 Tính năng tương tác
- **Timeline AI Interactive**: Phát tự động các sự kiện lịch sử với AI insights
- **Smart Search Engine**: Tìm kiếm thông minh với AI suggestions
- **Responsive Design**: Tối ưu cho mọi thiết bị
- **Smooth Animations**: Trải nghiệm người dùng mượt mà

### 📚 Nội dung đầy đủ
- **Dòng thời gian chi tiết**: 10 sự kiện quan trọng (1954-1964)
- **Phân tích so sánh**: Hai quan điểm "Nội chiến" vs "Giải phóng dân tộc"
- **Tài liệu lịch sử**: 15+ nguồn tham khảo đáng tin cậy
- **Kết luận khoa học**: Dựa trên phân tích dữ kiện khách quan

## 📁 Cấu trúc dự án

```
vietnam-history-1954-1964/
├── src/
│   ├── components/          # UI Components
│   │   ├── Navbar.tsx
│   │   ├── InteractiveTimeline.tsx
│   │   └── SearchEngine.tsx
│   ├── pages/              # Main Pages
│   │   ├── HomePage.tsx
│   │   ├── TimelinePage.tsx
│   │   ├── AnalysisPage.tsx
│   │   ├── ConclusionPage.tsx
│   │   └── DocumentsPage.tsx
│   ├── data/               # Data Layer
│   │   ├── timelineData.ts
│   │   ├── analysisData.ts
│   │   └── documentsData.ts
│   ├── types/              # TypeScript Types
│   │   └── index.ts
│   └── styles/             # Styling
│       ├── index.css
│       └── App.css
├── public/                 # Static Assets
├── package.json
└── README.md
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 16+
- npm hoặc yarn

### Cài đặt
```bash
# Clone repository (nếu có)
git clone [repository-url]

# Di chuyển vào thư mục dự án
cd vietnam-history-1954-1964

# Cài đặt dependencies
npm install
```

### Cấu hình AI Assistant (Tùy chọn)
Để sử dụng tính năng AI Assistant, bạn cần:

1. **Tạo OpenAI API Key**:
   - Truy cập: https://platform.openai.com/api-keys
   - Đăng ký/đăng nhập tài khoản OpenAI
   - Tạo API key mới

2. **Cấu hình môi trường**:
   ```bash
   # Copy file cấu hình mẫu
   cp .env.example .env

   # Mở file .env và thay thế API key
   # VITE_OPENAI_API_KEY=your_actual_api_key_here
   ```

⚠️ **Lưu ý bảo mật**:
- Không bao giờ commit file `.env` lên Git
- Không chia sẻ API key với người khác
- API key đã được thêm vào `.gitignore`

### Chạy development server
```bash
npm run dev
```

Website sẽ chạy tại: `http://localhost:5173`

### Build cho production
```bash
npm run build
```

## 📖 Nội dung chính

### 1. Dòng thời gian (Timeline)
- **1954**: Hiệp định Geneva, Ngô Đình Diệm lên nắm quyền
- **1955**: Từ chối tổng tuyển cử, Chiến dịch "Tố Cộng"
- **1960**: Thành lập Mặt trận Dân tộc Giải phóng miền Nam
- **1961-1964**: Leo thang can thiệp của Mỹ

### 2. Phân tích so sánh
- **Quan điểm "Nội chiến"**: Luận điểm và dẫn chứng
- **Quan điểm "Giải phóng dân tộc"**: Phân tích dựa trên dữ kiện lịch sử
- **Căn cứ pháp lý, chính trị, xã hội**

### 3. Kết luận
- **Cuộc đấu tranh giải phóng dân tộc** (không phải nội chiến)
- Ba căn cứ chính: Pháp lý, Chính trị, Xã hội
- Ý nghĩa lịch sử và bài học

## 🎨 Design System

### Màu sắc chủ đạo
- **Primary**: Blue to Purple gradient
- **Accent**: Red (Vietnam flag)
- **Secondary**: Gold/Yellow
- **Neutral**: Gray scale

### Typography
- **Font chính**: Inter (Google Fonts)
- **Responsive**: 4xl → 6xl cho headers
- **Accessibility**: High contrast ratios

## 🔧 Tính năng kỹ thuật

### Performance
- ⚡ Vite cho build time nhanh
- 🎯 Code splitting tự động
- 📱 Responsive images
- 🚀 Lazy loading

### Accessibility
- ♿ Semantic HTML
- 🎯 ARIA labels
- ⌨️ Keyboard navigation
- 🎨 High contrast support

### SEO
- 📊 Meta tags optimization
- 🔍 Structured data
- 📱 Mobile-first design

## 📊 Số liệu quan trọng

| Thống kê | Giá trị |
|----------|---------|
| Người bị bắt trong "Tố Cộng" | 100,000+ |
| Người bị giết hại (1955-1959) | ~25,000 |
| Ủng hộ thống nhất (CIA 1955) | 80% |
| Quân nhân Mỹ (1961→1964) | 3,200→23,300 |

## 🏆 Điểm nổi bật của dự án

### 🎯 Tính khoa học
- Dựa trên tài liệu lịch sử chính thức
- Phân tích khách quan, đa chiều
- Kết luận có căn cứ vững chắc

### 💡 Tính sáng tạo
- AI-powered features
- Interactive timeline
- Smart search với gợi ý
- Modern web technologies

### 🌍 Tính ứng dụng
- Phù hợp giảng dạy và nghiên cứu
- Trải nghiệm user-friendly
- Responsive trên mọi thiết bị

## 👥 Tác giả

**Sản phẩm môn học Lịch sử Đảng Cộng sản Việt Nam**
- Trường: [Tên trường]
- Lớp: [Lớp]
- Học kỳ: [Học kỳ]

## 📞 Liên hệ

Nếu có câu hỏi hoặc đóng góp, vui lòng liên hệ qua:
- Email: [email]
- GitHub: [github-profile]

---

**"Lịch sử là thầy giáo vĩ đại của cuộc sống. Hãy học từ quá khứ để xây dựng tương lai tốt đẹp hơn."**
