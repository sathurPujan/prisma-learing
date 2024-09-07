import prisma from "@/lib/db";

export default async function Feedpage({ params }) {
  const student = await prisma.student.findUnique({
    where: {
      slug: params.slug,
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>{student?.title}</h2>
      <p>{student?.content}</p>
    </main>
  );
}
