import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-400 flex flex-col gap-4 justify-center items-center">
      <Link
        href="/auth"
        className="bg-white text-black w-[100px] h-8 flex justify-center items-center"
      >
        Login
      </Link>
    </div>
  );
}
