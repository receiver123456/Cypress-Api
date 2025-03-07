// 生成随机 Name
export function generateRandomName() {
    const firstNames = ["John", "Jane", "Alice", "Bob", "Charlie", "Diana"];
    const lastNames = ["Smith", "Doe", "Johnson", "Brown", "Lee"];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };
  // 生成随机 Email
  export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10); // 生成随机字符串
    return `user_${randomString}@example.com`; // 返回随机 Email
  }


// import { generateRandomName, generateRandomEmail } from './utils/randomNameAndEmail';

export function updateNameAndEmailInJSON(jsonObject) {
  if (jsonObject) {
    if (jsonObject.name) {
      jsonObject.name = generateRandomName(); // 替换为随机 Name
    }
    if (jsonObject.email) {
      jsonObject.email = generateRandomEmail(); // 替换为随机 Email
    }
  }
  return jsonObject; // 返回修改后的 JSON 对象
}