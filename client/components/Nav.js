import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link href="/">
              <a>메인</a>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <a>로그인</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
