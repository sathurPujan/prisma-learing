import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialStudent: Prisma.studentCreateInput[] = [
  {
    title: "sathur",
    slug: "sathur",
    content: "sathur pro player",
    author: {
      connectOrCreate: {
        where: {
          email: "sathur@gmail.com",
        },
        create: {
          email: "sathur@gamil.com",
          hashedPassword: "asdasfas23424sads",
        },
      },
    },
  },
];

async function main() {
  console.log("start seeding...");
  for (const student of initialStudent) {
    const newStudent = await prisma.student.create({
      data: student,
    });
    console.log(`created student with id :${newStudent.id}`);
  }
  console.log(`seeding finished /.`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
