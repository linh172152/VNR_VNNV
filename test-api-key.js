// test-api-key.js - Script test API key
// Chạy: node test-api-key.js

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testAPIKey() {
  // Thay YOUR_API_KEY bằng API key thực
  const API_KEY = 'YOUR_API_KEY';
  
  if (!API_KEY || API_KEY === 'YOUR_API_KEY') {
    console.log('❌ Vui lòng thay YOUR_API_KEY bằng API key thực');
    return;
  }
  
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    const result = await model.generateContent('Xin chào');
    const response = await result.response;
    const text = response.text();
    
    console.log('✅ API key hoạt động tốt!');
    console.log('📝 Response:', text);
  } catch (error) {
    console.log('❌ Lỗi API key:', error.message);
    
    if (error.message.includes('API_KEY_INVALID')) {
      console.log('🔧 Giải pháp:');
      console.log('1. Kiểm tra API key có đúng không');
      console.log('2. Tạo API key mới tại: https://makersuite.google.com/app/apikey');
      console.log('3. Đảm bảo API key có quyền truy cập Gemini API');
    }
  }
}

testAPIKey();
