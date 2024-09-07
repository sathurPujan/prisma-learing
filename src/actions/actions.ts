"use server";
import prisma from "@/lib/db";
import { connect } from "http2";
import { revalidatePath } from "next/cache";
import { title } from "process";
// creating
export async function createStudent(formData: FormData) {
  await prisma.student.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLocaleLowerCase(),
      content: formData.get("content") as string,
      author: {
        connect: {
          email: "sathur@gmail.com",
        },
      },
    },
  });
  revalidatePath("/post");
}

// editing
export async function editData(formData: FormData, id: string) {
  await prisma.student.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formData.get("content") as string,
    },
  });
}
// deleting
export async function deletingData(id: string) {
  await prisma.student.delete({
    where: { id },
  });
}
