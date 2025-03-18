import { useState } from 'react';
import { login } from '../lib/auth';  // auth.js からインポート

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // フォームの送信処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);  // auth.js の login 関数を使用
      setEmail('');
      setPassword('');
      alert('ログイン成功');
    } catch (error) {
      setError(error.message);  // エラーメッセージを表示
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ログイン</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* エラーがあれば表示 */}
    </div>
  );
};

export default Login;