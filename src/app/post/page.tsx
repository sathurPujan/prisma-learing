import prisma from "@/lib/db";
import Link from "next/link";
import { createStudent } from "@/actions/actions";
export default async function Home() {
  {
    /*const students = await prisma.student.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });*/
  }
  //
  const user = await prisma.user.findUnique({
    where: {
      email: "sathur@gmail.com",
    },
    include: {
      allStudent: true,
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <ul>
        {user.allStudent.map((listing) => (
          <li key={listing.id}>
            <Link href={`/post/${listing.slug}`}>{listing.title}</Link>
          </li>
        ))}
      </ul>
      <form action={createStudent} className="flex flex-col gap-y-2 w-[300px]">
        <input
          type="text"
          name="title"
          placeholder="title"
          className="px-2 py-1 rounded-sm text-black"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm"
        >
          create name
        </button>
      </form>
    </main>
  );
}
