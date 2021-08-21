/*
  Warnings:

  - A unique constraint covering the columns `[hashedPassword]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[salt]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User.hashedPassword_unique" ON "User"("hashedPassword");

-- CreateIndex
CREATE UNIQUE INDEX "User.salt_unique" ON "User"("salt");
