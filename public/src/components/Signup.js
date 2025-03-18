import { useState } from 'react';
import { signUp } from '../lib/auth';  // auth.js からインポート

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);  // auth.js の signUp を使用
      setEmail('');
      setPassword('');
      alert('サインアップ成功');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>サインアップ</h2>
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
        <button type="submit">サインアップ</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
